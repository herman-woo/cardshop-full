"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductStore {
    constructor() {
        this.target = "products";
        this.index = async () => {
            try {
                const sql = 'SELECT * FROM products';
                const db = await database_1.default.connect();
                const result = await db.query(sql);
                db.release();
                return result.rows;
            }
            catch (err) {
                console.log(err);
            }
        };
        this.show = async (id) => {
            try {
                const db = await database_1.default.connect();
                const result = await db.query(`SELECT * FROM products WHERE id=${id}`);
                db.release();
                return result.rows[0];
            }
            catch (err) {
                console.log(err);
            }
        };
        this.create = async (card) => {
            try {
                const sql = 'INSERT INTO products (product_name, product_price, product_stock, card_rarity, card_type, card_atk, card_def, card_lv, card_description, img_thumb, img_full) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *';
                const db = await database_1.default.connect();
                const newEntry = await db.query(sql, [card.product_name, card.product_price, card.product_stock, card.card_rarity, card.card_type, card.card_atk, card.card_def, card.card_lv, card.card_description, card.img_thumb, card.img_full]);
                db.release();
                return newEntry.rows[0];
            }
            catch (err) {
                console.log('database error', err);
            }
        };
    }
}
exports.default = ProductStore;
