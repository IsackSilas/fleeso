type LookingForInputProps = {
  name: string
}

function LookingForInput({ name }: LookingForInputProps) {
  return (
    <>
      <input id={name} name="LookingFor" type="radio" />
      <label htmlFor={name}>{name}</label>
    </>
  )
}

export default LookingForInput
