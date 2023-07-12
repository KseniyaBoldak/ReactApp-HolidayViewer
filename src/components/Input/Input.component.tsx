import './Input.style.css'

export type InputProps = {
    value?: string
    placeholder?: string
    label?: string
    required?: boolean
    className?: React.ReactNode
    onChange?:
        | React.ChangeEventHandler<HTMLInputElement>
        | React.SetStateAction<any>
}

export default function Input(props: InputProps) {
    const {
        value,
        placeholder,
        label,
        onChange,
        required,
        className,
        ...otherProps
    } = props

    const classNames = require('classnames')
    const inputClass = classNames({ [`field ${className}`]: true })

    return (
        <div className={inputClass} {...otherProps}>
            {label && (
                <label htmlFor={label} className="field__label">
                    {label}
                </label>
            )}

            <input
                value={value}
                placeholder={placeholder}
                className={inputClass}
                name={label}
                required={required}
                onChange={onChange}
            />
        </div>
    )
}
