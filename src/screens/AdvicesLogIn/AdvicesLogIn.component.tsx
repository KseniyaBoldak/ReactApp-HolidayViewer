import StepperAction from '../Stepper/Stepper.component'
import key from 'weak-key'
import './advices.style.css'

const text = [
    { text: 'Haven`t decided where to spend holidays?' },
    { text: 'Plan Your Vacation In Simple Steps:' },
]
export default function AdvicesLogIn() {
    return (
        <aside className="advices">
            {text.map((text) => (
                <p className="advices__title" key={key(text)}>
                    {text.text}
                </p>
            ))}
            <StepperAction />
        </aside>
    )
}
