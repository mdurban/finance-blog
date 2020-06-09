import React from "react"
import Layout from "../Layout"
import './404.scss'

const NotFoundPage = () => (
  <Layout>
    <div className='page-container'>
      <h1 className='page-title'>Page Not Found</h1>
      <div>Sorry, this page probably used to exist but no longer exists.</div>
      <div className='punchline'>Just like my bank account...</div>
    </div>
  </Layout>
)

export default NotFoundPage
