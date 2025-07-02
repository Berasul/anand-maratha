const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { sendError, sendResponse } = require('../utils/handleResponse');
const { environment } = require('../config/constant');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

/* ----------------------- LOGIN ----------------------- */
exports.LOGIN = async (req, res) => {
    try {
        const { id, password } = req.body;
        if (!id || !password) return sendError(res, null, "id and password are required", 422);

        let user = await prisma.user.findFirst({ where: { id: parseInt(id) } });

        if (!user) return sendError(res, null, "No employee found", 401);

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return sendError(res, null, "Invalid credentials", 401);

        const payload = {
            user: {
                id: user.id,
                email: user.email
            }
        };

        const accessToken = jwt.sign(payload, environment.accessTokenSecret, {
            expiresIn: '10h',
        });

        await prisma.loginSession.create({
            data: { token: accessToken, userId: user.id }
        });

        delete user.password;
        return sendResponse(res, "Login successful", { accessToken, user });
    } catch (error) {
        return sendError(res, error, "Server error in login");
    }
};

/* ----------------------- VERIFY ----------------------- */
exports.VERIFY = async (req, res) => {
    try {
        const accessToken = req.header('Authorization');
        if (!accessToken) return sendError(res, null, 'No token provided', 401);

        const decoded = jwt.verify(accessToken, environment.accessTokenSecret);
        const { user } = decoded;

        const dbUser = await prisma.user.findUnique({
            where: { id: user.id },
            select: { id: true, name: true, email: true, emp_id: true }
        });

        if (!dbUser) return sendError(res, null, 'User not found', 404);

        return sendResponse(res, `Welcome back ${dbUser.name}`, { accessToken, user: dbUser });
    } catch (error) {
        return sendError(res, error, 'Token verification failed');
    }
};

/* ----------------------- LOGOUT ----------------------- */
exports.LOGOUT = async (req, res) => {
    try {
        const accessToken = req.header('Authorization');
        if (!accessToken) return sendError(res, null, 'No token provided', 401);

        await prisma.loginSession.deleteMany({
            where: { token: accessToken }
        });

        return sendResponse(res, 'Logout successful');
    } catch (error) {
        return sendError(res, error, 'Logout failed');
    }
};
