import axios from 'axios'
import { useHolidayStore } from '../store/store'

export default axios.create({
    baseURL: 'https://date.nager.at',
})

const countryCode = useHolidayStore()

export const showCountryHolidays = async () => {
    try {
        const responseData = await axios.get(
            `/api/v3/NextPublicHolidays/${countryCode}`
        )
        const selectedCountry = responseData.data
        setHolidays(selectedCountry)
    } catch (err) {
        console.log(err)
    }
}
