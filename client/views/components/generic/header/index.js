
import { connect } from 'react-redux';
import Header from './Header';

function mapStateToProps(state) {
  return { baseEntity: state.baseEntity }
}

export default connect( mapStateToProps, null )( Header );
