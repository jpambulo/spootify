export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';

interface SetAccessToken {
    type: typeof SET_ACCESS_TOKEN;
    payload: any;
}

export type AuthorizationActionTypes = SetAccessToken;