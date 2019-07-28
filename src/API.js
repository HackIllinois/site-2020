const BASE_URL = 'https://api.hackillinois.org';

export function authenticate(provider, to) {
  to = `${BASE_URL}/auth/${provider}/?redirect_uri=${to}`;
  window.location.replace(to);
}

export function getToken(code) {
  return fetch(`${BASE_URL}/auth/code/github/`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({code})
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw Error(res.statusText);
  }).then(data => {
    return data.token;
  });
}
