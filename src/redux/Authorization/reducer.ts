import { Reducer } from 'redux';
import * as actions from './type';
import { updateObject } from '../../utilities/updateObject';

export type AuthorizationState = {
    accessToken: string | null;
  };
  
  const initialState: AuthorizationState = {
    accessToken: null,
  };


  const AuthorizationReducer: Reducer<AuthorizationState, actions.AuthorizationActionTypes> = (
    state = initialState,
    action: actions.AuthorizationActionTypes
  ) => {
    switch (action.type) {
      case actions.SET_ACCESS_TOKEN:
        return updateObject(state, { accessToken: action.payload });
      default:
        return state;
    }
  };
  
  export default AuthorizationReducer;