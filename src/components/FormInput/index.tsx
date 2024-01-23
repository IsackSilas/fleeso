type InputProps = {
  type: string
  placeholder: string
  name: string
  change?: React.ChangeEventHandler<HTMLInputElement>
}

function Input({ type, placeholder, name, change }: InputProps) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input type={type} placeholder={placeholder} id={name} onChange={change} />
    </>
  )
}

export default Input
