import React from "react"
import { useForm } from "react-hook-form"

import "./style.css"

const ContactForm = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nome:
        <input type="text" name="nome" ref={register} />
      </label>
      <label>
        Cognome:
        <input type="text" name="cognome" ref={register} />
      </label>
      <label>
        Email:
        <input type="text" name="email" ref={register} />
      </label>
      <label>
        Messaggio:
        <textarea type="text" name="messaggio" ref={register} />
      </label>
      <input className="submit" type="submit" value="Invia" />
    </form>
  )
}

export default ContactForm
