import './flag.style.css'

export type FlagProps = {
    countryCode: string
    country: string
}

export default function Flag(props: FlagProps) {
    const { country, countryCode } = props
    const code = countryCode.toLowerCase()
    const imgUrl = `https://flagcdn.com/${code}.svg`
    return <img src={imgUrl} alt={country} className="flag" />
}
