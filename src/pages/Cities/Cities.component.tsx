import CitySights from '../CitySights'
import Spinner from '../../components/Spinner/Spinner.component'
import Card from '../../components/Card'
import { useState } from 'react'
import CityApi from '../../api/City.api'
import './cities.style.css'
import { CityImage } from '../../components/Image'

export type Geo = {
    lat: string
    lon: string
}
export type CitiesProps = {
    countryName?: React.ReactNode
}

export default function Cities(props: CitiesProps) {
    const { countryName, ...otherProps } = props

    const [currentCountryCities, setCurrentCountryCities] = useState<
        null | any[]
    >(null)

    const [geo, setGeo] = useState<Geo>()

    const getCityLocation = async (city: string) => {
        CityApi.getLocation(city)
            .then(setGeo)
            .catch((e) => console.log(e))
    }

    if (!countryName || !currentCountryCities) {
        return null
    }

    const cities = currentCountryCities.map((value: string) => (
        <Card value={value} key={value} onClick={getCityLocation} />
    ))

    return (
        <div className="cities" {...otherProps}>
            <hr />
            <h2 className="cities__title">Cities of {countryName}</h2>
            <CityImage name="__cities_background">
                {currentCountryCities?.length ? cities : <Spinner />}
                {geo?.lat && <CitySights geo={geo} />}
            </CityImage>
        </div>
    )
}
