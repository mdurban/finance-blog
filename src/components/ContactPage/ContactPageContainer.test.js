import React from 'react'
import { mount } from 'enzyme';
import ContactPageContainer from './'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      author: 'Florian',
      description: 'My description',
      title: 'My Title',
    },
  },
}));

describe('Contact Page Container', () => {
  describe('confirmation message', () => {
    it('mount', () => {
      const middlewares = []
      const mockStore = configureStore(middlewares)
      const initialState = {
        hamburgerMenu: {
          isMobileNavOpen: false
        },
        contactForm: {
          displayConfirmation: true
        }
      }
      const store = mockStore(initialState)
      const contactPageWrapper = mount(
        <Provider store={store}><ContactPageContainer /></Provider>
      )

      expect(contactPageWrapper.find('.confirmation-message')).toHaveLength(1)
    })
  })

})