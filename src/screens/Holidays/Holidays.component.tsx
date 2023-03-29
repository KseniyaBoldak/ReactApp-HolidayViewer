import { useEffect, useState } from 'react'
import key from 'weak-key'
import HolidaysApi from '../../api/Holidays.api'
import './holidays.style.css'

export type HolidaysProps = {
    countryCode: string
    countryName: string
}

export default function Holidays(props: HolidaysProps) {
    const [holidays, setHolidays] = useState<any>([])
    const { countryCode, countryName, ...otherProps } = props

    useEffect(() => {
        HolidaysApi.showCountryHolidays(countryCode)
            .then(setHolidays)
            .catch((e) => console.log(e))
    }, [countryCode])

    if (!holidays) return null

    return (
        <article className="holidays" {...otherProps}>
            <div className="holidays__country">
                Public holidays in: {countryName}
            </div>
            <div className="holidays__title">
                <div className="holidays__title__date">Date</div>
                <div className="holidays__title__name">Holiday</div>
            </div>
            {holidays.map((field: any) => {
                return (
                    <div className="holidays__content" key={key(field)}>
                        <div className="holidays__content__date">
                            {field.date}
                        </div>
                        <div className="holidays__content__name">
                            {field.name}
                        </div>
                    </div>
                )
            })}
        </article>
    )
}
