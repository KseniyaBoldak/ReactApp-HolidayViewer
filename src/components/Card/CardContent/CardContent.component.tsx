import './card-content.style.css'

export type CardContentProps = {
    onClick?: () => void
    children?: React.ReactNode
    className?: React.ReactNode
}

export function CardContent(props: CardContentProps) {
    const { children, className, ...otherProps } = props

    return (
        <div className={`"card-content__"${className}`} {...otherProps}>
            {children}
        </div>
    )
}
