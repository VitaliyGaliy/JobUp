import { connect } from 'react-redux'
import { actions } from '../modules'

import { Dashboard } from '../components/Dashboard'

 const mapActionCreators = {
   ...actions,
 }

const mapStateToProps = (state) => {
  console.log('isEditing', state.dashboard.isEditing);
  return{
  addressObj: state.dashboard.addressObj,
  openSideBar: state.dashboard.openSideBar,
  servise: state.dashboard.servise,
  description: state.dashboard.description,
  tasks: state.dashboard.tasks,
  editTaskData: state.dashboard.editTaskData,
  isEditing: state.dashboard.isEditing,
}}

export default connect(mapStateToProps, mapActionCreators)(Dashboard)
