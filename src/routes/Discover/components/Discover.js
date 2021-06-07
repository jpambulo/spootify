import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

import { Button } from 'react-bootstrap';
import { isEmpty } from 'lodash';

import { connect } from 'react-redux';
import { getNewReleasesAsync, getFeaturedPlaylistAsync, getCategoriesAsync } from '../../../redux/Releases/asyncAction';
import { getAuthorizationUrl, getTokenValue } from '../../../utilities/functions';
import { setAccessToken } from '../../../redux/Authorization/action';

class DiscoverComponent extends Component {
  componentDidMount() {
    const { setAccessToken } = this.props;
    if (!isEmpty(window.location.href)) {
      const token = getTokenValue(window.location.href);
      setAccessToken(token);
    }
  
    this.initialize(this.props);
  }

  componentDidUpdate() {
    this.initialize(this.props);
  }

  initialize = (props) => {
    const { newReleases, getNewReleases, featured, getFeaturedPlaylist, categories, getCategories } = props;
    if (!newReleases) {
      getNewReleases();
    }
    if (!featured) {
      getFeaturedPlaylist();
    }
    if (!categories) {
      getCategories();
    }
  }

  handleLogin = () => {
    window.location = getAuthorizationUrl();
  };

  render() {
    const { accessToken, newReleases, playlists, categories } = this.props;

    if (!accessToken) {
      return (
        <div>
          <Button variant="info" type="submit" onClick={this.handleLogin}>
            Login to spotify
          </Button>
        </div>
      );
    }

    if (!newReleases || !playlists || !categories){
      return null;
    }
    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}

const mapState = (state) => ({
  accessToken: state.authorization.accessToken,
  newReleases: state.releases.new,
  playlists: state.releases.featured,
  categories: state.releases.categories
});

const mapDispatch = (dispatch) => {
  return {
    getNewReleases: () => dispatch(getNewReleasesAsync()),
    getFeaturedPlaylist: () => dispatch(getFeaturedPlaylistAsync()),
    getCategories: () => dispatch(getCategoriesAsync()),
    setAccessToken: (token) => dispatch(setAccessToken(token)),
  };
};

// eslint-disable-next-line no-undef
export default connect(mapState, mapDispatch)(DiscoverComponent);