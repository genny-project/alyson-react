import React, { Component } from 'react';
import { object } from 'prop-types';
import { ComponentCollection } from '../component-collection';
import mustache from 'mustache';
import hash from 'hash-sum';

/* Define all the built in html tags */
const htmlTags = [ 'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio',
  'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas',
  'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del',
  'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset',
  'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins',
  'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'math',
  'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol',
  'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q',
  'rb', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 'section', 'select',
  'slot', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup',
  'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead',
  'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr' ];

class JSONLoader extends Component {
  static propTypes = {
    layout: object,
    componentCollection: object,
    context: object,
  }

  static defaultProps = {
    layout: {},
    componentCollection: new ComponentCollection(),
  }

  renderChildren( data ) {
    if ( !data ) {
      return null;
    }

    if ( typeof data == 'object' ) {
      const children = [];

      data.forEach(( d, i ) => {
        children.push( this.renderComponent( Object.keys(d)[0], d[Object.keys(d)[0]], i ) );
      });

      if ( children.length === 0 ) {
        return null;
      }

      if ( children.length === 1 ) {
        return children[0];
      }

      return children;
    }

    if ( typeof data != object ) {
      return data;
    }
  }

  renderComponent( type, data, index = 0 ) {
    /* Get the data */
    const props = {
      key: hash({ type, data, index }),
      ...data
    };

    const children = data.children;

    /* Get the component collection */
    const { componentCollection } = this.props;

    /* Get the component from the component collection */
    const component = htmlTags.indexOf( type ) > -1 ? type : componentCollection.get( type );

    /* Show a warning if the component doesn't exist in the component collection */
    if ( !component ) {
      console.warn( `Could not find component with name ${type}` );
      return null;
    }

    props.screenSize = this.props.screenSize;

    /* Create the element */
    return React.createElement( component, props, this.renderChildren( children ));
  }

  render() {
    const { layout, context } = this.props;

    return (
      <div>
        {this.renderChildren( JSON.parse(mustache.render(JSON.stringify(layout.layout), context))) }
      </div>
    );
  }
}

export default JSONLoader;
