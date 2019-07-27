const BASE_URL = 'https://api.hackillinois.org';

function redirect(path) {
  window.location.replace(`${BASE_URL}${path}`);
}

function post(path, body) {
  console.log(`POST ${path} ${body}`);
  return fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({body})
  });
}

export function getOAuthCode(provider, redirectURI) {
  redirectURI = encodeURIComponent(redirectURI);
  redirect(`/auth/${provider}/?redirect_uri=${redirectURI}`);
}

export function getToken(provider, code) {
  return post(`/auth/code/${provider}/`, code);
}
