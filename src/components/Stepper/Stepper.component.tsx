import './stepper.style.css'

export type StepperProps = {
    number?: number
    text?: string
}

export default function Stepper(props: StepperProps) {
    const { number, text, ...otherProps } = props

    return (
        <div className="stepper" {...otherProps}>
            <span className="stepper__number">{number}</span>
            <p className="stepper__text">{text}</p>
        </div>
    )
}
