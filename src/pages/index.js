import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostLink from "../components/post-link"
import './home-page.css'
import pig from '../assets/piggie-opacity.png'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
  .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return <Layout>
    <SEO title="Home" keywords={[`finance`, `basics`, `money`, `invest`, `investing`, `banks`, `cash`, `save`, `savings`]} />
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
    <div id='blogs' className='blog-header'>Blog Posts</div>
    <div className='blog-posts'>{Posts}</div>
    <div className='footer'><Link className='disclaimer' to="/page-2/">Disclaimer</Link></div>
  </Layout>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
