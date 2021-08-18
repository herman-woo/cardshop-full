import * as dotenv from "dotenv"
dotenv.config();

export const config = {
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    test: process.env.POSTGRES_TEST_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    bcrypt: process.env.BCRYPT_PASSWORD,
    salt: process.env.SALT_ROUNDS,
    token: process.env.TOKEN_SECRET,
    env: process.env.ENV
}