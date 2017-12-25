import { connect } from 'react-redux';
import LayoutLoader from './LayoutLoader.js';

const mapStateToProps = state => ({
  layouts: state.layouts,
  baseEntity: state.baseEntity,
});

export default connect( mapStateToProps, null )( LayoutLoader );
