import React from 'react'
import {Wrapper} from './styles/Footer.styled'
import {GrLinkedinOption} from 'react-icons/gr'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF, FaPinterestP} from 'react-icons/fa'
import {Container} from './styles/Container.styled'
import redCircle from '../images/red_cartoon.svg'
import yellowCircleL from '../images/yellow_circle_ls.svg'
import blueCircle from '../images/blue_circle.svg'

const Footer: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <img src={redCircle} alt="red-cartoon" className="circle_red"/>
                <ul>
                    <li>
                        <a href="https://ru.linkedin.com/">
                            <GrLinkedinOption/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/">
                            <AiOutlineTwitter/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/">
                            <FaFacebookF/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.pinterest.com/">
                            <FaPinterestP/>
                        </a>
                    </li>
                </ul>
                <img src={yellowCircleL} alt="yellow-circle-ls" className="circle_yellow"/>
                <img src={blueCircle} alt="blue-circle" className="circle_blue"/>
            </Container>
        </Wrapper>
    )
}

export default Footer