// export { default } from './Footer.js';

import { connect } from 'react-redux';
import Footer from './Footer.js';

function mapStateToProps(state) {
  return { baseEntity: state.baseEntity }
}

export default connect( mapStateToProps, null )( Footer );
