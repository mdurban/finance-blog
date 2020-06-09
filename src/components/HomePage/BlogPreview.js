import React from 'react'
import { Link } from "gatsby"
import './blog-preview.scss'

const BlogPreview = ({ blogPostMetadata }) => {
  const image = require(`../../images/${blogPostMetadata.image}-tiny.jpg`)

  return <Link className='blog-link' to={blogPostMetadata.path}>
    <div className='blog-preview-container'>
      <div><img className='blog-img' src={image} alt="Logo" /></div>
      <div className='blog-info'>
        <div className='blog-title'>{blogPostMetadata.title}</div>
        <div className='blog-date'>{blogPostMetadata.date}</div>
      </div>
    </div>
  </Link>
}

export default BlogPreview