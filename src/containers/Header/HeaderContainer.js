import { connect } from 'react-redux'
import { Header } from '../../components/Header/Header'

const mapDispatchToProps = {}
const mapStateToProps = (state) => ({ logged: state.home.logged })

export default connect(mapStateToProps, mapDispatchToProps)(Header)
