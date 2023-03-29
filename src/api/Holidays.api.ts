import axios from 'axios'

const HolidaysApi = axios.create({
    baseURL: 'https://date.nager.at',
})

export const showCountryHolidays = async (countryCode: string) => {
    if (!countryCode) return

    const responseData = await HolidaysApi.get(
        `/api/v3/NextPublicHolidays/${countryCode}`
    )
    const selectedCountry = responseData.data
    return selectedCountry
}

export default {
    showCountryHolidays,
}
