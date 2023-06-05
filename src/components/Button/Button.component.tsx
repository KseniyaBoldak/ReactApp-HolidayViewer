import './button.style.css'

export type ButtonProps = {
    text?: React.ReactNode
    children?: React.ReactNode
    className?: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
}
export default function Button(props: ButtonProps) {
    const { text, onClick, children, className, type, ...otherProps } = props

    return (
        <button
            className={`"button__"${className}`}
            type={type}
            onClick={onClick}
            {...otherProps}
        >
            {text}
            {children}
        </button>
    )
}
