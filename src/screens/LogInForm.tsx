import Stepper from './StepperLogin.screen';
import InputLogIn from '../components/InputLogIn.component';
import React, { useState, FormEvent, useContext } from 'react';
import Context from '../common/context/context'
import '../assets/styles/login-style.css';
import fakestoreapi from '../api/Fakestoreapi.api';

const LogInForm = () => {
    const { setLogin } = useContext(Context);
    const [loginData, setLoginData] = useState<{ username: string; password: string }>({
        username: 'mor_2314',
        password: '83r5^_'
    });
    const inputLabels = {
        nameLabel: 'Username',
        passwordlabel: 'Password'
    }

    const getEmailandLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const field = event.target.id;
        setLoginData({ ...loginData, [field]: event.target.value })
    }
    const confirmUser = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const isLoginData = await fakestoreapi.post('/auth/login', loginData);
            if (isLoginData.data) {
                localStorage.setItem('token', isLoginData.data.token);
                setLogin(true);
            }
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <article className="verification">
            <aside className="tips">
                <h2>Haven't decided where to spend holidays? <br />Plan Your Vacation In Simple Steps: </h2>
                <Stepper/>
            </aside>
            <form onSubmit={confirmUser}>
                <p>Create an account</p>
                <InputLogIn 
                userNamePassword={loginData.username} 
                label={inputLabels.nameLabel} 
                onChange={getEmailandLogin}/>
                <InputLogIn 
                userNamePassword={loginData.password} 
                label={inputLabels.passwordlabel} 
                onChange={getEmailandLogin}/>
                <button type="submit" className='login-button'>
                    Sign Up
                </button>
            </form>
        </article>
    )
}
export default LogInForm;