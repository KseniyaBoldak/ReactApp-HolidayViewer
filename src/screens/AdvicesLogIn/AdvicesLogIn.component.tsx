import StepperAction from '../Stepper/Stepper.component'
import Advice from './Advice/Advice.component'

import './AdvicesLogIn.style.css'

const ADVICES = [
    { text: 'Haven`t decided where to spend holidays?' },
    { text: 'Plan Your Vacation In Simple Steps:' },
]
export default function AdvicesLogIn() {
    return (
        <aside className="advices">
            {ADVICES.map((text) => (
                <Advice text={text} />
            ))}
            <StepperAction />
        </aside>
    )
}
