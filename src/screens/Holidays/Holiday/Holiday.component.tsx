import Card from '../../../components/Card'
import key from 'weak-key'
import './Holiday.style.css'

export type HolidayProps = {
    field?: any
}
export default function Holiday(props: HolidayProps) {
    const { field, ...otherProps } = props

    return (
        <Card.Content className="holiday" key={key(field)} {...otherProps}>
            <div className="holiday__date">{field.date}</div>
            <div className="holiday__name">{field.name}</div>
        </Card.Content>
    )
}
