import React from 'react';
import { graphql } from 'gatsby'
import './blog-post.css'
import Layout from '../components/layout';
import jar from '../assets/jar-sm.jpg'

function BlogPostTemplate({data}) {

  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1 className='title'>{frontmatter.title}</h1>
          <h2 className='date'>{frontmatter.date}</h2>
          <div className='blog-banner'>
            <img className='blog-banner-img' src={jar} alt="Logo" />
            <a className='blog-img-credit' href='https://www.flickr.com/photos/pictures-of-money/17121706878/'>
              Image by Pictures of Money
            </a>
          </div>
          <div
            className='content'
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className='disclaimer'>
          I am not a financial advisor. I know very little about finances, but I want to share what I've learned 
          because it has made a big difference in my life.
          I am by no means a financial expert in any capacity and you should 
          get advice from a fiduciary financial advisor before making any financial decisions.
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`