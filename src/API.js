const BASE_URL = 'https://api.hackillinois.org';

function post(path, body) {
  return fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({body})
  });
}

function redirect(path) {
  window.location.replace(`${BASE_URL}${path}`);
}

export function getOAuthCode(provider, redirectURI) {
  redirect(`/auth/${provider}/?redirect_uri=${redirectURI}`);
}

export function getToken(provider, code, redirectURI) {
  return post(`/auth/code/${provider}/?redirect_uri=${redirectURI}`, code);
}
