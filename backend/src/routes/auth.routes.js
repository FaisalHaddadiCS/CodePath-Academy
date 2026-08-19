"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const rateLimiter_middleware_1 = require("../middlewares/rateLimiter.middleware");
const router = (0, express_1.Router)();
router.post("/signup", rateLimiter_middleware_1.authLimiter, (0, validate_middleware_1.validateRequest)(auth_controller_1.signupSchema), auth_controller_1.signup);
router.post("/signin", (0, validate_middleware_1.validateRequest)(auth_controller_1.signinSchema), auth_controller_1.signin);
router.post("/signout", auth_controller_1.signout);
router.get("/me", auth_middleware_1.requireAuth, auth_controller_1.getProfile);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map