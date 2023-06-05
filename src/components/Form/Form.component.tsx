import Input from '../Input'

export type FormProps = {
    onChange?: () => void
    onSubmit?: (value?: any) => void
    className?: React.ReactNode
    children?: React.ReactNode
}

export default function Form(props: FormProps) {
    const { className, children, ...otherProps } = props
    return (
        <form className={`"form__"${className}`} {...otherProps}>
            {children}
        </form>
    )
}

Form.Field = Input
