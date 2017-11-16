import { connect } from 'react-redux';
import GennyDropdown from './GennyDropdown.js';

function mapStateToProps(state) {
  return { openedDropdown: state.app.openedDropdown }
}

function mapDispatchToProps(dispatch) {
    return({
        sendTheAlert: () => {dispatch(ALERT_ACTION)}
    })
}

export default connect( mapStateToProps, mapDispatchToProps )( GennyDropdown );
