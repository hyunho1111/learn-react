import React from 'react'

const LoginButton = ({ text, isSocial, onClick }) => {
    const className = isSocial ? "social-login-button" : "login-button";
    return (
        <button type='button' onClick={onClick} className={className}>{text}</button>
    )
}

export default LoginButton