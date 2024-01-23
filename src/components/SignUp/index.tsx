import { SetStateAction, useState} from 'react'
import Button from '../Button'
import FormInput from '../FormInput'
import LookingForInput from '../LookingForInput'
import styles from './SignUp.module.css'


function SignUp() {
  function getName(e: { target: { value: SetStateAction<string> } }) {
    setNameDisplay(e.target.value)
  }

  const [nameDisplay, setNameDisplay] = useState('Isack')
  // const [color1, setColor1] = useState()
  // const [color2, setColor2] = useState()
  // const click2 = color2 => {
  //   setColor2(color2)   
  // }

  // useEffect(() => {
  //   document.getElementById('designs').style.backgroundColor = color2
  // }, [color2])
  // project.style.backgroundColor = '#3030A5'
  // design.style.backgroundColor = '#ffffff'
  // project.style.color = '#ffffff'
  // design.style.color = '#000000'




  // project.style.backgroundColor = '#ffffff'
  // design.style.backgroundColor = '#3030A5'
  // project.style.color = '#000000'
  // design!.style.color = '#ffffff'


  return (
    <section className={styles.register}>
      <div className={styles.card}>
        <div className={styles.cardLogo}>
          <span>Fleeso</span>
        </div>
        <div className={styles.cardItem}>
          <h2>Welcome: {nameDisplay}</h2>
        </div>
        <div className={styles.cardItem}>
          <h1>
            Start your <br /> journey with us.
          </h1>
          <p>Discover the world's best community of freelancers and bussines owners</p>
        </div>
      </div>

      <div className={styles.signUp}>
        <div className={styles.signUpTitle}>
          <h2>Sign up</h2>
          <p>
            Have an account? <a href="#">Register</a>
          </p>
        </div>
        <div className={styles.lookingFor}>
          <div className={styles.lookingForTitle}>
            <span>Looking For?</span>
          </div>
          <div className={styles.lookingForInput}>
            <div className={styles.lookingForInputItem} id='projects'>
              <LookingForInput name="Projects"/>
            </div>
            <div className={styles.lookingForInputItem} id='designs'>
              <LookingForInput name="Designs"/>
            </div>
          </div>
        </div>
        <div className={styles.signUpInput}>
          <FormInput name="First Name" placeholder="Ex: Isack" type="text" change={getName} />
        </div>
        <div className={styles.signUpInput}>
          <FormInput name="E-mail" placeholder="Ex: exemplo@email.com" type="email" />
        </div>
        <div className={styles.signUpInput}>
          <FormInput name="Senha" placeholder="Ex: Teste123@" type="password" />
        </div>
        <div>
          <Button text="Create Account" />
        </div>
      </div>
    </section>
  )
}

export default SignUp
