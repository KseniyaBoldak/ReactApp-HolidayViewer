import axios from "axios";
import { useEffect, useState } from "react";
import CitySights from "./CitySights";
import TablePagination from '@mui/material/TablePagination';
import usePagination from "../hooks/usePagination";
export interface IGeo {
    lat: string,
    lon: string
}

const Cities = ({ countryName }: { countryName: any }) => {
    const [countries, setCountries] = useState<any>([]);
    const apiKey = process.env.REACT_APP_API_KEY; 

    const getAllCountries = async () => {
        try {
            if (!countryName) return;
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

    const [geo, setGeo] = useState<IGeo>();

    const getLocation = async (city: string) => {
        const responseData = await axios.get(`https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&apikey=${apiKey}`);
        const geoLoc = responseData.data;
        setGeo(geoLoc);
    }
    return (
        <>
            {countryName ?
                <div className="all-cities">
                    <hr />
                    <h2 className="city-title">Cities of {countryName}</h2>
                    <div className="city-bc" />
                    {countries
                        .map((country: any) => {
                            if (countryName == country.country) {
                                return <>
                                    {country.cities.map((city: string) => {
                                        return <div className="city">
                                            <div className="icon" />
                                            <p>{city}</p>
                                            <button
                                                key={city}
                                                onClick={() => getLocation(city)}>
                                                See sights &rarr;
                                            </button>
                                        </div>
                                    })}
                                </>
                            }
                        })}
                    <div>
                        {geo?.lat && <CitySights geo={geo} />}
                    </div>
                </div>
                :
                null}
        </>


    )
}
export default Cities;