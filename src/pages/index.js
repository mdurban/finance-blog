import React from "react";
import { graphql } from "gatsby";

import HomePage from "../components/HomePage";

const Home = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return <HomePage blogPosts={edges} />
}

export default Home

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