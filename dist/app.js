"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/api/v1/index"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: [
        'http://localhost:8100',
        'https://editor.swagger.io',
        'https://api-football-cy7l.onrender.com',
        'http://localhost:5173'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Neural API',
            version: '1.0.0',
            description: 'API documentation for the Neural project',
        },
        servers: [
            {
                url: 'https://api-football-cy7l.onrender.com',
                description: 'Production',
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    apis: ['./src/routes/api/v1/*.ts']
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        uptime: process.uptime(),
        timestamp: Date.now(),
        environment: process.env.NODE_ENV || 'development'
    });
});
app.use('/', index_1.default);
exports.default = app;
