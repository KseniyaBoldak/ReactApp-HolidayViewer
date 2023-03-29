import './input.style.css'

export type InputProps = {
    value?: string
    label?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
    const { value, label, onChange, ...otherProps } = props
    return (
        <div className="input-content" {...otherProps}>
            {label && (
                <label htmlFor={label} className="input__label">
                    {label}
                </label>
            )}

            <input
                className="input-content__input"
                name={label}
                required
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
