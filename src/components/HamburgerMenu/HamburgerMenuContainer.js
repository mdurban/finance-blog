import { connect } from "react-redux"
import HamburgerMenu from "./HamburgerMenu";

const mapStateToProps = state => ({
  mobileNavIsOpen: state.hamburgerMenu.isMobileNavOpen
})

const mapDispatchToProps = dispatch => ({
  toggleMobileNav: () => dispatch({type: 'TOGGLE_MOBILE_NAV'}),
})

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerMenu) 