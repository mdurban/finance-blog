import React from 'react'
import { Link } from "gatsby"
import './blog-preview.scss'

const BlogPreview = ({ blogPost }) => {
  const image = require(`../../images/${blogPost.node.frontmatter.image}-tiny.jpg`)

  return <Link className='blog-link' to={blogPost.node.frontmatter.path}>
    <div className='blog-preview-container'>
      <div><img className='blog-img' src={image} alt="Logo" /></div>
      <div className='blog-info'>
        <div className='blog-title'>{blogPost.node.frontmatter.title}</div>
        <div className='blog-date'>{blogPost.node.frontmatter.date}</div>
      </div>
    </div>
  </Link>
}

export default BlogPreview