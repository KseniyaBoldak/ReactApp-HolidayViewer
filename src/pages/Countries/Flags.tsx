import '../../assets/styles/countries-style.css'

const Flags = ({
  countryCode,
  country,
}: {
  countryCode: string
  country: string
}) => {
  const code = countryCode.toLowerCase()
  const imgUrl = `https://flagcdn.com/${code}.svg`
  return <img src={imgUrl} alt={country} className="countryImg" />
}
export default Flags
