'use strict';

// support ENV
require('dotenv').config({ silent: true });

// Defaults
const host = process.env.PORT ? '0.0.0.0' : '127.0.0.1';
const port = process.env.PORT || 8080;

const httpProxy = require('http-proxy');

// Parse CLI argument options
const args = require('minimist')(process.argv.slice(2));
// console.log(args);

// extract important args
const env = args.env || 'prod';

// Some informational startup logging
console.log('[env]', env);
console.log('[proxy]', getProxyTarget(env));

// Create server
httpProxy
  .createServer({
    originWhitelist: [], // Allow all origins
    headers: getHeaders(), // Get headers
    secure: false, // We do not want to validate SSL certificates
    target: getProxyTarget(env), // Proxy target
    prependPath: true,
    followRedirects: false, // We want all redirects to return to the client (especially for signing),
    changeOrigin: true, // Change origin
  })
  .on('proxyReq', function (proxyReq, req, res, options) {
    // For debugging
    // proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
    // console.log('RAW Request from the referer', req.headers.referer);
    // console.log('RAW Request to url', req.url);
  })
  .on('proxyRes', function (proxyRes, req, res) {
    // Debugging
    // console.log('RAW Request from the host', JSON.stringify(req.headers, true, 2));
    if (proxyRes.headers.location) {
      // Rewrite `location` header required for signing
      proxyRes.headers.location = proxyRes.headers.location.replace(getProxyTarget(env), '');
    }
    // Debugging
    // console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
  })
  .on('error', function (err, req, res) {
    // Handle error instead of crashing the proxy
    console.log(err.message);
    res.writeHead(500, {
      'Content-Type': 'text/plain',
    });

    res.end('[Proxy] Something went wrong.');
  })
  .listen(port, host);

function getHeaders() {
  const accessToken = process.env.ACCESS_TOKEN;
  if (accessToken == undefined) return;

  return {
    Authorization: 'Bearer ' + accessToken,
  };
}

function getProxyTarget(env) {
  switch (env) {
    case 'local':
      return 'http://127.0.0.1:8090/';
    case 'prod':
      return process.env.API_URL;
    default:
      throw `Unsupported environment: ${env}`;
  }
}
