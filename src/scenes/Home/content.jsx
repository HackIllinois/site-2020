import cloud1 from 'assets/home/cloud1.svg';
import cloud2 from 'assets/home/cloud2.svg';
import cloud3 from 'assets/home/cloud3.svg';
import cloud4 from 'assets/home/cloud4.svg';
import plane from 'assets/home/plane.svg';

export const NAVITEMS = [
  {
    title: 'EVENTS',
    url: '#events',
  },
  {
    title: 'MENTORS',
    url: '/mentor',
  },
  {
    title: 'SPONSORS',
    url: '/sponsor',
  },
];

export const BACKGROUND_DECOR = [
  {
    id: 0,
    img: cloud1,
    style: {
      top: '20vh',
      right: '15vw',
    },
  },
  {
    id: 1,
    img: cloud2,
    style: {
      top: '35vh',
      right: '10vw',
    },
  },
  {
    id: 2,
    img: cloud3,
    style: {
      top: '50vh',
      left: '10vw',
    },
  },
  {
    id: 3,
    img: plane,
    style: {
      top: '60vh',
      right: '15vw',
    },
    mobileStyle: {
      margin: '0 25vw 0 75vw',
      clipPath: 'polygon(0% 100%, 45% 0%, 55% 0%, 55% 42%, 88% 0%, 100% 0%, 62% 50%, 100% 100%, 88% 100%, 55% 58%, 55% 100%, 45% 100%, 45% 63%, 27% 63%, 30% 53%, 45% 53%, 46% 19%, 12% 100%)',
      background: '#fff',
    },
  },
  {
    id: 4,
    img: cloud2,
    style: {
      top: '70vh',
      left: '20vw',
    },
  },
  {
    id: 5,
    img: cloud4,
    style: {
      top: '85vh',
      right: '20vw',
    },
  },
];

export const DESCRIPTIONS = [
  {
    title: 'Open Source',
    body: 'HackIllinois is redefining the collegiate hackathon as the first entirely open source hackathon. Students work with experienced open source mentors over 36 hours to contribute to open source through new features, bug fixes, and documentation changes.',
  },
  {
    title: 'The Event',
    body: 'This year, only groups who work on an open source contribution and add a license will be eligible to win prizes. Contribute to a useful open source tool that you use, an open source project of your own, or join a team led by an open source mentor!',
  },
  {
    title: 'Join Us',
    body: 'Interested in contributing to open source? Be sure to apply for your chance to attend. Really want to come? Complete our Open Source Challenge for guaranteed admission. It’s simple - just make one PR to any project before the application is closed, and tell us about it! New to open source? No problem. Our workshops and mentors will help guide you through the intricacies of open source, from licensing to making your first PR (pull request).',
  },
];

export const CLICKABLES = [
  {
    title: 'General',
    rotation: '7',
  },
  {
    title: 'Before',
    rotation: '2',
  },
  {
    title: 'During',
    rotation: '-8',
  },
];

export const FAQ_PANELS = {
  General: {
    content: [
      [
        {
          q: 'How do I get to the University of Illinois?',
          a: 'Hackillinois will be providing some bus routes to the event. If you are a University of Illinois student, please walk or utilize the MTD bus system.',
        },
        {
          q: 'Do I need to have a programming background to participate?',
          a: 'No! People of all skill levels are welcomed.',
        },
        {
          q: 'Interested in being a sponsor at our event?',
          a: 'Email us at sponsor@hackillinois.org!',
        },
      ],
      [
        {
          q: 'How do applications work?',
          a: 'You must apply in order to be considered for HackIllinois. Admissions will be based on a weighted lottery. Decisions will be released in late January in multiple waves, and it is to your advantage to apply as soon as possible. If you’re accepted, there will be a limited time to RSVP before we reallocate your spot to another student.',
        },
        {
          q: 'Want guaranteed admission?',
          a: 'Try our ',
          l: {
            text: 'Open Source Challenge',
            path: 'http://go.hackillinois.org/challenge',
          },
        },
      ],
      [
        {
          q: 'What should I bring?',
          a: 'You should bring a student ID, reusable water bottle, change of clothing, personal items such as toiletries, laptop, and charger. Due to safety considerations, please do not bring desktop computers, extra monitors, weapons, or alcoholic beverages.',
        },
        {
          q: 'Have more questions?',
          a: 'Please don’t hesitate to reach out to us at contact@hackillinois.org if you have any other questions.',
        },
        {
          q: 'Is there a Code of Conduct?',
          a: 'Yes! All attendees of the event (sponsors, mentors, etc.) agree to the ',
          l: {
            text: 'HackIllinois 2020 Code of Conduct',
            path: 'http://go.hackillinois.org/code-of-conduct',
          },
        },
      ],
    ],
  },
  Before: {
    content: [
      [
        {
          q: 'Is there anything to do other than code?',
          a: 'Absolutely! There will be a variety of mini-events this year, including Nerf battles and other new events. There will also be open-source keynotes and workshops. Check out the full schedule when it is posted on our site!',
        },
        {
          q: 'Where do I sleep?',
          a: 'There will be sleeping rooms furnished with air mattresses and pillows. We want you to be healthy and comfortable during the weekend!',
        },
      ],
      [
        {
          q: 'Do I have to go to the opening/ending ceremony?',
          a: 'Yes! Prize and food information will be covered at the opening ceremony. Prizes will be announced at the ending ceremony.',
        },
        {
          q: 'How can I contact a mentor?',
          a: 'Room locations for each mentor will be posted on the website and mobile apps. Otherwise, you can contact them on Slack.',
        },
      ],
      [
        {
          q: 'Will there be food?',
          a: 'Snacks, drinks, and all meals will be provided for the entire weekend. If you have a dietary restriction, please make sure to mention it when you RSVP. We’ll have a wide variety of food available throughout the weekend, including vegetarian and vegan options. We will use our mobile apps to make announcements when food arrives.',
        },
      ],
    ],
  },
  During: {
    content: [
      [
        {
          q: 'Can I work on my own projects?',
          a: 'Yes, feel free to work on your own project, people in past years have won creating projects from scratch! However, the benefit of working with a mentor or company is that you get guidance and the opportunity to communicate with experts in the field.',
        },
      ],
      [
        {
          q: 'What facilities, floors, and rooms are available to work in?',
          a: 'Working space will be available in Siebel and ECEB.',
        },
        {
          q: 'How can I stay updated with what is going on at the event?',
          a: 'Please download the app beforehand! Our website will also be continually updated with new information throughout the year.',
        },
      ],
      [
        {
          q: 'Do I need a team? How do I find one?',
          a: 'No, you are not required to have a team to participate. You are encouraged to work with mentors and other participants in order to get the full experience. If you do have a team, please keep it below 8 people.',
        },
      ],
    ],
  },
};
