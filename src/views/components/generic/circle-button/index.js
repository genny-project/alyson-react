import { connect } from 'react-redux';
import CircleButton from './CircleButton.js';

function mapStateToProps(state) {
  return { layouts: state.layouts }
}

export default connect( mapStateToProps, null )( CircleButton );
