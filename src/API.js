const API = 'https://api.hackillinois.org';

export function authenticate(provider, to) {
  let token = process.env.REACT_APP_TOKEN;
  if (token) {
    sessionStorage.setItem('token', token);
  }

  token = sessionStorage.getItem('token');
  if (!token) {
    to = `${process.env.REACT_APP_URL}/auth/?to=${to}`;
    to = `${API}/auth/${provider}/?redirect_uri=${to}`;
    window.location.replace(to);
  }
}

export function getToken(code) {
  return request('POST', '/auth/code/github/', {code});
}

export function getRoles() {
  return request('GET', '/auth/roles/');
}

export function getApplication() {
  return request('GET', '/registration/attendee/');
}

export function apply(method, application) {
  return request(method, '/registration/attendee/', application);
}

function request(method, endpoint, body) {
  return fetch(API + endpoint, {
    method: method,
    headers: headers(),
    body: JSON.stringify(body)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw Error(res);
  }).then(obj => obj);
}

function headers() {
  return {
    'Authorization': sessionStorage.getItem('token'),
    'Content-Type': 'application/json'
  }
}
