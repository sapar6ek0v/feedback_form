import React, { useState } from 'react'
import {Wrapper} from './styles/Main.styled'
import {useForm, SubmitHandler} from 'react-hook-form'
import map from '../images/map.png'
import axios from 'axios'
import yellowCircle from '../images/yellow_circle.svg'
import yellowEllipse from '../images/yellow_ellipse.png'
import redCartoon from '../images/red_cartoon.svg'
import yellowCartoon from '../images/yellow_cartoon.svg'
import ModalWindow from './ModalWindow'

export interface Message {
    user_name: string
    email: string
    message: string
}

const Main: React.FC = () => {
    const {register, handleSubmit, formState, reset} = useForm<Message>()
    const [showModal, setShowModal] = useState<boolean>(false)
    const [message, setMessage] = useState({} as Message)

    const onSubmit: SubmitHandler<Message> = data => {
        axios.post('http://localhost:8070/api/v1/user_message/save', data)
            .then(({data}) => {
                setMessage(data)
                reset()
            })
            .catch((e) => console.log(e.response?.data?.message))
            .finally(() => setShowModal(true))
    }


    return (
        <Wrapper>
            <img src={yellowCircle} alt="yellow-circle" className="cartoon_circle"/>
            <img src={yellowEllipse} alt="yellow-ellipce" className="cartoon_ellipce"/>
            <div className="row">
                <div className="col-6 pd">
                    <h1>Reach out to us!</h1>
                    <form onClick={handleSubmit(onSubmit)}>
                        <input {...register("user_name", {required: true})} id="user_name" type="text"
                               placeholder="Your name*"/>
                        <input {...register("email", {required: true})} id="email" type="text"
                               placeholder="Your email*"/>
                        <textarea {...register("message", {required: true})} name="message" id="message" cols={20}
                                  rows={5} placeholder="Your message*">
                        </textarea>
                        <button disabled={!formState.isDirty || !formState.isValid}>Send message</button>
                    </form>
                </div>
                <div className="col-6">
                    <img className="map" src={map} alt="map"/>
                    <img src={redCartoon} alt="red-cartoon" className="cartoon_red"/>
                    <img src={yellowCartoon} alt="yellow-cartoon" className="cartoon_yellow"/>
                </div>
            </div>
            {showModal && <ModalWindow onShow={setShowModal} message={message} />}
        </Wrapper>
    )
}

export default Main

