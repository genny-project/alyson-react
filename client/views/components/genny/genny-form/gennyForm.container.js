import { connect } from 'react-redux';
import GennyForm from './GennyForm.js';

function mapStateToProps(state) {
  return {
      baseEntity: state.baseEntity,
      asks: state.ask.data
  }
}

export default connect( mapStateToProps, null )( GennyForm );
