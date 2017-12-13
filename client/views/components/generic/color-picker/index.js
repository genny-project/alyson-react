import { connect } from 'react-redux';
import ColorPicker from './ColorPicker';

function mapStateToProps(state) {
  return { layouts: state.layouts }
}

export default connect( mapStateToProps, null )( ColorPicker );
