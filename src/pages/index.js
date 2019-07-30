import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostLink from "../components/post-link"
import './home-page.css'
import pig from '../assets/piggie-opacity.png'
import jar from '../assets/jar-tiny.jpg'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return <Layout>
    <SEO title="Home" keywords={[`finance`, `basics`, `money`, `invest`, `investing`, `banks`, `cash`, `save`, `savings`, `money for noobs`]} />
    <div className='banner'>
      <div className='banner-title'>
        Making money easy. Brought to you by people who don't know enough
        about money to make it complicated.
      </div>
      <img className='banner-img' src={pig} alt="Logo" />
      <a className='img-credit' href='https://www.flickr.com/photos/pictures-of-money/17299241862/'>
        Image by Pictures of Money
      </a>
    </div>
    <div id='blogs' className='blog-header'>Articles</div>
    <div className='blog-posts-container'>
      {
        edges.map((edge, key) => blogPreview(edge, key))
      }
    </div>
    <div className='footer'><Link className='footer-link' to="/page-2/">Disclaimer</Link></div>
  </Layout>
}

const blogPreview = (edge, key) => {
  const image = require(`../assets/${edge.node.frontmatter.image}-tiny.jpg`)
  return <Link className='blog-link' to={edge.node.frontmatter.path} key={key}>
    <div className='blog-preview-container'>
      <div className='blog-banner-img-container'><img className='blog-banner-img' src={image} alt="Logo" /></div>
      <div className='blog-title'>{edge.node.frontmatter.title}</div>
      <div className='blog-date'>{edge.node.frontmatter.date}</div>
      <div className='blog-excerpt'>{edge.node.excerpt}</div>
    </div>
  </Link>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 220)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            image
          }
        }
      }
    }
  }
`
