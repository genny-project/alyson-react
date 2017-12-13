import { LOGOUT, ACCOUNTS } from 'client/constants';

export const CMD_LOGOUT = () => ({
  type: LOGOUT,
});

export const CMD_ACCOUNTS = () => ({
  type: ACCOUNTS,
});

export default {
  CMD_LOGOUT,
  CMD_ACCOUNTS,
};
