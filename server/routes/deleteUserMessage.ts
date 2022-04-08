import express, {Response, Request} from "express"
import { User } from "../entities/userEntities"
import { Responsed } from "./createUserMessage"

const router = express.Router()

router.delete('api/v1/user_message/delete/:id', async (req: Request, res: Response): Promise<Responsed | any> => {
    const {id} = req.params

    const userMessage = await User.delete({id: parseInt(id)})

    if (!userMessage) {
        return res.status(401).json({message: "Not found"})
    }

    res.json({
        message: "Вы успешно удалили сообщение!",
        userMessage
    })
})

export default router