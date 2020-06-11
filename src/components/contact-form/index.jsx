import React from "react"
import { useForm } from "react-hook-form"

import ScrollableAnchor from "react-scrollable-anchor"

import "./style.css"

const ContactForm = () => {
  const { register } = useForm()

  return (
    <ScrollableAnchor id="contacts">
      <div className="contact-container">
        <div
          className="row-item-title"
          style={{ textAlign: "center", paddingTop: 16 }}
        >
          Contattaci
        </div>
        <form
          className="contactForm"
          method="post"
          action="https://formspree.io/mlepbpdk"
        >
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
            <input type="email" name="cliente" ref={register} />
          </label>
          <label>
            Messaggio:
            <textarea type="text" name="messaggio" ref={register} />
          </label>
          <input className="submit" type="submit" value="Invia" />
        </form>
      </div>
    </ScrollableAnchor>
  )
}

export default ContactForm
