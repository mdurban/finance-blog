import React, { useEffect } from "react"
import Layout from "../layout"
import './contact.scss'

const ContactPage = ({ shouldDisplayConfirmation, displayContactConfirmation, hideContactConfirmation }) => {
  useEffect(() => {
    return () => hideContactConfirmation()
  }, [])

  const formElement = React.useRef(null)

  return (
    <Layout>
      <div className='contact-container'>
        <h1 className='contact-title'>Contact</h1>
        <form ref={formElement}>
          <input className='email-form email-subject' type='text' placeholder='SUBJECT' />
          <textarea className='email-form email-message' placeholder='MESSAGE' rows='8' cols='50' />
          <button
            className='email-submit'
            type="button"
            aria-label="submit"
            onClick={() => {
              displayContactConfirmation()
              formElement.current.reset()
            }}
          >
            Submit
          </button>
        </form>
        {
          shouldDisplayConfirmation && <div className='confirmation-message'>Thank you for contacting The Money Noob!</div>
        }
      </div>
    </Layout>
  )
}

export default ContactPage
