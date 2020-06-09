import React from 'react'
import { mount } from 'enzyme';
import ContactPageContainer from './'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Contact Page Container', () => {
  describe('confirmation message', () => {
    it('displays when displayConfirmation in state is true', () => {
      const mockState = {
        hamburgerMenu: {
          isMobileNavOpen: false
        },
        contactForm: {
          displayConfirmation: true
        }
      }
      const mockStore = configureStore([])(mockState)
      const contactPageWrapper = mount(
        <Provider store={mockStore}><ContactPageContainer /></Provider>
      )

      expect(contactPageWrapper.find('.confirmation-message')).toHaveLength(1)
    })

    it('does NOT display when displayConfirmation in state is false', () => {
      const mockState = {
        hamburgerMenu: {
          isMobileNavOpen: false
        },
        contactForm: {
          displayConfirmation: false
        }
      }
      const mockStore = configureStore([])(mockState)
      const contactPageWrapper = mount(
        <Provider store={mockStore}><ContactPageContainer /></Provider>
      )

      expect(contactPageWrapper.find('.confirmation-message')).toHaveLength(0)
    })
  })

  describe('on unmount', () => {
    it('dispatches action to hide confirmation', () => {
      const mockState = {
        hamburgerMenu: {},
        contactForm: {}
      }
      const mockStore = configureStore([])(mockState)
      const contactPageWrapper = mount(
        <Provider store={mockStore}><ContactPageContainer /></Provider>
      )

      contactPageWrapper.unmount()

      expect(mockStore.getActions()).toContainEqual({ type: 'HIDE_CONTACT_CONFIRMATION' })
    })
  })

  describe('on submit', () => {
    it('dispatches action to show confirmation', () => {
      const mockState = {
        hamburgerMenu: {},
        contactForm: {}
      }
      const mockStore = configureStore([])(mockState)
      const contactPageWrapper = mount(
        <Provider store={mockStore}><ContactPageContainer /></Provider>
      )

      contactPageWrapper.find('.email-submit').simulate('click')

      expect(mockStore.getActions()).toContainEqual({ type: 'DISPLAY_CONTACT_CONFIRMATION' })
    })
  })

})