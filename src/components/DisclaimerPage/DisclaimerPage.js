import React from "react"
import Layout from "../Layout"
import './disclaimer.scss'

const DisclaimerPage = () => (
  <Layout>
    <div className='disclaimer-container'>
      <h2 className='disclaimer-title'>Disclaimer</h2>
      <p>
        We are not financial advisors or even financial experts. We are financial noobs.
        We recommend you always talk with a financial professional before taking any actions.
    </p>
      <p>
        Nothing on this site should be seen as financial advice. All opinions are our own
        and do not apply to anyone. Everyone's financial situations are different and therefore
        require individualized financial strategies. Again, we recommend meeting with a
        financial advisor for personalized advice. You are responsible for any financial decisions that you choose to make.
    </p>
      <h2 className='disclaimer-title'>Privacy Policy</h2>
      <p>
        This website uses Google Analytics in a manner that is in accordance with
      <a href='https://www.google.com/analytics/terms/'> Google's Terms and Conditions</a> to help us track information.
      Google Analytics is a web analysis service of Google, Inc. <a href='https://www.google.com'>(www.google.com) </a>
        which uses cookies to help us learn how you're using this site.
    </p>
      <p>
        For example, it may track your IP address, how long you visited this site, which site you came from, what kind of
        computer you're using and other helpful tracking information.
    </p>
      <p>
        You can opt out of this tracking using <a href='https://tools.google.com/dlpage/gaoptout?hl=en'>this browser plugin</a>
      </p>
    </div>
  </Layout>
)

export default DisclaimerPage
