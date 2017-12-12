// import './bucketView.scss';
import React, { Component } from 'react';
import { array, object, any } from 'prop-types';
import {Div} from 'nativeAndWeb/native-code/components/native-components';

class BucketView extends Component {
  static propTypes = {
    buckets: array,
    style: object,
    children: any,
  };

  renderBucket( i ) {
    const { children } = this.props;
    let childs = React.Children.toArray(children);
    const bucketChildren = childs.filter(child => {
      return child.props.answerGroup.index != undefined && child.props.answerGroup.index == i;
    });

    return (
      <Div>
        {bucketChildren}
      </Div>
    );
  }

  render() {
    const { buckets, style } = this.props;

    return (
      <Div>
        {buckets.map(( bucket, i ) => (
          <Div>
            <Div>
              {bucket.title}
            </Div>
            <Div>
              {this.renderBucket( i )}
            </Div>
          </Div>
        ))}
      </Div>
    );
  }
}

export default BucketView;
