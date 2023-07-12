import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react'

export type AuthContextOptions = {
    logIn: () => void
    logOut: () => void
    isLogin: boolean
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
    loginData: { username: string; password: string }
    setLoginData: React.Dispatch<
        React.SetStateAction<{
            username: string
            password: string
        }>
    >
}

export type AuthContextProps = React.PropsWithChildren

const AuthContext = createContext<null | AuthContextOptions>(null)

export default function AuthContextProvider(props: AuthContextProps) {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const logIn = useCallback(() => setIsLogin(true), [])
    const logOut = useCallback(() => setIsLogin(false), [])
    const [loginData, setLoginData] = useState<{
        username: string
        password: string
    }>({
        username: 'mor_2314',
        password: '83r5^_',
    })

    const options = useMemo(
        () => ({ logIn, logOut, isLogin, setIsLogin, loginData, setLoginData }),
        [logIn, logOut, isLogin, setIsLogin, loginData, setLoginData]
    )

    return (
        <AuthContext.Provider value={options}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
