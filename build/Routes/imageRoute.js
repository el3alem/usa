"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var imageController_1 = require("../controllers/imageController");
var router = express_1.default.Router();
exports.router = router;
console.log('hiiiiiiii');
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
router.get('/images', imageController_1.resize, imageController_1.formated, function () { });
