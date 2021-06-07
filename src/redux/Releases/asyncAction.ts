import * as Action from './action';
import axios from 'axios';

import { RootState } from '../../shared/store';
import api from '../../config';

export const getNewReleasesAsync = () => {
    return (dispatch: any, getState: () => RootState) => {
      const { accessToken } = getState().authorization; 

      return axios({
        url: `${api.baseUrl}/browse/new-releases`,
        method: "get",
        headers: {
          Authorization: "Bearer " + accessToken,
        }
      }).then((resp) => {
        dispatch(Action.setNewReleases(resp.data.albums.items));
      });
  };
}

export const getFeaturedPlaylistAsync = () => {
  return (dispatch: any, getState: () => RootState) => {
    const { accessToken } = getState().authorization; 

    return axios({
      url: `${api.baseUrl}/browse/featured-playlists`,
      method: "get",
      headers: {
        Authorization: "Bearer " + accessToken,
      }
    }).then((resp) => {
      dispatch(Action.setFeatured(resp.data.playlists.items));
    });
  };
}

export const getCategoriesAsync = () => {
  return (dispatch: any, getState: () => RootState) => {
    const { accessToken } = getState().authorization; 

    return axios({
      url: `${api.baseUrl}/browse/categories`,
      method: "get",
      headers: {
        Authorization: "Bearer " + accessToken,
      }
    }).then((resp) => {
      dispatch(Action.setCategories(resp.data.categories.items));
    });
  };
}