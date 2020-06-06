import React from 'react'
import { shallow, mount } from 'enzyme';
import ContactPage from './ContactPage'

describe('Contact Page', () => {
  describe('confirmation message', () => {
    it('displays when shouldDisplayConfirmation prop is true', () => {
      const contactPageWrapper = shallow(
        <ContactPage shouldDisplayConfirmation={true} />
      )

      expect(contactPageWrapper.find('.confirmation-message')).toHaveLength(1)
    })

    it('does NOT display when shouldDisplayConfirmation prop is false', () => {
      const contactPageWrapper = shallow(
        <ContactPage shouldDisplayConfirmation={false} />
      )

      expect(contactPageWrapper.find('.confirmation-message')).toHaveLength(0)
    })
  })

  describe('on submit button click', () => {
    let useRefSpy
    const mockDisplayContactConfirmation = jest.fn()
    const mockClearFormHandler = jest.fn()

    beforeEach(() => {
      useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { reset: mockClearFormHandler } });
      const contactPageWrapper = shallow(
        <ContactPage displayContactConfirmation={mockDisplayContactConfirmation} />
      )

      contactPageWrapper.find('.email-submit').simulate('click')
    })
    it('calls handler to display confirmation', () => {
      expect(mockDisplayContactConfirmation).toHaveBeenCalled()
    })

    it('resets form', () => {
      expect(useRefSpy).toHaveBeenCalled()
      expect(mockClearFormHandler).toHaveBeenCalled()
    })
  })

})