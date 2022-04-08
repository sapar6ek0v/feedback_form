import React from 'react'
import { Message } from './Main'
import { Wrapper } from './styles/ModalWindow.styled'

type Props = {
    onShow: (value: boolean) => void,
    message: Message
}

const ModalImage: React.FC<Props> = ({onShow, message}) => {
    return (
        <Wrapper onClick={() => onShow(false)}>
            <div className="modal">
                <p>
                    {
                        message.message
                    }
                </p>
            </div>
        </Wrapper>
    );
};

export default ModalImage;