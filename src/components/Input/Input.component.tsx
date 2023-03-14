import './input.style.css'

const Input = ({
    value,
    label,
    onChange,
}: {
    value: string
    label: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) => {
    return (
        <div className="input-content">
            <label htmlFor={label} className="input__label">
                {label}
            </label>
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
Input.displayName = 'Input'
export default Input
