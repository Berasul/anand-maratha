const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const { default: helmet } = require('helmet');
const compression = require('compression');
const routes = require('./routes');
const { environment } = require('./config/constant');
const { sendError } = require('./utils/handleResponse');
const sgMail = require('@sendgrid/mail');
const rateLimit = require('express-rate-limit');

const PORT = environment.port;

const corsOptions = {
    origin: [
        'http://localhost:5173',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

sgMail.setApiKey(environment.emailApiKey);

app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(helmet({ contentSecurityPolicy: false }));
app.disable('x-powered-by');
app.use(compression());

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: process.env.NODE_ENV !== 'production' ? 1000 : 50,
    handler: (req, res) => {
        res.status(429).json({ code: 429, status: false, message: 'Too many requests from this IP, please try again later.', });
    },
});

app.use(limiter);

app.use('/api', routes);
app.use('/api/*', (req, res) => sendError(res, { error: 'Route Not Found', message: `The requested API endpoint '${req.originalUrl}' does not exist.`, }, null));

const uploadPath = path.join(__dirname, 'uploads');
app.use('/uploads/:category/:filename', (req, res) => {
    const { category, filename } = req.params;
    const imagePath = path.join(uploadPath, category, filename);
    res.sendFile(imagePath);
});

app.use((req, res, next) => {
    express.static(path.join(__dirname, 'frontend', 'dist'))(req, res, next);
});

// For frontend client-side routing fallback
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Global error handler
app.use((error, req, res, next) => {
    sendError(res, error, "Something went wrong", error.status);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('Server is listening on port:', PORT);
});

module.exports = app;
