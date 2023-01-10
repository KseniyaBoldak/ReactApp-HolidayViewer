import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Button from '@mui/material/Button';
import './countries-style.css'
import Flags from "./Flags";

const Countries = ({ getCountryCode, getCountryName }: { getCountryCode: any, getCountryName: any }) => {
    const [country, setCountries] = useState<any>([]);
    const [search, searchCountry] = useState<string>('');

    const getCountries = async () => {
        try {
            const responseData = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
            const countries = responseData.data;
            setCountries(countries);
        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
        getCountries();
    }, [])

    const searchedCountry = useMemo(() => {
        if (search) {
            return country.filter((field: any) => field.name.toLowerCase().includes(search.toLowerCase()));
        }
        return country;
    }, [search, country]);

    return (
        <>
            <article className="countries">
                <div className="searchLine">
                    <h2>Begin your search with a country:</h2>
                    <input onChange={(event) => searchCountry(event.target.value)} />
                </div>
                {searchedCountry.map((field: any) => {
                    return <Button key={field.countryCode}
                        sx={{
                            fontFamily: "'Amatic SC', cursive",
                            color: "black",
                            fontSize: "3vmin",
                            margin: "1%",
                            border: "1px solid black",
                            width: "15vw",
                            height: "7vw"
                        }}
                        className="countryButton"
                        onClick={() => {
                            getCountryCode(field.countryCode);
                            getCountryName(field.name);
                        }}
                    >
                        {field.name}
                        <Flags countryCode={field.countryCode} country={field.name} />
                    </Button>
                }
                )
                }
            </article>
        </>
    )
}
export default Countries;