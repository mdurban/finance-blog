import { connect } from "react-redux"
import HamburgerMenu from "./HamburgerMenu";
import { toggleMobileNav } from "../../actions/actionCreators";

const mapStateToProps = state => ({
  mobileNavIsOpen: state.hamburgerMenu.isMobileNavOpen
})

export default connect(mapStateToProps, { toggleMobileNav })(HamburgerMenu) 