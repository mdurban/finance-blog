import { connect } from 'react-redux'
import MobileNav from './MobileNav';

const mapStateToProps = state => ({
  navOpen: state.hamburgerMenu.isMobileNavOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleMobileNav: () => dispatch({ type: 'TOGGLE_MOBILE_NAV' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav); 