import { shallow } from 'enzyme';
import React from 'react';
import HamburgerMenu from './HamburgerMenu';

describe('Hamburger Menu', () => {
  it('calls handler to toggle mobile nav on click', () => {
    const mockToggleHandler = jest.fn()
    const hamburgerMenuWrapper = shallow(
      <HamburgerMenu toggleMobileNav={mockToggleHandler} />
    )

    hamburgerMenuWrapper.find('.hamburger').simulate('click')

    expect(mockToggleHandler).toHaveBeenCalled()
  })
})
