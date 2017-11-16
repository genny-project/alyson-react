import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home.js';

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({}, dispatch );
}

export default connect( null, mapDispatchToProps )( Home );
