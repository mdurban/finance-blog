import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './contact.css'

const About = () => (
  <Layout>
    <SEO title="about" />
    <h1>Contact</h1>
    <input className='email-form email-subject' type='text' placeholder='SUBJECT'></input>
    {/* <input className='email-form email-message' type='text' placeholder='MESSAGE'></input> */}
    <textarea className='email-form email-message' placeholder='MESSAGE' rows='8' cols='50'></textarea>
    <button className='email-submit' type="button" onClick={() => {}}>Submit</button>
  </Layout>
)

export default About
