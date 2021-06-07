import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import AuthorizarionReducer from '../redux/Authorization/reducer';
import ReleasesReducer from '../redux/Releases/reducer';

export const localStateId = 'spootify-stored-state';

const persistedState = ({ getState }: any) => {
  return (next: any) => (action: any) => {
    const result = next(action);
    localStorage.setItem(localStateId, JSON.stringify(getState()));
    return result;
  };
};
const finalMiddleware = composeWithDevTools(applyMiddleware(persistedState, thunk));

const reHydrateStore = () => {
  const localReducer = localStorage.getItem(localStateId);
  if (localReducer !== null) {
    return JSON.parse(localReducer);
  }
};

export const appReducer = combineReducers({
  authorization: AuthorizarionReducer,
  releases: ReleasesReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, reHydrateStore(), finalMiddleware);

export default store;
