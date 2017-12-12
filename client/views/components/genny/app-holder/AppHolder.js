import React, { Component } from 'react';
import { Sidebar, Header, Footer, IconSmall } from '../../';
import { bool, any } from 'prop-types';
import { Div } from 'nativeAndWeb/native-code/components/native-components';

class AppHolder extends Component {

    static defaultProps = {
    }

    static propTypes = {
      children: any,
    };

    state = {
        sidebarShrink: false
      }

    handleSidebarSize = () => {
        this.setState(prevState => ({
          sidebarShrink: !prevState.sidebarShrink
        }));
    }

    render() {
        const { children, sidebar, header, footer } = this.props;
        const { sidebarShrink } = this.state;
        const sidebarChildren = children[0];
        const contentChildren = children.slice(1);

        let renderSidebar;
        if ( sidebar ) {
            const sidebarWidth = sidebarShrink ? "50px" : "300px";
            renderSidebar = <Div className="app-sidebar" style={{ width: sidebarWidth }} >
                <IconSmall className="app-sidebar-toggle" name="menu" onClick={this.handleSidebarSize}/>
                <Sidebar {...sidebar} >{sidebarChildren}</Sidebar>
            </Div>;
        }

        let renderHeader;
        if ( header ) {
            renderHeader = <Div className="app-header"><Header {...header} /></Div>;
        }

        let renderFooter;
        if ( footer ) {
            renderFooter = <Div className="app-footer"><Footer {...footer} /></Div>;
        }

        return (
          <Div className="app-holder">
            {renderSidebar}
            <Div className="app-main">
              {renderHeader}
              <Div className="app-content">{contentChildren}</Div>

              {renderFooter}
          </Div>
      </Div>
        );
    }
}

export default AppHolder;
