// export { default } from './Header.js';

import { connect } from 'react-redux';
import Header from './Header.js';

function mapStateToProps(state) {
  return { baseEntity: state.baseEntity }
}

export default connect( mapStateToProps, null )( Header );
