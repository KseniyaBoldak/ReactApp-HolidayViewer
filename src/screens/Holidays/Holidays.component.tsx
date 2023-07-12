import Holiday from './Holiday/Holiday.component'
import Spinner from '../../components/Spinner/Spinner.component'
import { useEffect, useState } from 'react'
import HolidaysApi from '../../api/Holidays.api'
import './Holidays.style.css'

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

    return (
        <article className="holidays" {...otherProps}>
            <div className="holidays__country">
                Public holidays in: {countryName}
            </div>
            <div className="holidays__title">
                <div className="holidays__title__date">Date</div>
                <div className="holidays__title__name">Holiday</div>
            </div>
            {holidays &&
                holidays.map((field: any) => {
                    return <Holiday field={field} />
                })}
            {!holidays && <Spinner />}
        </article>
    )
}
