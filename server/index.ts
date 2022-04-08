import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import {createConnection} from "typeorm"
import {User} from "./entities/userEntities"
import createRouter from "./routes/createUserMessage"
import getRouter from "./routes/getUsersMessage"
import deleteRouter from "./routes/deleteUserMessage"

dotenv.config()

const startServer = async () => {
    const app = express()
    const port = process.env.PORT || 8070
    try {
        await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: process.env.PASSWORD,
            database: process.env.DATA_BASE,
            synchronize: true,
            entities: [User]
        })
        console.log("The database is connected.")

        app.use(cors())
        app.use(express.json())
        app.use(createRouter)
        app.use(getRouter)
        app.use(deleteRouter)

        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`)
        })
    } catch (e) {
        console.log("The database is not connected.")
    }
}

startServer().catch(e => console.log(e))