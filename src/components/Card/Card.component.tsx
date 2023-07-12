import CardActions from './CardActions'
import CardContent from './CardContent'
import CardHeader from './CardHeader'
import './Card.style.css'

export type CardProps = {
    id?: React.ReactNode
    value?: React.ReactNode
    children?: React.ReactNode
    className?: React.ReactNode
    onClick?: (value: string) => void
}

export function Card(props: CardProps) {
    const { value, id, onClick, children, className, ...otherProps } = props
    const classNames = require('classnames')
    const cardClass = classNames({ [`card ${className}`]: true })

    return (
        <div className={cardClass} {...otherProps}>
            {children}
        </div>
    )
}

Card.Header = CardHeader
Card.Content = CardContent
Card.Actions = CardActions

export default Card
