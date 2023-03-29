import Flag from '../Flag/Flag.component'
import './button.style.css'

export type ButtonProps = {
    field?: any
    getCountryCode?: React.Dispatch<any>
    getCountryName?: React.Dispatch<any>
}
export default function Button(props: ButtonProps) {
    const { field, getCountryCode, getCountryName, ...otherProps } = props

    if (!getCountryCode || !getCountryName) return null

    return (
        <button
            className="button"
            key={field.countryCode}
            onClick={() => {
                getCountryCode(field.countryCode)
                getCountryName(field.name)
            }}
            {...otherProps}
        >
            {field.name}
            <Flag countryCode={field.countryCode} country={field.name} />
        </button>
    )
}
