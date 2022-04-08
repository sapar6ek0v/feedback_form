import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {Route, Routes} from 'react-router-dom'
import {GlobalStyles, Wrapper} from './App.styled'
import Footer from './components/Footer'
import Main from './components/Main'


const App: React.FC = () => {
    
    return (
        <>
            <GlobalStyles/>
            <Wrapper>
                <div className="main">
                    <Routes>
                        <Route path='/' element={<Main/>}/>
                    </Routes>
                </div>
                <Footer/>
            </Wrapper>
        </>
    )
}

export default App
