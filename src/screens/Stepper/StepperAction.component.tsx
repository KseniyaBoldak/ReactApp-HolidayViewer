export type StepperActionProps = {
    number?: number
    text?: React.ReactNode
}

export default function StepperAction(props: StepperActionProps) {
    const { number, text, ...otherProps } = props

    const steps = [
        { step: 1, text: 'Choose a country to travel' },
        { step: 2, text: 'Find appropriate public holidays' },
        {
            step: 3,
            text: 'Build the most convenient route from your city to your vacation spot',
        },
    ]
    return (
        <div className="stepper" {...otherProps}>
            <span className="stepper__number">{number}</span>
            <p className="stepper__text">{text}</p>
        </div>
    )
}
