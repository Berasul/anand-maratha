const jwt = require('jsonwebtoken');
const { sendError } = require('../utils/handleResponse');
const { environment } = require('../config/constant');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const authCheck = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) {
            return sendError(res, null, 'Access Denied. No token provided.', 401);
        }

        const decoded = jwt.verify(token, environment.accessTokenSecret);
        if (!decoded || !decoded.user) {
            return sendError(res, null, 'Invalid token.', 401);
        }

        const sessionExists = await prisma.loginSession.findFirst({
            where: { token }
        });

        if (!sessionExists) {
            return sendError(res, null, 'Session expired or invalid.', 401);
        }

        req.user = decoded.user;
        next();
    } catch (error) {
        return sendError(res, error, 'Unauthorized access', 401);
    }
};

module.exports = authCheck;
