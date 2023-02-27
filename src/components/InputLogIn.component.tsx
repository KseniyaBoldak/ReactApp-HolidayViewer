const InputLogIn = ({
  userNamePassword,
  label,
  onChange,
}: {
  userNamePassword: string
  label: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        name={label}
        required
        value={userNamePassword}
        onChange={onChange}
      />
    </>
  )
}
export default InputLogIn
