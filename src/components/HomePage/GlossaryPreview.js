import React from 'react'
import { Link } from "gatsby"
import { glossaryEntries } from "../../helpers/glossaryEntries"
import './glossary-preview.scss'

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

export default GlossaryPreview