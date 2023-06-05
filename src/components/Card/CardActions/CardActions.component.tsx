import './card-actions.style.css'

export type CardActionsProps = {
    children?: React.ReactNode
    className?: React.ReactNode
}

export function CardActions(props: CardActionsProps) {
    const { children, className, ...otherProps } = props

    return (
        <div className={`"card-actions__"${className}`} {...otherProps}>
            {children}
        </div>
    )
}
