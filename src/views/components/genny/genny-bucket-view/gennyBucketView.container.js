import { connect } from 'react-redux';
import GennyBucketView from './GennyBucketView.js';

function mapStateToProps(state) {
  return { baseEntity: state.baseEntity, sublayout: state.layouts.sublayout }
}

export default connect( mapStateToProps, null )( GennyBucketView );
