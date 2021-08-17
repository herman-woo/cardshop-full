"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const orders_1 = __importDefault(require("./handlers/orders"));
const products_1 = __importDefault(require("./handlers/products"));
const users_1 = __importDefault(require("./handlers/users"));
const orders_products_1 = __importDefault(require("./handlers/orders_products"));
const app = express_1.default();
app.use(express_1.default.static("public"));
app.use(cors_1.default());
app.use(express_1.default.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
const port = process.env.PORT || 8081;
app.get('/', (req, res) => {
    res.send('Card Shop Backend API, massive update');
});
users_1.default(app);
products_1.default(app);
orders_1.default(app);
orders_products_1.default(app);
app.listen(port, () => console.log(`Listening on port:${port}`));
