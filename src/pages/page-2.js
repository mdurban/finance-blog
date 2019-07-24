import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Disclaimer</h1>
    <p>
      We are not financial advisors or even financial experts. We are financial noobs.
      We recommend you always talk with a financial professional before taking any actions.
    </p>
    <p>
      Nothing on this site should be seen as financial advice. All opinions are our own 
      and do not apply to anyone. Everyone's financial situations are different and therefore 
      require individualized financial strategies. Again, we recommend meeting with a 
      financial advisor for personalized advice.
    </p>
    <p>
      Any links found on this site to other products or articles are not 
      associated with us in any way and we are not endorsing them. We have added them because we found them 
      informative. We are not responsible for any changes that may occur on those sites.
    </p>
  </Layout>
)

export default SecondPage
