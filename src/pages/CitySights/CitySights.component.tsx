import Modal from '../../components/Modal'
import Sight from './Sight'

import { useEffect, useState } from 'react'
import SightApi from '../../api/Sight.api'

import './CitySights.style.css'

export type CitySightsProps = {
    geo?: any
}

export default function CitySights(props: CitySightsProps) {
    const { geo, ...otherProps } = props
    const [sights, setSights] = useState<any[]>([])
    const [isModal, setModal] = useState(false)
    const onClose = () => setModal(false)

    const [info, setSightsInfo] = useState<any>()

    const getInfo = async (id?: string) => {
        if (!id) return
        setModal(true)
        SightApi.getInfo(id)
            .then(setSightsInfo)
            .catch((e) => console.log(e))
    }
    // initialize sights
    useEffect(() => {
        SightApi.getAll(geo)
            .then(setSights)
            .catch((e) => console.log(e))
    }, [geo])

    return (
        <div className="sights" {...otherProps}>
            <h3 className="sights__title">
                Sights that might interest you in: {geo.name}
            </h3>
            <div className="sights__container">
                {sights.map((sight) => {
                    return (
                        <Sight
                            id={sight.id}
                            key={sight.id}
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
