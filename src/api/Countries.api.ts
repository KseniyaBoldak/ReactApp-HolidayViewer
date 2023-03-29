import axios from 'axios'

const CountriesApi = axios.create({
    baseURL: 'https://countriesnow.space',
})

export const getAll = async () => {
    const responseData = await CountriesApi.get('/api/v0.1/countries/')
    const allCounties = responseData.data
    if (responseData.status == 200) {
        return allCounties.data.map((country: any) => country)
    }
}

export default {
    getAll,
}
