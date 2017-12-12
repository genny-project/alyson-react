// import './footer.scss';
import React, { Component }  from 'react';
import { string, any, object } from 'prop-types';
import { Image } from 'react-native';
import { ImageView, Label } from '../';
import {Div} from 'nativeAndWeb/native-code/components/native-components';


class Footer extends Component {
  static defaultProps = {
    className: '',
    style: object,
  }

  static propTypes = {
    className: string,
  }

  render() {
    const { className, version, poweredBy, style } = this.props;

    const componentStyle = {
      ...style,
    };

    return (
      	<Div>
      		{ poweredBy ?
            <Div className="powered-by">
              <Label>powered by: </Label>
              { poweredBy.img ? <ImageView source={poweredBy.img} /> : null }
              { poweredBy.caption ? <Label>{poweredBy.caption}</Label> : null }
            </Div>
          : null }
    	</Div>
    );
  }
}

export default Footer;
