import { connect } from 'react-redux';
import Footer from './Footer';

function mapStateToProps(state) {
  return { baseEntity: state.baseEntity }
}

export default connect( mapStateToProps, null )( Footer );
