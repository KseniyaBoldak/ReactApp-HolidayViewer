import CitySights from '../CitySights'
import Spinner from '../../components/Spinner/Spinner.component'
import Card from '../../components/Card'
import { ImageWithMap } from '../../components/Image/Image.component'

import { useState } from 'react'
import CityApi from '../../api/City.api'

import './Cities.style.css'

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

    if (!countryName || !currentCountryCities) {
        return null
    }

    const cities = currentCountryCities.map((value: string) => (
        <Card value={value} key={value} onClick={CityApi.getLocation} />
    ))

    return (
        <div className="cities" {...otherProps}>
            <hr />
            <h2 className="cities__title">Cities of {countryName}</h2>
            <ImageWithMap type={'city'} className="cities_background">
                {currentCountryCities?.length ? cities : <Spinner />}
                {geo?.lat && <CitySights geo={geo} />}
            </ImageWithMap>
        </div>
    )
}
