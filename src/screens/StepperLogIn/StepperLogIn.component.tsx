import Stepper from '../../components/Stepper'
import key from 'weak-key'

const StepperLogIn = () => {
    const steps = [
        { step: 1, text: 'Choose a country to travel' },
        { step: 2, text: 'Find appropriate public holidays' },
        {
            step: 3,
            text: 'Build the most convenient route from your city to your vacation spot',
        },
    ]
    return (
        <div className="stepper__wrap">
            {steps.map((step) => (
                <Stepper number={step.step} text={step.text} key={key(step)} />
            ))}
        </div>
    )
}
StepperLogIn.displayName = 'StepperLogIn'
export default StepperLogIn
