import Icon from '../Icon'
import './card.style.css'

export type CardProps = {
    id?: string
    value?: string
    onSearchClick?: (value: string) => void
    getInfo?: (id: string) => void
}

export default function Card(props: CardProps) {
    const { value, id, getInfo, onSearchClick, ...otherProps } = props

    return (
        <div className="card" {...otherProps}>
            <div className="card__icon" />
            <p className="card__name">{value}</p>
            <div className="card__content">
                <Icon.Search onClick={onSearchClick} />
            </div>
        </div>
    )
}
