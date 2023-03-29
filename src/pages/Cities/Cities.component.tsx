import CitySights from '../CitySights'
import Spinner from '../../components/Spinner/Spinner.component'
import Card from '../../components/Card'
import { useEffect, useState } from 'react'
import CityApi from '../../api/City.api'
import CountriesApi from '../../api/Countries.api'
import './cities.style.css'

export type Geo = {
    lat: string
    lon: string
}
export type CitiesProps = {
    countryName?: string
}

export default function Cities(props: CitiesProps) {
    const { countryName, ...otherProps } = props
    const [countries, setCountries] = useState<any>([])
    const [currentCountryCities, setCurrentCountryCities] = useState<any[]>()
    const [geo, setGeo] = useState<Geo>()
    let cities = []

    const getAllCountries = async () => {
        CountriesApi.getAll()
            .then(setCountries)
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        getAllCountries()
        setCurrentCountryCities(
            countries.find((country: any) => countryName == country.country)
                ?.cities
        )
    }, [countryName])

    const getCityLocation = async (city: string) => {
        CityApi.getLocation(city)
            .then(setGeo)
            .catch((e) => console.log(e))
    }

    if (!countryName) {
        return null
    }

    if (!currentCountryCities) {
        return null
    } else {
        cities = currentCountryCities.map((value: string) => (
            <Card value={value} key={value} onSearchClick={getCityLocation} />
        ))
    }

    return (
        <div className="cities" {...otherProps}>
            <hr />
            <h2 className="cities__title">Cities of {countryName}</h2>
            <div className="cities__background" />
            {currentCountryCities?.length ? cities : <Spinner />}
            {geo?.lat && <CitySights geo={geo} />}
        </div>
    )
}
