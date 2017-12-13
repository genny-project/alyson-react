import { combineReducers } from 'redux';
import keycloak from 'client/reducers/keycloak.reducer';
import layouts from 'client/reducers/layouts.reducer';
import baseEntity from 'client/reducers/baseEntity.reducer';
import ask from 'client/reducers/ask.reducer';
import alias from 'client/reducers/alias.reducer';
import notification from 'client/reducers/notification.reducer';
import app from 'client/reducers/app.reducer';

export default combineReducers({
  layouts,
  keycloak,
  baseEntity,
  ask,
  alias,
  notification,
  app
});
