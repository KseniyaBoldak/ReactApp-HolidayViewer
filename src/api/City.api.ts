import axios from 'axios'
import { useState } from 'react'
import { Geo } from '../pages/Cities'

const CityApi = axios.create({
    baseURL: 'https://api.opentripmap.com',
})

const apiKey = process.env.REACT_APP_API_KEY

export const getLocation = async (city: string) => {
    if (!city) return

    const [geo, setGeo] = useState<Geo>()

    const responseData = await CityApi.get(
        `/0.1/en/places/geoname?name=${city}&apikey=${apiKey}`
    )
    const geoLoc = responseData.data
    setGeo(geoLoc)
}

export default {
    getLocation,
}
