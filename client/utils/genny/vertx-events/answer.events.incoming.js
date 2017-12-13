import { ANSWER as ANSWER_DATA } from 'client/constants';

export const Answer = message => ({
  type: ANSWER_DATA,
  payload: message,
});

export default {
  Answer,
};
