import Input from '../../components/Input/Input.component'
import React, { useState, FormEvent, useContext } from 'react'
import axios from 'axios'
import Context from '../../common/context/context'
import './login.style.css'

const LogInForm = () => {
    const { setLogin } = useContext(Context)

    const [loginData, setLoginData] = useState<{
        username: string
        password: string
    }>({
        username: 'mor_2314',
        password: '83r5^_',
    })

    const inputLabels = {
        nameLabel: 'Username',
        passwordlabel: 'Password',
    }
    const confirmUser = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const isLoginData = await axios.post(
                'https://fakestoreapi.com/auth/login',
                loginData
            )
            if (isLoginData.data) {
                localStorage.setItem('token', isLoginData.data.token)
                setLogin(true)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const getEmailandLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const field = event.target.id
        setLoginData({ ...loginData, [field]: event.target.value })
    }

    return (
        <form onSubmit={confirmUser} className="login-form">
            <p className="login-form__title">Create an account</p>
            <Input
                value={loginData.username}
                label={inputLabels.nameLabel}
                onChange={getEmailandLogin}
            />
            <Input
                value={loginData.password}
                label={inputLabels.passwordlabel}
                onChange={getEmailandLogin}
            />
            <button type="submit" className="login-form__button">
                Sign Up
            </button>
        </form>
    )
}
LogInForm.displayName = 'LogInForm'
export default LogInForm
