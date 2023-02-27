import CitySights from './CitySights'
import Spinner from '../../components/Spinner.component'
import { useEffect, useState } from 'react'
import Countriesnow from '../../api/Countriesnow.api'
import Opentripmap from '../../api/Opentripmap.api'
export interface IGeo {
  lat: string
  lon: string
}

const Cities = ({ countryName }: { countryName: any }) => {
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
      countries.find((country: any) => countryName == country.country)?.cities
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
  return (
    <>
      {countryName ? (
        <div className="all-cities">
          <hr />
          <h2 className="city-title">Cities of {countryName}</h2>
          <div className="city-bc" />
          {currentCountryCities?.length ? (
            currentCountryCities.map((city: string) => {
              return (
                <div className="city">
                  <div className="icon" />
                  <p className="city-name">{city}</p>
                  <div className="search-wrap">
                    <div
                      key={city}
                      onClick={() => getLocation(city)}
                      className="search"
                    ></div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="spinner-wrap">
              <Spinner />
            </div>
          )}
          <div className="all-city-sights">
            {geo?.lat && <CitySights geo={geo} />}
          </div>
        </div>
      ) : null}
    </>
  )
}
export default Cities
