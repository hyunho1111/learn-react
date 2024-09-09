import React from 'react'
import Inputfield from './Inputfield'
import Passwordfield from '../Passwordfield'
import LoginButton from './LoginButton'
import Socialbutton from './Socialbutton'

const Login = () => {
    return (
        <div className='Login-container'>
            <h1 className='login-title'>로그인</h1>
            <div className='login-form'>
                <Inputfield />
                <Passwordfield />
                <LoginButton />
                <p className='signup-link'>계정이 없으신가요?<a href="#"
                >가입하기</a></p>
                <p className='or-divider'>or</p>
                <Socialbutton />
            </div>
        </div>
    )
}

export default Login