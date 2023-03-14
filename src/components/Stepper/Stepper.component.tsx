import './stepper.style.css'

const Stepper = ({ number, text }: { number: number; text: string }) => {
    return (
        <div className="stepper">
            <span className="stepper__number">{number}</span>
            <p className="stepper__text">{text}</p>
        </div>
    )
}
Stepper.displayName = 'Stepper'
export default Stepper
