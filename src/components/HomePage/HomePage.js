import { Link } from "gatsby";
import React from "react";
import Layout from "../layout";
import SEO from "../seo";
import { glossaryEntries } from "../../helpers/glossaryEntries";
import './home-page.scss';

const HomePage = ({ blogPosts }) => {
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
          <div id='blogs' className='section-header'>Blog</div>
          <div className='blog-posts-container'>
            {
              blogPosts.map((blogPost, key) => blogPreview(blogPost, key))
            }
          </div>
        </div>
      </div>
    </div>
  </Layout>
}

const GlossaryPreview = () => (
  <div className='glossary-preview-container'>
    <div className='section-header'>Glossary</div>
    <div className='glossary-description'>
      Personal finance professionals can use a lot of financial lingo that can make your head spin. Our hope is to clarify what these words mean and provide a single place that you can reference terms whenever you hear them come up in conversation.
    </div>
    <div className='glossary-link-container'>
      {
        glossaryEntries().slice(0, 4).map((glossaryKeyValue, index) => (
          <div key={index}>
            <span className='entry-name'>{glossaryKeyValue.entry}</span>
            <span className='entry-definition'> - {glossaryKeyValue.definition}</span>
          </div>
        ))
      }
      <div className='blur-box' />
    </div>
    <Link className='to-glossary-link' to='/glossary'>Go to Glossary</Link>
  </div>
)

const blogPreview = (edge, key) => {
  const image = require(`../../images/${edge.node.frontmatter.image}-tiny.jpg`)

  return <Link className='blog-link' to={edge.node.frontmatter.path} key={key}>
    <div className='blog-preview-container'>
      <div><img className='blog-img' src={image} alt="Logo" /></div>
      <div className='blog-info'>
        <div className='blog-title'>{edge.node.frontmatter.title}</div>
        <div className='blog-date'>{edge.node.frontmatter.date}</div>
      </div>
    </div>
  </Link>
}

export default HomePage
