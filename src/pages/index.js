import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import './home-page.css';


const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return <Layout>
    <SEO title="Home" keywords={[`finance`, `basics`, `money`, `invest`, `investing`, `banks`, `cash`, `save`, `savings`, `money for noobs`, 'article', 'blog', 'budget', 'retirement']} />
    <div className="background-container">
      <div className="hero-image">
        <div className="hero-text">
          <div className='hero-title'>Making money easy</div>
          <div className='hero-subtitle'>Brought to you by people who don't know enough
          about money to make it complicated</div>
        </div>
      </div>
      <div className='blog-background'>

        <div className='blog-container'>
          <div className='glossary-link-container'>
            <div className='blog-header'>Glossary</div>
            <div className='glossary-introduction'>View our glossary of commonly used financial terms for an overview on the lingo that you may have heard but never understood.</div>
            {/* <div className='glossary-entry'>
              <span className='entry-name'>Asset</span>
              <span className='entry-definition'> - Something can generate cash flow, reduce expenses, or improve sales, regardless of whether it's manufacturing equipment or a patent.</span>
            </div>
            <div className='glossary-entry'>
              <span className='entry-name partial-blur'>Bond</span>
              <span className='entry-definition partial-blur'> - Something that represents a loan made by an investor to a borrower (typically corporate or governmental).</span>
            </div>
            <div className='glossary-entry'>
              <span className='entry-name total-blur'>Dividend</span>
              <span className='entry-definition total-blur'> - The distribution of reward from a portion of the company's earnings and is paid to a class of its shareholders.</span>
            </div>
            <div className='glossary-entry'>
              <span className='entry-name blur'>Dividend</span>
              <span className='entry-definition blur'> - The distribution of reward from a portion of the company's earnings and is paid to a class of its shareholders.</span>
            </div> */}
            <div className='glossary-entry'>
              <span className='entry-name'>Asset</span>
              <span className='entry-definition'> - Something can generate cash flow, reduce expenses, or improve sales, regardless of whether it's manufacturing equipment or a patent.</span>
            </div>
            <div className='glossary-entry'>
              <span className='entry-name partial-blur'>Bond</span>
              <span className='entry-definition partial-blur'> - Something that represents a loan made by an investor to a borrower (typically corporate or governmental).</span>
            </div>
            <div className='glossary-entry'>
              <span className='entry-name total-blur'>Dividend</span>
              <span className='entry-definition total-blur'> - The distribution of reward from a portion of the company's earnings and is paid to a class of its shareholders.</span>
            </div>
            <div className='blur-box' />
          </div>
          <Link className='to-glossary-link' to='/glossary'>View more</Link>

          <div id='blogs' className='blog-header'>Blog</div>
          <div className='blog-posts-container'>
            {
              edges.map((edge, key) => blogPreview(edge, key))
            }
          </div>
        </div>
      </div>
    </div>
  </Layout>
}

const blogPreview = (edge, key) => {
  const image = require(`../assets/${edge.node.frontmatter.image}-tiny.jpg`)

  return <Link className='blog-link' to={edge.node.frontmatter.path} key={key}>
    <div className='blog-preview-container'>
      <div className='blog-banner-img-container'><img className='blog-img' src={image} alt="Logo" /></div>
      <div className='blog-info'>
        <div className='blog-title'>{edge.node.frontmatter.title}</div>
        <div className='blog-date'>{edge.node.frontmatter.date}</div>
        <div className='blog-excerpt'>{edge.node.excerpt}</div>
      </div>
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
