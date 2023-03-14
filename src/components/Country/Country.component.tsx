import Button from '@mui/material/Button'
import Flag from '../Flag/Flag.component'
import './country.style.css'

export type CountryProps = {
    field?: any
    getCountryCode?: React.Dispatch<any>
    getCountryName?: React.Dispatch<any>
}

const Country = (props: CountryProps) => {
    return (
        <Button
            key={props.field.countryCode}
            sx={{
                fontFamily: "'Amatic SC', cursive",
                color: 'black',
                fontSize: '3vmin',
                margin: '1%',
                border: '1px solid black',
                width: '12vw',
                height: '6vw',
            }}
            className="country"
            onClick={() => {
                props.getCountryCode(props.field.countryCode)
                props.getCountryName(props.field.name)
            }}
        >
            {props.field.name}
            <Flag
                countryCode={props.field.countryCode}
                country={props.field.name}
            />
        </Button>
    )
}
Country.displayName = 'Country'
export default Country
