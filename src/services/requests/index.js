import {getToken, clearToken} from '../storage';
import {ARTICLES, SIGNIN, CATEGORIES} from './urls';

const formatTokenHeaders = headers => {
  const token = getToken();
  const finalHeaders = {
    ...headers,
    'content-type': 'application/json',
  };

  if (!token) {
    return finalHeaders;
  }

  return {
    ...finalHeaders,
    authorization: `Bearer ${token}`,
  };
};

export const post = (url, payload) => {
  return fetch(url, {
    method: 'POST',
    headers: formatTokenHeaders(),
    body: JSON.stringify(payload),
  }).then(response => {
    if (response.status === 401) {
      console.log('clearing token');
      clearToken();
      window.location.assign('/');
    } else {
      return response.json();
    }
  });
};
