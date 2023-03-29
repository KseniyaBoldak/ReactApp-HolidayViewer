import axios from 'axios'
import { FormEvent, useState } from 'react'
import { useAuthContext } from '../common/context/Auth.Context'

const LogInApi = axios.create({
    baseURL: 'https://fakestoreapi.com',
})

const confirmUser = async (event: FormEvent<HTMLFormElement>) => {
    const [loginData, setLoginData] = useState<{
        username: string
        password: string
    }>({
        username: 'mor_2314',
        password: '83r5^_',
    })
    const authOptions = useAuthContext()
    event.preventDefault()
    const isLoginData = await LogInApi.post('/auth/login', loginData)
    if (isLoginData.data) {
        localStorage.setItem('token', isLoginData.data.token)
        authOptions?.setLogin(true)
    }
}

export default {
    confirmUser,
}
