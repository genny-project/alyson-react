import { connect } from 'react-redux';
import GennyModal from './GennyModal.js';

function mapStateToProps(state) {
  return { sublayout: state.layouts.sublayout }
}

export default connect( mapStateToProps, null )( GennyModal );
