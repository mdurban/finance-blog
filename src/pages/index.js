import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import './home-page.css';
import { glossaryEntries } from "../helpers/glossaryEntries";


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
          <GlossaryPreview />
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

const GlossaryPreview = () => (
  <div className='glossary-preview-container'>
    <div className='blog-header'>Glossary</div>
    <div className='glossary-description'>Some writing here that describes what this glossary is for sdfadsfdfaj;a a sa. Some writing here that describes what this glossary is for. Some writing here that describes what this glossary is for. Some writing here that describes what this glossary is for.</div>
    <div className='glossary-link-container'>
      {
        glossaryEntries().slice(0, 4).map((glossaryKeyValue, index) => (
          <>
            <div key={index}>
              <span className='entry-name'>{glossaryKeyValue.entry}</span>
              <span className='entry-definition'> - {glossaryKeyValue.definition}</span>
            </div>
          </>
        ))
      }
      <div className='blur-box' />
    </div>
    <Link className='to-glossary-link' to='/glossary'>Go to Glossary</Link>
  </div>
)

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
