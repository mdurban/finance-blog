import HamburgerMenu from "./HamburgerMenu";
import { connect } from 'react-redux'

const mapStateToProps = state => {
    console.log('state is: ', state)
    return {
    countFromState: state.hamburgerMenu.count
}}
  
const mapDispatchToProps = dispatch => ({
    increment: (count) => dispatch({ type: `INCREMENT`, countValue: (count+1) })
})

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerMenu)