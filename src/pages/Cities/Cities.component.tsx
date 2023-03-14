import CitySights from '../CitySights/CitySights.component'
import Spinner from '../../components/Spinner/Spinner.component'
import City from '../../components/City/City.component'
import { useEffect, useState } from 'react'
import Countriesnow from '../../api/Countriesnow.api'
import Opentripmap from '../../api/Opentripmap.api'
import './cities.style.css'

export interface IGeo {
    lat: string
    lon: string
}

const Cities = ({ countryName }: { countryName: string }) => {
    const [countries, setCountries] = useState<any>([])
    const [currentCountryCities, setCurrentCountryCities] = useState<any[]>()
    const apiKey = process.env.REACT_APP_API_KEY

    const getAllCountries = async () => {
        try {
            const responseData = await Countriesnow.get('/api/v0.1/countries/')
            const allCounties = responseData.data
            if (responseData.status == 200) {
                allCounties.data.map((country: any) => country)
                setCountries(allCounties.data.map((country: any) => country))
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAllCountries()
        setCurrentCountryCities(
            countries.find((country: any) => countryName == country.country)
                ?.cities
        )
    }, [countryName])

    const [geo, setGeo] = useState<IGeo>()

    const getLocation = async (city: string) => {
        const responseData = await Opentripmap.get(
            `/0.1/en/places/geoname?name=${city}&apikey=${apiKey}`
        )
        const geoLoc = responseData.data
        setGeo(geoLoc)
    }
    if (!countryName) {
        return null
    }
    let cities = []

    if (!currentCountryCities) {
        return null
    } else {
        cities = currentCountryCities.map((value: string) => (
            <City value={value} getLocation={getLocation} />
        ))
    }

    return (
        <div className="cities">
            <hr />
            <h2 className="cities__title">Cities of {countryName}</h2>
            <div className="cities__background" />
            {currentCountryCities?.length ? cities : <Spinner />}
            {geo?.lat && <CitySights geo={geo} />}
        </div>
    )
}
Cities.displayName = 'Cities'
export default Cities
