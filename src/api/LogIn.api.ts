import axios from 'axios'
import { useAuthContext } from '../context/Auth.Context'

const LogInApi = axios.create({
    baseURL: 'https://fakestoreapi.com',
})

const confirmUser = async () => {
    const authOptions = useAuthContext()

    const isLoginData = await LogInApi.post(
        '/auth/login',
        authOptions?.loginData
    )

    if (isLoginData.data) {
        localStorage.setItem('token', isLoginData.data.token)
    }
}

export default {
    confirmUser,
}
