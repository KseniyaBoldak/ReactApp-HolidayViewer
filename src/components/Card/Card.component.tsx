import './card.style.css'

export type CardProps = {
    id?: React.ReactNode
    value?: React.ReactNode
    onClick?: (value: string) => void
    children?: React.ReactNode
    className?: React.ReactNode
}

export default function Card(props: CardProps) {
    const { value, id, onClick, children, className, ...otherProps } = props

    return (
        <div className={`"card__"${className}`} {...otherProps}>
            {children}
        </div>
    )
}
