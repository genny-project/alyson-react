import { connect } from 'react-redux';
import App from './App';
import { appStart } from 'client/views/actions/app.actions';
import { authLoggedIn } from 'client/views/actions/keycloak.actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  keycloak: state.keycloak,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ appStart, authLoggedIn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(App);
