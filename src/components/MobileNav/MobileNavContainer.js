import { connect } from 'react-redux'
import MobileNav from './MobileNav';
import { toggleMobileNav } from '../../actions/actionCreators';

const mapStateToProps = state => ({
  navOpen: state.hamburgerMenu.isMobileNavOpen,
});

export default connect(mapStateToProps, { toggleMobileNav })(MobileNav); 