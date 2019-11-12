const API = 'https://api.hackillinois.org';

function headers() {
  return {
    Authorization: sessionStorage.getItem('token'),
    'Content-Type': 'application/json',
  };
}

function request(method, endpoint, body) {
  return fetch(endpoint, {
    method,
    headers: headers(),
    body: JSON.stringify(body),
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw Error(res);
  });
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

export function uploadResume(resume) {
  return request('GET', '/upload/resume/upload/')
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw Error(res);
    })
    .then(res => res.resume)
    .then(url => fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/pdf' },
        body: resume,
      }))
    .then(res => {
      if (res.ok) {
        return res;
      }
      throw Error(res);
    });
}

export function apply(isEditing, application) {
  const method = isEditing ? 'PUT' : 'POST';
  return request(method, '/registration/attendee/', application);
}
