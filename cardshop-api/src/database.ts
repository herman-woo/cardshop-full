import { Pool } from 'pg'
import { config } from './config/config'

const database_variable = (): Pool => {
    if (config.env === 'dev') {
        console.log("Run Dev db")    
    return new Pool({
        host: config.host,
        database: config.database,
        user: config.username,
        password: config.password
    })
    }
    else {
        console.log("Run Test By default")
        return new Pool({
            host: config.host,
            database: config.test,
            user: config.username,
            password: config.password
        })
    }
}
const Client = database_variable()
export default Client