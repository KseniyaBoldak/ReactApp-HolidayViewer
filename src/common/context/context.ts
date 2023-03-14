import { createContext, Dispatch, SetStateAction } from 'react'

const Context = createContext({} as IAuth)

export default Context

interface IAuth {
    login: boolean
    setLogin: Dispatch<SetStateAction<boolean>>
}
