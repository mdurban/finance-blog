import React from "react"
import Layout from "../Layout"
import './home-page.scss'
import GlossaryPreview from "./GlossaryPreview"
import BlogPreview from "./BlogPreview";

const HomePage = ({ blogPosts }) => {
  return <Layout>
    <div className="home-page">
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
              blogPosts.map((blogPost, index) => (
                <React.Fragment key={index}>
                  <BlogPreview blogPostMetadata={blogPost.node.frontmatter} />
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </Layout>
}

export default HomePage
