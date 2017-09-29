import { connect } from 'react-redux'
import { actions } from '../modules'

import { Dashboard } from '../components/Dashboard'

 const mapActionCreators = {
   ...actions,
 }

const mapStateToProps = (state) => {
  return{
  address: state.dashboard.address,
  openSideBar: state.dashboard.openSideBar,
  servise: state.dashboard.servise,
  description: state.dashboard.description,
  tasks: state.dashboard.tasks,
  tasksText: state.dashboard.tasks,
}}

export default connect(mapStateToProps, mapActionCreators)(Dashboard)
