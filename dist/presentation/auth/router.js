"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller"); // 1
const infraestructure_1 = require("../../infraestructure");
class AuthRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new infraestructure_1.AuthDataSourceImpl();
        const AuthRepository = new infraestructure_1.AuthRepositoryImpl(datasource);
        const controller = new controller_1.AuthController(AuthRepository);
        router.post('/login', controller.loginUser);
        router.post('/register', controller.registerUser);
        return router;
    }
}
exports.AuthRoutes = AuthRoutes;
