import './login-style.css';
import axios from "axios";
import React, { useState, FormEvent, useContext } from 'react';
import Context from '../context/context';

const LogInForm = () => {
    const { setLogin } = useContext(Context);
    const [loginData, setLoginData] = useState<{ username: string; password: string }>({
        username: 'mor_2314',
        password: '83r5^_'
    });

    const getEmailandLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const field = event.target.id;
        setLoginData({ ...loginData, [field]: event.target.value })
    }
    const confirmUser = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const isLoginData = await axios.post('https://fakestoreapi.com/auth/login', loginData);
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
                <span>1</span>
                <p>Choose a country to travel</p>
                <span>2</span>
                <p>Find appropriate public holidays</p>
                <span>3</span>
                <p>Build the most convenient route from your city <br /> to your vacation spot</p>
            </aside>
            <form onSubmit={confirmUser}>
                <p>Create an account</p>
                <label htmlFor="username">Username</label>
                <input
                    name="username"
                    required
                    value={loginData.username}
                    onChange={getEmailandLogin}
                />
                <label htmlFor="password">Password</label>
                <input
                    required
                    value={loginData.password}
                    onChange={getEmailandLogin}
                />
                <button type="submit" className='login-button'>
                    Sign Up
                </button>
            </form>
        </article>
    )
}
export default LogInForm;