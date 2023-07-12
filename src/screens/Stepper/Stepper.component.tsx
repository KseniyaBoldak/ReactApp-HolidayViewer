import StepperAction, { StepperActionProps } from './StepperAction.component'
import key from 'weak-key'

export type StepperProps = {
    steps?: StepperActionProps[]
    children?: React.ReactNode
}

export default function Stepper(props: StepperProps) {
    const { steps, children, ...otherProps } = props
    if (!steps) {
        return null
    }
    return (
        <div className="steppers" {...otherProps}>
            {steps.map((step) => (
                <StepperAction key={key(step)} {...step} />
            ))}
            {children}
        </div>
    )
}

Stepper.Action = StepperAction
