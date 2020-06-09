import React from 'react'
import Layout from '../Layout';
import { glossaryEntries } from '../../helpers/glossaryEntries';

import './glossary.scss'

const GlossaryPage = () => (
  <Layout>
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