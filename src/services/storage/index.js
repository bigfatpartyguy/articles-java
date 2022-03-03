const AUTH_TOKEN_KEY = 'articles-auth';

export const saveToken = token =>
  window.localStorage.setItem(AUTH_TOKEN_KEY, token);

export const getToken = () => window.localStorage.getItem(AUTH_TOKEN_KEY);

export const clearToken = () => {
  window.localStorage.removeItem(AUTH_TOKEN_KEY);
};
