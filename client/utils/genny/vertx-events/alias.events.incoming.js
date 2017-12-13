import { ALIAS as ALIAS_DATA } from 'client/constants';

export const Alias = message => ({
  type: ALIAS_DATA,
  payload: message,
});

export default {
  Alias,
};
