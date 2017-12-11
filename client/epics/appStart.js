import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { receiveKeycloakConfig, errorReceiveKeycloakConfig } from 'client/views/actions/keycloak.actions.js';
import { APP_START } from 'client/constants/';
import { GennyBridge } from 'client/utils/genny';

const appStart = action$ => {
  return action$
    .ofType( APP_START )
    .mergeMap(() => {

      // GennyBridge.getKeycloakConfig().map( receiveKeycloakConfig ).catch( error => Observable.of( errorReceiveKeycloakConfig( error )))
      return Observable.of(receiveKeycloakConfig({"response" : {  
        "realm":"genny",
        "auth-server-url":"http://10.1.120.182:8180/auth",
        "ssl-required":"none",
        "resource":"genny",
        "credentials":{  
           "secret":"056b73c1-7078-411d-80ec-87d41c55c3b4"
        },
        "policy-enforcer":{  
     
        },
        "vertx_url":"http://10.1.120.182:8088/frontend",
        "url":"http://10.1.120.182:8180/auth",
        "clientId":"genny"
      }}));
    });
};

export default appStart;

