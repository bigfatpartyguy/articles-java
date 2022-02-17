import {getToken, clearToken} from '../storage';

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

export const get = (url, data, headers) => {
  return fetch(url, {
    headers: formatTokenHeaders(headers),
  }).then(response => {
    if (response.status === 401) {
      clearToken();
      window.location.assign('/');
    } else {
      return response.json();
    }
  });
};

export const post = (url, payload) => {
  return fetch(url, {
    method: 'POST',
    headers: formatTokenHeaders(),
    body: JSON.stringify(payload),
  }).then(response => {
    if (response.status === 401) {
      clearToken();
      window.location.assign('/');
    } else {
      return response.json();
    }
  });
};
