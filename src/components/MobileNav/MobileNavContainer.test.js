import React from 'react'
import { mount } from 'enzyme';
import MobileNavContainer from './'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Mobile Nav Container', () => {
  it('dispatches action to toggle mobile nav on click', () => {
    const mockStore = configureStore([])({ hamburgerMenu: {} })
    const mobileNavWrapper = mount(
      <Provider store={mockStore}><MobileNavContainer /></Provider>
    )

    mobileNavWrapper.find('.nav-item').first().simulate('click')

    expect(mockStore.getActions()).toContainEqual({ type: 'TOGGLE_MOBILE_NAV' })
  })
})