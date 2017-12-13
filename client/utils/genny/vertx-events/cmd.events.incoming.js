import { GPS_CMD } from 'client/constants';

export const CMD_GPS = message => ({
  type: GPS_CMD,
  payload: message,
});

export default {
    CMD_GPS,
};
