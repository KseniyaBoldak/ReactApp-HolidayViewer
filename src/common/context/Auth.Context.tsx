import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useMemo,
    useState,
} from 'react'

export type AuthContextOptions = {
    login: boolean
    setLogin: Dispatch<SetStateAction<boolean>>
}

export type AuthContextProps = React.PropsWithChildren

const AuthContext = createContext<null | AuthContextOptions>(null)

export default function AuthContextProvider(props: AuthContextProps) {
    const [login, setLogin] = useState<boolean>(false)
    const options = useMemo(() => ({ login, setLogin }), [login, setLogin])

    return (
        <AuthContext.Provider value={options}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
