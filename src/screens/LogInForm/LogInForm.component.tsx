import Input from '../../components/Input'
import React, { useState } from 'react'
import LogInApi from '../../api/LogIn.api'
import './login.style.css'

export default function LogInForm() {
    const [loginData, setLoginData] = useState<{
        username: string
        password: string
    }>({
        username: 'mor_2314',
        password: '83r5^_',
    })

    const labels = {
        name: 'Username',
        password: 'Password',
    }

    const getEmailandLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const field = event.target.id
        setLoginData({ ...loginData, [field]: event.target.value })
    }

    return (
        <form onSubmit={LogInApi.confirmUser} className="login-form">
            <p className="login-form__title">Create an account</p>
            <Input
                value={loginData.username}
                label={labels.name}
                onChange={getEmailandLogin}
            />
            <Input
                value={loginData.password}
                label={labels.password}
                onChange={getEmailandLogin}
            />
            <button type="submit" className="login-form__button">
                Sign Up
            </button>
        </form>
    )
}
