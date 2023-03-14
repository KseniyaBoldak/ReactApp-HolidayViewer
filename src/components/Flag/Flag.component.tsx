import './flag.style.css'

export type FlagProps = {
    countryCode: string
    country: string
}

const Flag = (props: FlagProps) => {
    const code = props.countryCode.toLowerCase()
    const imgUrl = `https://flagcdn.com/${code}.svg`
    return <img src={imgUrl} alt={props.country} className="flag" />
}
Flag.displayName = 'Flag'
export default Flag
