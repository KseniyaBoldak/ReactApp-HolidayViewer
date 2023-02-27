import Stepper from "../components/Stepper.component"

const StepperLogin = () => {
    const stepperText = {
        step1: 1,
        text1: 'Choose a country to travel',
        step2: 2,
        text2: 'Find appropriate public holidays',
        step3: 3,
        text3: 'Build the most convenient route from your city to your vacation spot'
    }
    return (
        <>
            <Stepper stepperNumber={stepperText.step1} stepperText={stepperText.text1}/>
            <Stepper stepperNumber={stepperText.step2} stepperText={stepperText.text2}/>
            <Stepper stepperNumber={stepperText.step3} stepperText={stepperText.text3}/>
        </>
    )
}
export default StepperLogin;