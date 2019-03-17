import React from 'react';
// import Layout from '../components/layout';
import { graphql } from 'gatsby'

function BlogPostTemplate({data}) {

  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
    // return (
    //     <Layout>
    //       <div>
    //           {/* <h1>{title}</h1>
    //           <div dangerouslySetInnerHTML={{ __html: blogContents.html }} /> */}
    //       </div>
    //     </Layout>
    // )
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

// const query = graphql`
//  query PostQuery($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//       title
//       description
//       }
//     }
//   }
// `