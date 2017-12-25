import { connect } from 'react-redux';
import GennyNotification from './GennyNotification.js';

function mapStateToProps(state) {
  return { notifications: state.notification.data }
}

export default connect( mapStateToProps )( GennyNotification );
