import { connect } from 'react-redux';
const ColorPicker = null;

function mapStateToProps(state) {
  return { layouts: state.layouts }
}

export default ColorPicker ? connect( mapStateToProps, null )( ColorPicker ) : null;
