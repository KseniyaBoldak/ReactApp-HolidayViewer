import './flag.style.css'

export type FlagProps = {
    countryCode: string
    country: string
}

export default function Flag(props: FlagProps) {
    const code = props.countryCode.toLowerCase()
    const imgUrl = `https://flagcdn.com/${code}.svg`
    return <img src={imgUrl} alt={props.country} className="flag" />
}
