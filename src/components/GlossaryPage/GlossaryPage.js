import React from 'react'
import Layout from '../layout';
import SEO from "../seo"
import { glossaryEntries } from '../../helpers/glossaryEntries';

import './glossary.scss'

const GlossaryPage = () => (
  <Layout>
    <SEO title="glossary" />
    <div className='glossary-container'>
      <h1 className='glossary-title'>Glossary of Terms</h1>
      {
        glossaryEntries().map((glossaryKeyValue, index) => (
          <div key={index} className='glossary-entry'>
            <span className='entry-name'>{glossaryKeyValue.entry}</span>
            <span className='entry-definition'> - {glossaryKeyValue.definition}</span>
          </div>
        ))
      }
    </div>
  </Layout>
)

export default GlossaryPage