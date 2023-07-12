import Form from '../../components/Form'
import Button from '../../components/Button'
import LogInApi from '../../api/LogIn.api'
import { useCallback } from 'react'
import { useAuthContext } from '../../context/Auth.Context'
import './LogInForm.style.css'

export default function LogInForm() {
    const authOptions = useAuthContext()

    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const field = event.target.id
            authOptions?.setLoginData(authOptions.loginData)
            console.log(authOptions?.loginData)
        },
        []
    )

    const labels = {
        name: 'Username',
        password: 'Password',
    }

    return (
        <Form onSubmit={LogInApi.confirmUser} className="__login">
            <p className="login-form__title">Create an account</p>
            <Form.Field
                placeholder={labels.name}
                value={authOptions?.loginData.username}
                label={labels.name}
                onChange={onChange}
                className={'username'}
            />
            <Form.Field
                placeholder={labels.password}
                value={authOptions?.loginData.password}
                label={labels.password}
                onChange={onChange}
                className={'password'}
            />
            <Button type="submit" className="login-form" text="Sign Up" />
        </Form>
    )
}
