import React, { useRef, useEffect } from "react";
import Layout from "../layout";
import SEO from "../seo";
import './contact.scss';

const ContactPage = ({ displayConfirmation, displayContactConfirmation, hideContactConfirmation }) => {
  useEffect(() => {
    return () => {
      hideContactConfirmation()
    }
  }, [])

  const formElement = useRef(null)

  return (
    <Layout>
      <SEO title="contact" />
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
          displayConfirmation && <div>Thank you for contacting The Money Noob!</div>
        }
      </div>
    </Layout>
  )
}

export default ContactPage
