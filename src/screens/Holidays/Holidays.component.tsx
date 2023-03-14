import { useEffect, useState } from 'react'
import DatenagerApi from '../../api/Datenager.api'
import './holidays.style.css'
import { useHolidayStore } from '../../store/store'
import Spinner from '../../components/Spinner/Spinner.component'
import { showCountryHolidays } from '../../api/Datenager.api'

export type HolidaysProps = {
    countryCode: string
    countryName: string
}

const Holidays = (props: HolidaysProps) => {
    const [holidays, setHolidays] = useState<any>([])
    const setCountryCode = useHolidayStore((state) => state.setCountryCode)

    if (props.countryCode) {
        setCountryCode(props.countryCode)
    } else return <Spinner />

    useEffect(() => {
        showCountryHolidays()
    }, [props.countryCode])

    return (
        <article className="holidays">
            <div className="holidays__country">
                Public holidays in: {props.countryName}
            </div>
            <div className="holidays__title">
                <div className="holidays__title__date">Date</div>
                <div className="holidays__title__name">Holiday</div>
            </div>
            {holidays.map((field: any) => {
                return (
                    <div className="holidays__content">
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
Holidays.displayName = 'Holidays'
export default Holidays
