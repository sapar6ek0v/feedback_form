import express, {Response, Request} from "express"
import { User } from "../entities/userEntities"
import { Responsed } from "./createUserMessage"

const router = express.Router()

router.get('/api/v1/user_message/get', async (req: Request, res: Response): Promise<Responsed | any> => {

    const userMessage = await User.find()

    if (!userMessage) {
        return res.status(401).json({message: "Not found"})
    }

    res.json({
        message: "Ваши сообщение!",
        userMessage
    })
})


export default router
