import Modal from '../../screens/Modal'
import Sight from '../../components/Sight'
import { useEffect, useState } from 'react'
import SightApi from '../../api/Sight.api'
import './sights.style.css'

export default function CitySights({ geo }: { geo: any }) {
    const [sights, setSights] = useState<any[]>([])
    const [isModal, setModal] = useState(false)
    const onClose = () => setModal(false)

    const [info, setSightsInfo] = useState<any>()

    const getInfo = async (id: string) => {
        if (!id) return
        setModal(true)
        SightApi.getInfo(id)
            .then(setSightsInfo)
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        SightApi.getAll(geo)
            .then(setSights)
            .catch((e) => console.log(e))
    }, [geo])

    return (
        <div className="sights">
            <h3 className="sights__title">
                Sights that might interest you in: {geo.name}
            </h3>
            <div className="sights__wrap">
                {sights.map((sight) => {
                    if (sight.name)
                        return (
                            <Sight
                                id={sight.id}
                                value={sight.name}
                                getInfo={getInfo}
                            />
                        )
                })}
            </div>
            <Modal visible={isModal} onClose={onClose} info={info} />
        </div>
    )
}
