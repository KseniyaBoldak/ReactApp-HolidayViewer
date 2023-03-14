import Search from '../Search/Search.component'
import './city.style.css'

export type CityProps = {
    value?: string
    getLocation?: (value: string) => Promise<void>
}
const City = (props: CityProps) => {
    return (
        <div className="city">
            <div className="city__icon" />
            <p className="city__name">{props.value}</p>
            <Search value={props.value} onSearchClick={props.getLocation} />
        </div>
    )
}
City.displayName = 'City'
export default City
