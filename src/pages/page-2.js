import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h2>Disclaimer</h2>
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
    <h2>Affiliate Program Participation</h2>
    <p>
      Some links in this website may be affiliate links.
      This means whenever you click on one of these links,
      I get paid some money and you won't notice anything.
      Any references to third party products are subject to change without notice.
      You are responsible for doing your own research before participating in any third party offers.
    </p>

  </Layout>
)

export default SecondPage
