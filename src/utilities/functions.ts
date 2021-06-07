
import api from '../config';

export const getAuthorizationUrl = () => {  
    return `${api.authorizeUrl}?client_id=${api.clientId}&client_secret=${api.clientSecret}&redirect_uri=${api.redirectUri}&response_type=token&show_dialog=true`;;
  };

export const getTokenValue = (url: string) => {
  const data = url.slice(1).split('&');
  const tokenData = data[0].split('=');
  return tokenData[1];
};
