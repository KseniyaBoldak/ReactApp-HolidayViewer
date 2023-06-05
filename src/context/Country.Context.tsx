import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import CountriesApi from '../api/Countries.api'
import { CitiesProps } from '../pages/Cities'

export type CountryContextOptions = {
    login: () => void
    logout: () => void
    isLogin: React.ReactNode
    countryName?: CitiesProps
}

export type CountryContextProps = React.PropsWithChildren

const CountryContext = createContext<null | CountryContextOptions>(null)

export default function CountryContextProvider(props: CountryContextProps) {
    const { countryName } = props
    const [currentCountry, setCurrentCountry] = useState<boolean>(false)
    const [countries, setCountries] = useState<null | any[]>(null)
    const [currentCountryCities, setCurrentCountryCities] = useState<
        null | any[]
    >(null)
    const options = useMemo(() => currentCountry, [currentCountry])

    if (!countryName || !currentCountryCities || !countries) {
        return null
    }

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
            countries.find((country: any) => countryName == country.country)
                ?.cities ?? null
        )
    }, [countryName, countries])

    return (
        <CountryContext.Provider value={options}>
            {props.children}
        </CountryContext.Provider>
    )
}

export const useCountryContext = () => useContext(CountryContext)
