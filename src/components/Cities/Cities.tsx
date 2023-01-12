import axios from "axios";
import { useEffect, useState } from "react";
import CitySights from "./CitySights";

const Cities = ({ countryCode, countryName }: { countryCode: any, countryName: any }) => {
    const [countries, setCountries] = useState<any>([]);

    const getAllCountries = async () => {
        try {
            const responseData = await axios.get('https://countriesnow.space/api/v0.1/countries/');
            const allCounties = responseData.data;
            if (responseData.status == 200) {
                allCounties.data.map((country: any) => country);
                setCountries(allCounties.data.map((country: any) => country));
            }
        } catch (err) {
            console.log(err);
        }

    }
        useEffect(() => {
            getAllCountries();
        }, [countryName]);
    
    const [geo, setGeo] = useState<any>([]);

    const getLocation = async (city: any) => {
        const responseData = await axios.get(`https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&apikey=5ae2e3f221c38a28845f05b6e1da7b7a6bf7d5f9698d37651dd6f732`);
        const geoLoc = responseData.data;
        setGeo(geoLoc);
    }
    return (
        <div>
            {countries.map((country: any) => {
                if (countryName == country.country) {
                    return <div>
                        {country.cities.map((city: any) => {
                            return <div>
                                <button
                                    onClick={() => getLocation(city)}
                                >{city}
                                </button>
                                <CitySights geo={geo} />
                            </div>
                        })}
                        <div>
                        </div>
                    </div>
                }
            })}

        </div>
    )
}
export default Cities;