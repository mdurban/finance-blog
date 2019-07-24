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
      <div className='banner-img' />
      <img className='banner-img' src={pig} alt="Logo" />
    </div>
    <div className='blog-header'>Blog Posts</div>
    <div className='blog-posts'>{Posts}</div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
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
