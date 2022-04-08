import express, {Response, Request} from "express"
import { User } from "../entities/userEntities"

const router = express.Router()

export interface Responsed {
    message: string,
    userMessage: User
}

router.post('/api/v1/user_message/save', async (req: Request, res: Response): Promise<Responsed | void> => {
    const {user_name, email, message} = req.body

    const userMessage = User.create({user_name, email, message})
    await userMessage.save()

    res.json({
        message: "Вы успешно добавили сообщение!",
        userMessage
    })
})


export default router