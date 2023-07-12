import './CardContent.style.css'

export type CardContentProps = {
    onClick?: () => void
    children?: React.ReactNode
    className?: React.ReactNode
}

export function CardContent(props: CardContentProps) {
    const { children, className, ...otherProps } = props
    const classNames = require('classnames')
    const cardContentClass = classNames({
        [`card-content ${className}`]: true,
    })

    return (
        <div className={cardContentClass} {...otherProps}>
            {children}
        </div>
    )
}

export default CardContent
