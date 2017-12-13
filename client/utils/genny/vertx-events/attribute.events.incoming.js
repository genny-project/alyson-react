import { ATTRIBUTE as ATTRIBUTE_DATA } from 'client/constants';

export const Attribute = message => ({
  type: ATTRIBUTE_DATA,
  payload: message,
});

export default {
  Attribute,
};
