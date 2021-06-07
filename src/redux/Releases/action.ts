import * as actions from './type';

export const setNewReleases = (releases?: any[] | null): actions.ReleasesActionTypes => {
    return {
      type: actions.SET_NEW_RELEASES,
      payload: releases,
    };
  };

export const setFeatured = (featured?: any[] | null): actions.ReleasesActionTypes => {
  return {
    type: actions.SET_FEATURED,
    payload: featured,
  };
};


export const setCategories = (featured?: any[] | null): actions.ReleasesActionTypes => {
  return {
    type: actions.SET_CATEGORIES,
    payload: featured,
  };
};