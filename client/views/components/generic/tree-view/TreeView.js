// import './treeView.scss';
import React, { Component } from 'react';
import { object, array, func } from 'prop-types';
import { IconSmall, SubmitStatusIcon } from '../';
import {BaseEntity} from 'client/utils/genny';
import { Div } from 'client/views/components/native-components';

class TreeView extends Component {
  static propTypes = {
    style: object,
    items: array,
    data: object,
  };
  
  onClick = (item) => (event) => {
    event.stopPropagation();
    event.preventDefault();
    this.props.onClick(item);
    return false;
  }

  sendSelectMsg = (item) => {
    this.sendData('TV_SELECT', {
      code: 'TV1',
      value: item.code
    }, item.code);
    console.log(item.code, 'Log item form sendSelectMsg function');
  }

  sendData = (event, data) => {
    console.log('send', data);
    GennyBridge.sendTVEvent(event, data);
  }

  renderList = (items) => {
    let layout = [];
    items.map((item, i) => {
      if (item.children && item.open) {
        layout.push(
          <Div key={i}>
            <Div>
              <Div onClick={() => { this.sendSelectMsg(item); }}>
                { item.icon ? <IconSmall name={item.icon} /> : null }
                {item.name}
              </Div>
              <IconSmall onClick={this.onClick(item)} name="expand_more" />
            </Div>
            <Div className="child" style={{ marginLeft: 10 }}>
              {item.children.length ? this.renderList(item.children) : <SubmitStatusIcon status="sending" />}
            </Div>
          </Div>);
      }
      else {
        layout.push(
          <Div key={i}>
            <Div>
              <Div onClick={() => { this.sendSelectMsg(item); }}>
                { item.icon ? <IconSmall name={item.icon} /> : null }
                {item && item.name}{console.log(item, 'item.sendSelectMsg from chevron right')}
              </Div>
              <IconSmall onClick={this.onClick(item)} name="chevron_right" />
            </Div>
          </Div>);
      }
    });
    return layout;
  }


  render() {
    const { items, baseEntity } = this.props;
    return (
      <Div className="treeview">

        {/* <BaseEntity>
          {
            (query) => {
              return <span>{query.getChildrenOf('GRP_DASHBOARD')}</span>;
            }
          }
        </BaseEntity> */}

        <Div className="parent">
          {this.renderList(items)}
        </Div>

      </Div>
    );
  }
}

export default TreeView;