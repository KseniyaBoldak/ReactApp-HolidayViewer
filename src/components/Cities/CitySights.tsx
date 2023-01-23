import Modal from "../Modal/Modal";
import axios from "axios";
import { useEffect, useState } from "react";
import './city-style.css'

const CitySights = ({ geo }: { geo: any }) => {
    const [sights, setSights] = useState<any[]>([]);
    const [isModal, setModal] = useState(false)
    const onClose = () => setModal(false)
    const apiKey = process.env.REACT_APP_API_KEY; 

    const getAllSights = async () => {
        try {
            if (!geo) return;
            const responseData = await axios.get(`https://api.opentripmap.com/0.1/en/places/radius?radius=100000&lon=${geo.lon}&lat=${geo.lat}&apikey=${apiKey}`);
            const allSights = responseData.data.features;
            setSights(allSights.map((sight: any) => {
                let newSights = {
                    id: '',
                    name: '',
                    kind: ''
                };
                newSights.id = sight.properties.xid;
                newSights.name = sight.properties.name;
                newSights.kind = sight.properties.kinds;
                return newSights;
            }))
        } catch (err) {
            console.log(err);
        }

    }
    const [info, setSightsInfo] = useState<any>();
    const getSightsInfo = async (id: string) => {
        if (!id) return;
        setModal(true);
        const responseData = await axios.get(`https://api.opentripmap.com/0.1/en/places/xid/${id}?apikey=${apiKey}`);
        const sightInfo = responseData.data;
        const allInfo = {
            name: '',
            address: '',
            text: '',
            map: '',
            kind: ''
        }
        allInfo.name = sightInfo?.name;
        allInfo.address = sightInfo.address?.road;
        allInfo.text = sightInfo.wikipedia_extracts?.text;
        allInfo.map = sightInfo?.otm;
        allInfo.kind = sightInfo?.kinds;

        setSightsInfo(allInfo);
    }
    useEffect(() => {
        getAllSights();
    }, [geo]);


    return (
        <>
            <h3 className="title-sights">Sights that might interest you in: {geo.name}</h3>
            <div className="sights-wrap">
                {sights.map(sight => {
                if (sight.name) return <div
                    key={sight.id}
                    className="sights">
                    <div className="search-wrap">
                        <div onClick={() => { getSightsInfo(sight.id) }}
                            className="search"/>
                    </div>
                    {sight.name} 
                </div>
                    
            })}
            </div>
            
            <Modal
                visible={isModal}
                onClose={onClose}
                info={info}
            />

        </>
    )
}
export default CitySights;