import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react'

export type AuthContextOptions = {
    login: () => void
    logout: () => void
    isLogin: boolean
}

export type AuthContextProps = React.PropsWithChildren

const AuthContext = createContext<null | AuthContextOptions>(null)

export default function AuthContextProvider(props: AuthContextProps) {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const login = useCallback(() => setIsLogin(true), [])
    const logout = useCallback(() => setIsLogin(false), [])
    const options = useMemo(
        () => ({ isLogin, login, logout }),
        [isLogin, login, logout]
    )

    return (
        <AuthContext.Provider value={options}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
