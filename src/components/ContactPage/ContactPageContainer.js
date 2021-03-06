import { connect } from "react-redux"
import ContactPage from "./ContactPage";
import { displayContactConfirmation, hideContactConfirmation } from '../../actions/actionCreators'

const mapStateToProps = state => ({
  shouldDisplayConfirmation: state.contactForm.displayConfirmation
})

export default connect(mapStateToProps, { displayContactConfirmation, hideContactConfirmation })(ContactPage)