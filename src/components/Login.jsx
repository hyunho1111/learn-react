import React from 'react'
import Inputfield from './Inputfield'
import LoginButton from './LoginButton'
import HHH from './HHH'

const Login = () => {
    return (
        <div className='Login-container'>
            <h1 className='login-title'>로그인</h1>
            <div className='login-form'>
                <Inputfield type="text" placeholder="이메일" />
                <Inputfield type="password" placeholder="비밀번호" />
                <LoginButton text="로그인" onClick={() => console.log('로그인 클릭')} />
                <p className='or-divider'>또는</p>
                <LoginButton text="Google로 계속하기" onClick={() => console.log('Google 로그인 클릭')} isSocial={true} />
                <HHH type="연습" placeholder="연습" />
            </div>
        </div>
    )
}

export default Login