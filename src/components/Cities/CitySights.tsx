import axios from "axios";
import { useEffect } from "react";

const CitySights = ({ geo }: { geo: any }) => {
    
    console.log(geo.lon, geo.lat);

    const getAllSights = async () => {
        const responseData = await axios.get(`https://api.opentripmap.com/0.1/en/places/radius?radius=100000&lon=${geo.lon}&lat=${geo.lat}&apikey=5ae2e3f221c38a28845f05b6e1da7b7a6bf7d5f9698d37651dd6f732`);
        const allSights = responseData.data;
        console.log(allSights);
    }
   
    useEffect(() => {
        getAllSights();
    }, [geo]);


    return (
        <div>

        </div>
    )
}
export default CitySights;