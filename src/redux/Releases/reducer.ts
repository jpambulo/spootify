import { Reducer } from 'redux';
import * as actions from './type';
import { updateObject } from '../../utilities/updateObject';

export type ReleasesState = {
    new: any[] | null;
    featured: any[] | null;
    categories: any[] | null;
  };
  
  const initialState: ReleasesState = {
    new: null,
    featured: null,
    categories: null
  };


  const ReleasesReducer: Reducer<ReleasesState, actions.ReleasesActionTypes> = (
    state = initialState,
    action: actions.ReleasesActionTypes
  ) => {
    switch (action.type) {
      case actions.SET_NEW_RELEASES:
        return updateObject(state, { new: action.payload });
      case actions.SET_FEATURED:
        return updateObject(state, { featured: action.payload });
      case actions.SET_CATEGORIES:
        return updateObject(state, { categories: action.payload });
      default:
        return state;
    }
  };
  
  export default ReleasesReducer;