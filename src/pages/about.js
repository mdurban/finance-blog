import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="about" />
    <h1>About</h1>
    <p>
        When I tried learning the basics of finances, I was frustrated at how confusing it was.
        I had a difficult time finding any blog posts or podcasts aimed at people who knew nothing
        and I found myself lost in sea of cryptic mathematical equations and unfamiliar lingo.
        The basics of money is something that I feel everyone should know, yet it feels so hard to learn.
    </p>
    <p>
      My goal is to create a blog where people can start learning the basics in an accessible way. I want to have a place
      where people who know nothing about finances will feel welcome and not overwhelmed.
    </p>
    <p>
        Personal finance is an extremely important topic that such a small number of people understand
        because no one teaches it to us. I believe that just learning the basics, as I did,
        will improve everyone's quality of life and will help provide peace of mind.
    </p>
    <p>    
        Unfortunately, to learn finances, you have to spend months of research to sift
        through the complicated mess just to learn the basics. Luckily I,
        the Money Noob, have done that research so other noobs don't have to.
    </p>
    <p> - The Money Noob</p>
    <div className='footer'><Link className='footer-link' to="/disclaimer/">Disclaimer and Privacy Policy</Link></div>
  </Layout>
)

export default About
