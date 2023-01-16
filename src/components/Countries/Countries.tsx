import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Button from '@mui/material/Button';
import './countries-style.css'
import Flags from "./Flags";
import usePagination from "../hooks/usePagination";

const Countries = ({ getCountryCode, getCountryName }: { getCountryCode: any, getCountryName: any }) => {
    const [country, setCountries] = useState<any>([]);
    const [search, searchCountry] = useState<string>('');
    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: 12,
        count: country.length,
    });

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
                <div className="searchedCountry">
                {searchedCountry
                    .slice(firstContentIndex, lastContentIndex)
                    .map((field: any) => {
                        return <Button key={field.countryCode}
                            sx={{
                                fontFamily: "'Amatic SC', cursive",
                                color: "black",
                                fontSize: "3vmin",
                                margin: "1%",
                                border: "1px solid black",
                                width: "12vw",
                                height: "6vw"
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
                </div>
                
                <div className="pagination">
                    <p className="text">
                        {page}/{totalPages}
                    </p>
                    <button onClick={prevPage} className="page">
                        &larr;
                    </button>
                    {/* @ts-ignore */}
                    {[...Array(totalPages).keys()].map((el) => (
                        <button
                            onClick={() => setPage(el + 1)}
                            key={el}
                            className="page"
                        >
                            {el + 1}
                        </button>
                    ))}
                    <button onClick={nextPage} className="page">
                        &rarr;
                    </button>
                </div>
            </article>
        </>
    )
}
export default Countries;