"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var imageRoute_1 = require("../Routes/imageRoute");
var app = (0, express_1.default)();
exports.app = app;
var port = 3000;
app.get('/', function (req, res) {
    res.send('home page');
});
app.use('/api', imageRoute_1.router);
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
