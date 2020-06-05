import React from "react"
import Layout from "../layout"
import SEO from "../seo"
import './contact.scss'

const ContactPage = () => (
  <Layout>
    <SEO title="contact" />
    <div className='contact-container'>
      <h1 className='contact-title'>Contact</h1>
      <form id='contact-form'>
        <input className='email-form email-subject' type='text' placeholder='SUBJECT' />
        <textarea className='email-form email-message' placeholder='MESSAGE' rows='8' cols='50' />
        <button
          className='email-submit'
          type="button"
          aria-label="submit"
          onClick={() => {
            alert('Thank you for contacting The Money Noob!')
            document.getElementById('contact-form').reset();
          }}
        >
          Submit
    </button>
      </form>
    </div>
  </Layout>
)

export default ContactPage
