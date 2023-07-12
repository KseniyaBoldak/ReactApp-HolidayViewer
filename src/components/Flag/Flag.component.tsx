export type FlagProps = {
    countryCode: string
    country: string
    className: React.ReactNode
}

export default function Flag(props: FlagProps) {
    const { country, countryCode, className } = props
    const code = countryCode.toLowerCase()
    const imgUrl = `https://flagcdn.com/${code}.svg`

    const classNames = require('classnames')
    const flagClass = classNames({ [`flag ${className}`]: true })

    return <img src={imgUrl} alt={country} className={flagClass} />
}
