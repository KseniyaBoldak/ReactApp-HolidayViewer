import axios from 'axios'

const CountriesForHolidaysApi = axios.create({
    baseURL: 'https://date.nager.at',
})

export const getCountries = async () => {
    const responseData = await CountriesForHolidaysApi.get(
        '/api/v3/AvailableCountries'
    )
    const countries = responseData.data
    return countries
}

export default {
    getCountries,
}
