const Stepper = ({
  stepperNumber,
  stepperText,
}: {
  stepperNumber: number
  stepperText: string
}) => {
  return (
    <>
      <span>{stepperNumber}</span>
      <p>{stepperText}</p>
    </>
  )
}
export default Stepper
