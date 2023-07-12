import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'

import CountriesApi from '../api/Countries.api'

export type CountryContextOptions = {
    countries: null | any[]
    currentCountry: React.ReactNode
    currentCountryCities: null | any[]
    setCurrentCountry: (name: string) => void
}

export type CountryContextProps = React.PropsWithChildren

const CountryContext = createContext<null | CountryContextOptions>(null)

export default function CountryContextProvider(props: CountryContextProps) {
    const [currentCountry, setCurrentCountry] = useState<string>('')
    const [countries, setCountries] = useState<null | any[]>(null)
    const [currentCountryCities, setCurrentCountryCities] = useState<
        null | any[]
    >(null)

    // initialize all countries
    useEffect(() => {
        if (!countries) {
            CountriesApi.getAll()
                .then(setCountries)
                .catch((e) => console.log(e))
        }
    }, [countries])

    // select current country
    useEffect(() => {
        setCurrentCountryCities(
            countries?.find((country: any) => currentCountry == country.country)
                ?.cities ?? null
        )
    }, [currentCountry, countries])

    const val = useMemo(
        () => ({
            countries,
            currentCountry,
            currentCountryCities,
            setCurrentCountry,
        }),
        [countries, currentCountry, currentCountryCities]
    )

    if (!currentCountry) {
        return <>{props.children}</>
    }
    return (
        <CountryContext.Provider value={val}>
            {props.children}
        </CountryContext.Provider>
    )
}

export const useCountryContext = () => useContext(CountryContext)
