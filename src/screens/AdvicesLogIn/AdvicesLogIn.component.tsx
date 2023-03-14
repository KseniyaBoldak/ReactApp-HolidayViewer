import StepperLogIn from '../StepperLogIn/StepperLogIn.component'
import key from 'weak-key'
import './advices.style.css'

const AdvicesLogIn = () => {
    const text = [
        { text: 'Haven`t decided where to spend holidays?' },
        { text: 'Plan Your Vacation In Simple Steps:' },
    ]
    return (
        <aside className="advices">
            {text.map((text) => (
                <p className="advices__title" key={key(text)}>
                    {text.text}
                </p>
            ))}
            <StepperLogIn />
        </aside>
    )
}
AdvicesLogIn.displayName = 'AdvicesLogIn'
export default AdvicesLogIn
