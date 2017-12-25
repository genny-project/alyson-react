import { LAYOUT_CHANGE, CMD_VIEW as VIEW_CHANGE, SUB_LAYOUT as SUBLAYOUT_CODE, SUBLAYOUT_CHANGE } from '../../../constants';

export const CMD_LAYOUT = message => ({
  type: LAYOUT_CHANGE,
  payload: message,
});

export const CMD_VIEW = message => ({
  type: VIEW_CHANGE,
  payload: message,
});

export const SUB_LAYOUT = message => ({
  type: SUBLAYOUT_CODE,
  payload: message,
});

export const CMD_SUBLAYOUT = message => ({
  type: SUBLAYOUT_CHANGE,
  payload: message,
});

export default {
  CMD_LAYOUT,
  CMD_VIEW,
  CMD_SUBLAYOUT,
  SUB_LAYOUT,
};