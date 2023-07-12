import { ImageWithMap } from '../../Image'
import './CardHeader.style.css'

export type CardHeaderProps = {
    title?: React.ReactNode
    children?: React.ReactNode
    className?: React.ReactNode
    onCloseClick?: () => void
}

export function CardHeader(props: CardHeaderProps) {
    const { title, children, onCloseClick, className, ...otherProps } = props
    const classNames = require('classnames')
    const cardHeaderClass = classNames({ [`card-header ${className}`]: true })

    return (
        <div className={cardHeaderClass} {...otherProps}>
            <p className="card-header__title">{title}</p>
            <ImageWithMap type="close" />
            {children}
        </div>
    )
}

export default CardHeader
