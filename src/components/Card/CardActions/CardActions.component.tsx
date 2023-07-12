import Button from '../../Button/Button.component'
import './CardActions.style.css'

export type CardActionsProps = {
    children?: React.ReactNode
    className?: React.ReactNode
}

export function CardActions(props: CardActionsProps) {
    const { children, className, ...otherProps } = props
    const classNames = require('classnames')
    const cardActionsClass = classNames({ [`card-actions ${className}`]: true })

    return (
        <div className={cardActionsClass} {...otherProps}>
            {children}
        </div>
    )
}

CardActions.Button = Button

export default CardActions
