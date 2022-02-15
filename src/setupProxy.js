const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/users-api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      pathRewrite(path, req) {
        return path.replace('/users-api', '/api');
      },
    })
  );

  app.use(
    '/articles-api',
    createProxyMiddleware({
      target: 'http://localhost:8082',
      pathRewrite(path, req) {
        return path.replace('/articles-api', '/api');
      },
    })
  );
};
