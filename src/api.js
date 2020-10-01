const API = 'https://api.hackillinois.org';

function request(method, endpoint, body) {
  return fetch(API + endpoint, {
    method,
    headers: {
      Authorization: sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw Error(res);
  });
}

export function getEvents() {
  return new Promise(resolve => {
    const res = { events: [{ id: '0af9ce8c201688e49efb5efe65dcdad3', name: 'Check-in', description: 'Make sure to check into the event to be able to hack, as well as have access to the food and prizes at HackIllinois!', startTime: 1582927200, endTime: 1582941600, locations: [{ description: 'DCL Atrium', tags: ['DCL'], latitude: 40.113062, longitude: -88.226563 }], sponsor: '', eventType: 'OTHER' }, { id: 'a6ede3647b34ca2c7b79f42f6a9cda22', name: 'Company Expo', description: 'Our amazing HackIllinois sponsors and recuiters will be joining us in the Siebel Atrium. Give them a visit to learn more about what they do and find new opportunities!\n\nCompany List: Hudson River Trading, Collins Aerospace, Checkbook.io, Citadel, Facebook, Schlumberger, Mirus Research, Google, Capital One, IMC Financial, Caterpillar Data Innovation Lab, Optum, BP, John Deere, Orchid Labs, Grainger, AbbVie', startTime: 1582927200, endTime: 1582952400, locations: [{ description: 'Siebel Atrium', tags: ['SIEBEL1'], latitude: 40.113812, longitude: -88.224937 }], sponsor: '', eventType: 'OTHER' }, { id: '6df643ec83bf1a7394e83cceb07e6791', name: 'Friday Dinner', description: 'Chick-fil-A and Signature Grill', startTime: 1582934400, endTime: 1582941600, locations: [{ description: 'Siebel Basement \u0026 2nd Floor', tags: ['SIEBEL0', 'SIEBEL2'], latitude: 40.113812, longitude: -88.224937 }, { description: 'ECEB 1st \u0026 3rd Floor', tags: ['ECEB1', 'ECEB3'], latitude: 40.114937, longitude: -88.228063 }], sponsor: 'Optum', eventType: 'MEAL' }, { id: 'e9c09192cf7c64dd6304a1fa5d839f6f', name: 'Opening Ceremony', description: 'Info. Info! INFO! We welcome you to the event and tell you more about the prizes, projects, and possibilities!', startTime: 1582941600, endTime: 1582948800, locations: [{ description: 'Kenney Gym', tags: ['KENNEY'], latitude: 40.113062, longitude: -88.228438 }], sponsor: '', eventType: 'OTHER' }, { id: '98d1bea404022cf7de9077097721ef17', name: 'Midnight Meal', description: 'Insomnia Cookies', startTime: 1582956000, endTime: 1582963200, locations: [{ description: 'Siebel Basement \u0026 2nd Floor', tags: ['SIEBEL0', 'SIEBEL2'], latitude: 40.113812, longitude: -88.224937 }, { description: 'ECEB 1st \u0026 3rd Floor', tags: ['ECEB1', 'ECEB3'], latitude: 40.114937, longitude: -88.228063 }], sponsor: 'Facebook', eventType: 'MEAL' }, { id: 'dd7fc7701ae9f0f7214ba85b49cbaf56', name: 'Saturday Breakfast', description: 'Einstein Bagels', startTime: 1582984800, endTime: 1582992000, locations: [{ description: 'Siebel Basement \u0026 2nd Floor', tags: ['SIEBEL0', 'SIEBEL2'], latitude: 40.113812, longitude: -88.224937 }, { description: 'ECEB 1st \u0026 3rd Floor', tags: ['ECEB1', 'ECEB3'], latitude: 40.114937, longitude: -88.228063 }], sponsor: 'Capital One', eventType: 'MEAL' }, { id: '36677c8571509493424480427a5892f9', name: 'React Workshop', description: 'Join some of the industry’s leading developers of React.js, from Facebook themselves! Attendees will be working on understanding the available tools more in-depth, getting to know the experienced presenters, and interacting with live example projects and PRs.', startTime: 1582990200, endTime: 1582995600, locations: [{ description: 'ECEB 1013', tags: ['ECEB1'], latitude: 40.114937, longitude: -88.228063 }], sponsor: 'Facebook', eventType: 'WORKSHOP' }, { id: '6bc72d38baaaaeba6f4c40d5a1a2ba19', name: 'Intro to JavaScript Workshop', description: 'Discover the modern power of static sites, equipped with dynamic functionality with a little help from JavaScript and serverless functions. Explore how authentication, setting up redirects, and the other nuts and bolts of JS build the internet’s most secure, leanest, and fastest websites.', startTime: 1583002800, endTime: 1583008200, locations: [{ description: 'ECEB 1015', tags: ['ECEB1'], latitude: 40.114937, longitude: -88.228063 }], sponsor: '', eventType: 'WORKSHOP' }, { id: 'ad734926bdf9b2f7d7ac184ccce285d8', name: 'Midnight Meal', description: "Manolo's Pizza", startTime: 1583042400, endTime: 1583047800, locations: [{ description: 'Siebel Basement \u0026 2nd Floor', tags: ['SIEBEL0', 'SIEBEL2'], latitude: 40.113812, longitude: -88.224937 }, { description: 'ECEB 1st \u0026 3rd Floor', tags: ['ECEB1', 'ECEB3'], latitude: 40.114937, longitude: -88.228063 }], sponsor: 'Citadel', eventType: 'MEAL' }, { id: '48492dd86014d249b86cc9b97ba7ef29', name: 'Nerf Tournament', description: 'One of HackIllinois’ oldest traditions: Join us for Nerf battles and open play in Kenney Gym. We’ll have custom obstacles, pickup games, and free time to step away from coding for a short while, mid-event.', startTime: 1583013600, endTime: 1583035200, locations: [{ description: 'Kenney Gym', tags: ['KENNEY'], latitude: 40.113062, longitude: -88.228438 }], sponsor: '', eventType: 'MINIEVENT' }, { id: '916eba726c1ca3d67a9a2fca3ed18855', name: 'Secure Coding Practices', description: 'Hear from long-time HackIllinois mentor and supporter of the event, Jay Freeman, in this productive talk regarding Secure Coding Practices. Jay worked as an early member of the team that jailbroke iOS devices, and has vast experience in the field of secure software.', startTime: 1583026200, endTime: 1583031600, locations: [{ description: 'Siebel 2405', tags: ['SIEBEL2'], latitude: 40.113812, longitude: -88.224937 }], sponsor: 'Orchid Labs', eventType: 'SPEAKER' }, { id: 'f4385e0ae09c856145753c652775e32b', name: 'Saturday Dinner', description: "Papa Del's Pizza", startTime: 1583020800, endTime: 1583028000, locations: [{ description: 'Siebel Basement \u0026 2nd Floor', tags: ['SIEBEL0', 'SIEBEL2'], latitude: 40.113812, longitude: -88.224937 }, { description: 'ECEB 1st \u0026 3rd Floor', tags: ['ECEB1', 'ECEB3'], latitude: 40.114937, longitude: -88.228063 }], sponsor: 'Caterpillar', eventType: 'MEAL' }, { id: '44d582be4d38ddcbdcfb799b69989a29', name: 'State of Open Source Talk', description: 'Hear from some of our most experienced mentors about how Open Source functions in the real world, how people participate in the community, and about new and exciting developments!', startTime: 1583006400, endTime: 1583010000, locations: [{ description: 'Siebel 2405', tags: ['SIEBEL2'], latitude: 40.113812, longitude: -88.224937 }], sponsor: '', eventType: 'SPEAKER' }, { id: '0768967597777ff477f7abe2b8c7c70d', name: 'Sunday Breakfast', description: 'Einstein Bagels', startTime: 1583071200, endTime: 1583076600, locations: [{ description: 'Siebel Basement \u0026 2nd Floor', tags: ['SIEBEL0', 'SIEBEL2'], latitude: 40.113812, longitude: -88.224937 }, { description: 'ECEB 1st \u0026 3rd Floor', tags: ['ECEB1', 'ECEB3'], latitude: 40.114937, longitude: -88.228063 }], sponsor: 'Collins Aerospace', eventType: 'MEAL' }, { id: '30dfd5b5efbe2e97eb76f0a9e4f2a3bc', name: 'Sunday Lunch', description: 'DP Dough Calzones', startTime: 1583082000, endTime: 1583087400, locations: [{ description: 'Siebel Basement \u0026 2nd Floor', tags: ['SIEBEL0', 'SIEBEL2'], latitude: 40.113812, longitude: -88.224937 }, { description: 'ECEB 1st \u0026 3rd Floor', tags: ['ECEB1', 'ECEB3'], latitude: 40.114937, longitude: -88.228063 }], sponsor: 'Schlumberger', eventType: 'MEAL' }, { id: '5338637df53136d6e59b308dca9591ea', name: 'Project Expo', description: 'Present the contributions you made at this event!', startTime: 1583085600, endTime: 1583091000, locations: [{ description: 'ECEB Atrium', tags: ['ECEB1'], latitude: 40.114937, longitude: -88.228063 }], sponsor: '', eventType: 'OTHER' }, { id: 'b1af384c0ce2625e558e28586d313d81', name: 'Closing Ceremony', description: 'Trophies, prizes, and more!!', startTime: 1583096400, endTime: 1583103600, locations: [{ description: 'Kenney Gym', tags: ['KENNEY'], latitude: 40.113062, longitude: -88.228438 }], sponsor: '', eventType: 'OTHER' }, { id: '9026ef23fd2b3be38c81081e0dff2308', name: 'Smash Tournament', description: 'The Pokemon, Fire Emblem, Mario, and Open Source communities collide in the Capital One Super Smash Bros Ultimate tournament! Come for the intense competition and stay for the glory and prizes.', startTime: 1583044200, endTime: 1583060400, locations: [{ description: 'ECEB 1013 \u0026 1015', tags: ['ECEB1'], latitude: 40.114937, longitude: -88.228063 }], sponsor: 'Capital One', eventType: 'MINIEVENT' }, { id: '6a91c99ad14ca3d75a6a006a36455186', name: 'Saturday Lunch', description: 'El Toro', startTime: 1582999200, endTime: 1583006400, locations: [{ description: 'Siebel Basement \u0026 2nd Floor', tags: ['SIEBEL0', 'SIEBEL2'], latitude: 40.113812, longitude: -88.224937 }, { description: 'ECEB 1st \u0026 3rd Floor', tags: ['ECEB1', 'ECEB3'], latitude: 40.114937, longitude: -88.228063 }], sponsor: 'IMC', eventType: 'MEAL' }, { id: '0d2ad7cfb7e18300bf82bbd5689c5f02', name: 'Mentor Matching', description: 'Following the opening ceremony, attendees have a chance to talk to mentors about the projects they can contribute to!', startTime: 1582948800, endTime: 1582954200, locations: [{ description: 'Kenney Gym ', tags: ['KENNEY'], latitude: 40.113062, longitude: -88.228438 }], sponsor: '', eventType: 'OTHER' }, { id: '64dada4fe2cb7e5e49cb096c1f721c3d', name: 'HackIllinois 101', description: 'Attend some brief mini lessons teaching you the basic tips you’ll need to begin hacking, from jumping into a live codebase to wrapping up your own project, and what to expect during your next 36 hours.', startTime: 1582954200, endTime: 1582957800, locations: [{ description: 'Siebel 2405', tags: ['SIEBEL2'], latitude: 40.113812, longitude: -88.224937 }], sponsor: '', eventType: 'WORKSHOP' }, { id: '93d5a98f8e6ebe20e367fa7eaf99d9c9', name: 'Git Gud at Git', description: 'Learn how to use Git for version control! We’ll teach you basic Git commands, reasons to use version control, and lead an interactive walkthrough.', startTime: 1582957800, endTime: 1582961400, locations: [{ description: 'Siebel 2405', tags: ['SIEBEL2'], latitude: 40.113812, longitude: -88.224937 }], sponsor: '', eventType: 'WORKSHOP' }, { id: '3c762d3f297df984404bb12c6b213e14', name: 'Contributing to Open Source Walkthrough', description: 'Learn about what Open Source is, how to find and participate in a project, and why we’re excited to work on Open Source during our event!', startTime: 1582961400, endTime: 1582963200, locations: [{ description: 'Siebel 2405', tags: ['SIEBEL2'], latitude: 40.113812, longitude: -88.224937 }], sponsor: '', eventType: 'WORKSHOP' }, { id: '01ab2f85cafb3d42baf056d07d793b61', name: 'Capture the Flag', description: 'Join IMC and your fellow attendees in a fun game of Capture the Flag! There will be plenty of time reserved in Kenney Gym for you to take a break from developing, network with some of our sponsors, and play a fun, competitive game.', startTime: 1582995600, endTime: 1583004600, locations: [{ description: 'Kenney Gym ', tags: ['KENNEY'], latitude: 40.113062, longitude: -88.228438 }], sponsor: 'IMC', eventType: 'MINIEVENT' }, { id: '35cd8f5c19f9c8f512e569acf39e744e', name: 'A Design Process for All', description: 'You don’t need to be a designer to think and create like one. It’s not about the person doing the work but the process. Come and learn how the “design process” can be applied to any field of expertise, empowering you to overcome the dreaded blank-page and finish your work with greater certainty.', startTime: 1583008200, endTime: 1583011800, locations: [{ description: 'ECEB 2013', tags: ['ECEB2'], latitude: 40.114937, longitude: -88.228063 }], sponsor: '', eventType: 'WORKSHOP' }, { id: '4649cf9035f931cdf4a1ff197c7d58d6', name: 'Mario Kart Tournament', description: 'Gear up with your fellow attendees in the high-speed, high-stakes, go-kart extravaganza! Checkbook.io will be sponsoring prizes and bringing snacks to make sure you’re fueled up and ready to race in this Mario Kart tournament!', startTime: 1583015400, endTime: 1583022600, locations: [{ description: 'ECEB 1013 \u0026 1015', tags: ['ECEB1'], latitude: 40.114937, longitude: -88.228063 }], sponsor: 'Checkbook.io', eventType: 'MINIEVENT' }, { id: '7ecfa3ce14ee0891447157db623158d0', name: 'Code in the Dark', description: 'Want to test your web design skills and learn from the best? Come to Caterpillar’s Code in The Dark to solve web design puzzles with a team (literally, in the dark). Winners get a prize! Enter as a team of three, or just show up and we’ll find teammates for you. It may not be lit, but it’ll definitely be a blast!', startTime: 1583031600, endTime: 1583037000, locations: [{ description: 'ECEB 2013', tags: ['ECEB2'], latitude: 40.114937, longitude: -88.228063 }], sponsor: 'Caterpillar', eventType: 'MINIEVENT' }, { id: '806b6c889dc39443fd92151731e187b3', name: 'Trivia Night', description: 'Take a break from your busy night of hacking and come out to Optum’s Trivia Night! Learn more about healthcare and technology and have fun playing some trivia!', startTime: 1583037000, endTime: 1583042400, locations: [{ description: 'Siebel 2405', tags: ['SIEBEL2'], latitude: 40.113812, longitude: -88.224937 }], sponsor: 'Optum', eventType: 'MINIEVENT' }, { id: 'bbbd3ccc799885eb715e02904f10126e', name: 'Mastering the Technical Interview Panel', description: 'Increase your interview savvy with this instructive workshop hosted by HackIllinois’ sponsor recruiters. Know what to expect, how to approach the process, and some useful tips and tricks of the trade.', startTime: 1583078400, endTime: 1583082000, locations: [{ description: 'ECEB 1002', tags: ['ECEB1'], latitude: 40.114937, longitude: -88.228063 }], sponsor: '', eventType: 'SPEAKER' }, { id: '25149aecf9c9c41d7527967c54e3b72d', name: 'Submission Office Hours', description: 'Submission questions? A staff member is available until the deadline at 11 AM in ECEB 2013 to help you submit your project.', startTime: 1583076600, endTime: 1583082000, locations: [{ description: 'ECEB 2013', tags: ['ECEB2'], latitude: 40.114937, longitude: -88.228063 }], sponsor: '', eventType: 'OTHER' }] };
    resolve(res);
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
  return request('POST', '/auth/code/github/', { code })
    .then(res => res.token);
}

export function getRoles() {
  return request('GET', '/auth/roles/')
    .then(res => res.roles);
}

export function getRegistration(role) {
  return request('GET', `/registration/${role}/`);
}

export function register(isEditing, role, registration) {
  const method = isEditing ? 'PUT' : 'POST';
  return request(method, `/registration/${role}/`, registration);
}

export function getRSVP() {
  return request('GET', '/rsvp/');
}

export function rsvp(isEditing, registration) {
  const method = isEditing ? 'PUT' : 'POST';
  return request(method, '/rsvp/', registration);
}

export function uploadFile(file, type) {
  return request('GET', `/upload/${type}/upload/`)
    .then(res => fetch(res[type], {
      method: 'PUT',
      headers: { 'Content-Type': file.type },
      body: file,
    }))
    .then(res => {
      if (res.ok) {
        return res;
      }
      throw Error(res);
    });
}

export function getQR() {
  return request('GET', '/user/qr/');
}

export function getPrizes() {
  return new Promise(resolve => {
    const res = { prizes: [{ description: 'Best financial hack, presented by Captial One.', name: 'Best Financial Hack', sponsor: 'Capital One' }, { description: 'Real-time payment projects using Checkbook.io technology.', name: 'No Money-ciple Violations', sponsor: 'Checkbook.io' }, { description: 'Best UI/UX presentation and project leveraging open-source technologies.', name: 'The 100 (User) Story Building', sponsor: 'Mirus Research' }, { description: 'Best novel use of mathematics to solve a problem.', name: 'View from the Proof-tops', sponsor: 'IMC' }, { description: 'Work on an open-source project that will help those specifically in need.', name: 'The Very Hungry Caterpillar', sponsor: 'Caterpillar' }] };
    resolve(res);
  });
}
