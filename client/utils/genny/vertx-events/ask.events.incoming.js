import { ASK as ASK_DATA } from 'client/constants';

export const Ask = message => ({
  type: ASK_DATA,
  payload: message,
});

export default {
  Ask,
};
