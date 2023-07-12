import Button from '../../../components/Button'
import Flag from '../../../components/Flag'

import key from 'weak-key'

export type CountryProps = {
    field?: any
    onClick?: () => void
}

export default function Country(props: CountryProps) {
    const { field, onClick } = props

    return (
        <Button
            onClick={onClick}
            text={field}
            key={key(field)}
            children={
                <Flag
                    countryCode={field.countryCode}
                    country={field.name}
                    className={'countries'}
                />
            }
        />
    )
}
