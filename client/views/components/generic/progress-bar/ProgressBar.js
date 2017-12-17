// import './progressBar.scss';
import React, { Component } from 'react';
import { string, array, number } from 'prop-types';
import { IconSmall } from '../';
import { Div, Span } from 'react-tags-html/src';

class ProgressBar extends Component {

  static defaultProps = {
    className: '',
    progressCurrent: 0,
    progressTotal: 0,
    type: 0,
  }

  static propTypes = {
    className: string,
    progressCurrent: number,
    progressTotal: number,
    type: number
  }

  render() {
    const { className, progressCurrent, progressTotal, type } = this.props;
    const progressPercent = progressCurrent / progressTotal * 100;
    return (
      <Div className={`progress-bar ${className} ${type === 1 ? 'one' : type === 2 ? 'two' : ''} `}>
        { type === 1 ? (
          <Div className="node-container one">
            <Div className="node start" />
            {
              Array.from({ length: progressTotal }, (v, k) => <Div className={`node ${ k + 1 < progressCurrent ? "complete" : k + 1 > progressCurrent ? "incomplete" : "current" } `} key={ k } ><Div className="" /></Div>)
            }
          </Div>
        ) : null }

        { type === 2 ? (
          <Div className="node-container two">
            <Div className="end-points">
              <Span> icon exposure_zero </Span>
              <Span >icon place </Span>
            </Div>
            <Div className="mid-points">
              {
                Array.from({ length: 11 }, (v, k) => <Span> icon brightness_1 </Span>)
              }
            </Div>
            <Div className="current-point">
              <Div className="current-point-spacer" style={{ width: `calc(${progressPercent + '%'} - ( 24px / 100 * ${progressPercent}  )` }} />
              <Span name="local_shipping" > </Span>
            </Div>
          </Div>
        ) : null }

        <Div className="progress-bar-container">
          <Div className="progress-bar-fill" style={{ width: `${progressPercent + '%'}` }} />
          <Div className="progress-bar-empty" />
        </Div>
      </Div>
    );
  }
}

export default ProgressBar;
