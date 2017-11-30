import React from 'react';
import Container from './Container.js';
import { shallow } from 'enzyme';
import {Label} from '../../native-components';


test( 'Children rendering correctly', () => {
  const component = shallow(
    <Container>
      <Label> Child </Label>
    </Container>
  );
  expect( component.text()).toEqual( 'Child' );
});
