import './Button.style.css'

export type ButtonProps = {
    text?: React.ReactNode
    children?: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
    className?: React.ReactNode
    onClick?: () => void
}
export default function Button(props: ButtonProps) {
    const { text, children, className, ...otherProps } = props

    const classNames = require('classnames')
    const buttonClass = classNames({ [`button ${className}`]: true })

    return (
        <button className={buttonClass} {...otherProps}>
            {text}
            {children}
        </button>
    )
}
