// export { default } from './Sidebar.js';

import { connect } from 'react-redux';
import Sidebar from './Sidebar.js';

function mapStateToProps(state) {
  return { baseEntity: state.baseEntity }
}

export default connect( mapStateToProps, null )( Sidebar );
