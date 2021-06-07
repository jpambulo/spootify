import * as actions from './type';

export const setAccessToken = (token?: string | null): actions.AuthorizationActionTypes => {
    return {
      type: actions.SET_ACCESS_TOKEN,
      payload: token,
    };
  };