import React, { useCallback, useState } from 'react'
import LogInApi from '../../api/LogIn.api'
import './login.style.css'
import Form from '../../components/Form'
import Button from '../../components/Button'

export type LogInFormProps = {}

export default function LogInForm(props: LogInFormProps) {
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

    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const field = event.target.id
            setLoginData({ ...loginData, [field]: event.target.value }) // <= вместо AuthContext.login(login, pass)
        },
        []
    )

    return (
        <Form onSubmit={LogInApi.confirmUser} className="__login">
            <p className="login-form__title">Create an account</p>
            <Form.Field
                value={loginData.username}
                label={labels.name}
                onChange={onChange}
            />
            <Form.Field
                value={loginData.password}
                label={labels.password}
                onChange={onChange}
            />
            <Button type="submit" className="__login-form" text="Sign Up" />
        </Form>
    )
}
