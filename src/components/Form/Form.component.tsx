import Input from '../Input'

export type FormProps = {
    onChange?: () => void
    onSubmit?: React.FormEventHandler<HTMLElement>
    className?: React.ReactNode
    children?: React.ReactNode
}

export default function Form(props: FormProps) {
    const { className, children, onSubmit, ...otherProps } = props

    const classNames = require('classnames')
    const formClass = classNames({ [`form ${className}`]: true })

    return (
        <form className={formClass} onSubmit={onSubmit} {...otherProps}>
            {children}
        </form>
    )
}

Form.Field = Input
