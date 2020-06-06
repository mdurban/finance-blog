import React from 'react'
import { shallow, mount, render } from 'enzyme';
import ContactPage from './ContactPage'

describe('Contact Page', () => {
  it('renders submit button', () => {
    const contactPageWrapper = shallow(<ContactPage />)

    expect(contactPageWrapper.find('.email-submit')).toHaveLength(1)
  })
})