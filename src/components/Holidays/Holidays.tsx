import axios from "axios";
import { useEffect, useState } from "react";
import Cities from "../Cities/Cities";
import './holidays-style.css';

const Holidays = ({ countryCode, countryName }: { countryCode: any, countryName: any }) => {
    const [holidays, setHolidays] = useState<any>([]);

    const showCountryHolidays = async () => {
        if (!countryCode) return;
        try {
            const responseData = await axios.get(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`);
            const selectedCountry = responseData.data;
            setHolidays(selectedCountry);

        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        showCountryHolidays();
    }, [countryCode]);

    return (
        <article className="selected-holidays">
            <div className="selected-country">Public holidays in: {countryName}</div>
            <div className="title">
                <div>Date</div>
                <div>Holiday</div>
            </div>
            {holidays.map((field: any) => {
                return <div className="content">
                    <div>{field.date}</div>
                    <div>{field.name}</div>
                </div>
            })}
        </article>
    )
}
export default Holidays;