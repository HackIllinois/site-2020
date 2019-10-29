const API = 'https://api.hackillinois.org';

function headers() {
  return {
    Authorization: sessionStorage.getItem('token'),
    'Content-Type': 'application/json',
  };
}

function request(method, endpoint, body) {
  return fetch(API + endpoint, {
    method,
    headers: headers(),
    body: JSON.stringify(body),
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw Error(res);
  }).then(obj => obj);
}


export function isAuthenticated() {
  return sessionStorage.getItem('token');
}

export function authenticate(to) {
  if (process.env.REACT_APP_TOKEN) {
    sessionStorage.setItem('token', process.env.REACT_APP_TOKEN);
  } else {
    to = `${process.env.REACT_APP_URL}/auth/?to=${to}`;
    to = `${API}/auth/github/?redirect_uri=${to}`;
  }
  window.location.replace(to);
}

export function getToken(code) {
  return request('POST', '/auth/code/github/', { code });
}

export function getRoles() {
  return request('GET', '/auth/roles/')
    .then(res => res.roles);
}

export function getApplication() {
  return request('GET', '/registration/attendee/');
}

export function apply(isEditing, application) {
  const method = isEditing ? 'PUT' : 'POST';
  return request(method, '/registration/attendee/', application);
}
