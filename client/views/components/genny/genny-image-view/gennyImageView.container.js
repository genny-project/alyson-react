import { connect } from 'react-redux';
import GennyImageView from './GennyImageView.js';

function mapStateToProps(state) {
  return { baseEntity: state.baseEntity }
}

export default connect( mapStateToProps, null )( GennyImageView );
