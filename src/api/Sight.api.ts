import axios from 'axios'

const SightApi = axios.create({
    baseURL: 'https://api.opentripmap.com',
})

const apiKey = process.env.REACT_APP_API_KEY

export const getAll = async (geo: any) => {
    if (!geo) return

    const responseData = await SightApi.get(
        `/0.1/en/places/radius?radius=100000&lon=${geo.lon}&lat=${geo.lat}&apikey=${apiKey}`
    )
    const allSights = responseData.data.features

    return allSights.map((sight: any) => {
        let newSights = {
            id: sight.properties.xid,
            name: sight.properties.name,
            kind: sight.properties.kinds,
        }
        return newSights
    })
}
export const getInfo = async (id: string) => {
    if (!id) return

    const responseData = await SightApi.get(
        `/0.1/en/places/xid/${id}?apikey=${apiKey}`
    )
    const sightInfo = responseData.data
    const allInfo = {
        name: sightInfo?.name,
        address: sightInfo.address?.road,
        text: sightInfo.wikipedia_extracts?.text,
        map: sightInfo?.otm,
        kind: sightInfo?.kinds,
    }
    return allInfo
}

export default {
    getAll,
    getInfo,
}
