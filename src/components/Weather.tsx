import axios from "axios";
import { useState, useEffect } from "react";
const Weather = () => {
    const [weather, setWeather] = useState({});
    const getWeather = async () => {

        const key = '0d7506cbe49a40701e78c826bdf4910c';
        const lat = 53.900002;
        const lon = 27.566668;
        try {
            const responseData = await axios.get(``);
            console.log(responseData.data);
            setWeather({
                city: responseData.data.name,
            })
        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
        getWeather();
    }, []);


    return (
        <div>

        </div>
    )
}
export default Weather;