require('dotenv').config();

const environment = {
    port: process.env.PORT || 5000,
    baseUrl: process.env.BASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    emailApiKey: process.env.EMAIL_API_KEY,
    emailFrom: process.env.FROM_EMAIL,
    databaseUrl: process.env.DATABASE_URL
};

module.exports = { environment };
