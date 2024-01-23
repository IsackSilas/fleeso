type LookingForInputProps = {
  name: string
  changeBackground?: React.ChangeEventHandler<HTMLInputElement>
}

function LookingForInput({ name, changeBackground }: LookingForInputProps) {
  return (
    <>
      <input id={name} name="LookingFor" type="radio" onChange={changeBackground} />
      <label htmlFor={name}>{name}</label>
    </>
  )
}

export default LookingForInput
