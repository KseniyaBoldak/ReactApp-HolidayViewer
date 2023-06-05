import './input.style.css'

export type InputProps = {
    value?: string
    label?: string
    required?: boolean
    className?: string
    onChange?: (value: any) => void
}

export default function Input(props: InputProps) {
    const { value, label, onChange, required, className, ...otherProps } = props

    if (!value || !label || !required || !onChange) {
        return null
    }

    return (
        <div className={`"field__"${className}`} {...otherProps}>
            {label && (
                <label htmlFor={label} className="field__label">
                    {label}
                </label>
            )}

            <input
                className={`'field__input'${className}`}
                name={label}
                required={required}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
