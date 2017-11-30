// import './card.scss';
import React, { Component } from 'react';
import { string, array, object } from 'prop-types';
import { IconSmall, ProgressBar } from '../';
import { TransitionGroup } from 'react-transition-group';
import {Div} from '../../native-components';
import {Label} from '../../native-components';
import {Button} from 'react-native';
class Card extends Component {

  static defaultProps = {
    className: '',
    answerGroup: {}
  }

  static propTypes = {
    className: string,
    answerGroup: object,
  }

  state = {
    isVisible: true,
    showProgress: this.props.answerGroup.showProgress ? this.props.answerGroup.showProgress : false,
    pageCount: this.props.answerGroup.pageCount ? this.props.answerGroup.pageCount : 1,
    pageCurrent: this.props.answerGroup.pageCurrent ? this.props.answerGroup.pageCurrent : 1,
    data: this.props.answerGroup.data ? this.props.answerGroup.data : [],
    textOne: this.props.answerGroup.textOne ? this.props.answerGroup.textOne : '',
    textTwo: this.props.answerGroup.textTwo ? this.props.answerGroup.textTwo : '',
    buttons: this.props.answerGroup.buttons ? this.props.answerGroup.buttons : [],
    level: this.props.answerGroup.level ? this.props.answerGroup.level : '',
  }

  handleClick = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  }

  SlideContent() {
    const { answerGroup } = this.props;
    const { data, buttons, level } = this.state;

    return (
      <Div>
      <Div>
        {
          data.map(d => {
            return <Div>
              <span>{d.value}</span>
            </Div>;
          })
        }
        </Div>
        <Div>
          {
            buttons.map(b => 
              <Button title = {b.value} />
            )
          }
        </Div>
      </Div>
    );

    // const FadeTransition = (props) => (
    //   <Transition {...props} timeout={{ enter: 0, exit: 150 }} />
    // );

    // return (
    //   <FadeTransition>
    //     { 
    //       (status) => {
    //         console.log(status);
    //         if (status === 'exited') {
    //           return null
    //         }
    //         return (
    //           <div className={`card-collapse fade fade-${status}`}>
    //             {
    //               data.map(d => {
    //                 return <div className={`card-data ${d.name}`} key={d.name}>
    //                   <IconSmall name={d.icon}/>
    //                   <span>{d.value}</span>
    //                 </div>;
    //               })
    //             }
    //             <div className="card-buttons">
    //               {
    //                 buttons.map(b => {
    //                   return <Button className={b.class} key={b.name}>
    //                     <IconSmall name={b.icon}/>
    //                     <span>{b.value}</span>
    //                   </Button>;
    //                 })
    //               }
    //             </div>
    //           </div>
    //         );
    //       }
    //     }
    //   </FadeTransition>
    // );
  }

  render() {
    const { className, answerGroup } = this.props;
    const { textOne, textTwo, level, showProgress, pageCurrent, pageCount, isVisible, data, buttons } = this.state;
    const collapseContent = isVisible ? this.SlideContent() : '';
    const collapseArrow = isVisible ? 'expand_less' : 'expand_more';

    return (
      <Div>
        <Div>
          <Label>{textOne} </Label>
          <Label> {textTwo} </Label>
        </Div>
        <Div>
          <Label>icon goes here</Label>
        </Div>
      </Div>
    );
  }
}

export default Card;
