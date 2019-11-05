import React from 'react';
import Styled from 'styled-components';
import bg from 'assets/Background.png';
import tagline from 'assets/svgs/HackIllinois_Website_tagline.svg';
import city from 'assets/svgs/HackIllinois_Website-05.svg';
import logo from 'assets/svgs/HackIllinois_Website_logo.svg';
import backdrop1 from 'assets/svgs/backdrop.svg';
import bottomroad from 'assets/svgs/bottomroad.svg';

const Container = Styled.div`
  position: relative;
  overflow-x: hidden;
  background-image: url(${bg});
  background-position: left top;
  background-size: cover;
  /* @media(max-width: 1000px){
    background-size: auto 800px;
  } */
`;

const Content = Styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubContent = Styled.div`
  width: 100%;
  /* height: 100%; */
  display: grid;
  margin-top: 100px;
  grid-template-columns: 100px 2.5fr 0.5fr 1fr 1fr 0.4fr;
  grid-template-rows: 400px 200px 300px 300px 300px 500px;
  @media(max-width: 1800px){
    grid-template-rows: 500px 300px 400px 300px 500px;
  }
  @media(max-width: 1400px){
    grid-template-columns: 100px 1fr 1fr 1fr 1fr 0.3fr;
    grid-template-rows: 600px 400px 300px 400px 300px;
  }

  @media(max-width: 1100px){
    grid-template-columns: 100px 0.8fr 1fr 1fr 0.3fr;
    grid-template-rows: 400px 400px 300px 400px 600px;
  }

  @media(max-width: 900px){
    grid-template-columns: 100vw;
    grid-template-rows: 90vw 400px 1100px;
    justify-items: center;
  }

  @media(max-width: 700px){
    grid-template-rows: 90vw 400px 1200px;
  }

  @media(max-width: 600px){
    grid-template-rows: 90vw 400px 1300px;
  }
  @media(max-width: 600px){
    grid-template-rows: 90vw 400px 1500px;
  }

  @media(max-width: 450px){
    grid-template-rows: 90vw 400px 1800px;
  }

  @media(max-width: 380px){
    grid-template-rows: 90vw 400px 2200px;
  }
`;

const Tagline = Styled.img`
  overflow: hidden;
  width: auto;
  max-width: 600px;
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 20px;
  @media(max-width: 375px){
    margin-top: 100px;
  }
`;

const City = Styled.img`
  height: 100%;
  z-index: 1;
  grid-area: 1 / 1 / 5 / 4;
  justify-self: start;
  @media(max-width: 1800px){
    height: auto;
    width: 100%;
    grid-area: 1 / 1 / 4 / 3;
  }
  @media(max-width: 1400px){
    grid-area: 1/1/3/4;
  }
  @media(max-width: 1100px){
    grid-area: 1/1/3/4;
  }
  @media(max-width: 900px){
    justify-self: center;
    grid-area: 1/1/3/2;
    height: auto;
    width: 100%;
    margin-right: 5vw;
  }
`;

const Backdrop1 = Styled.div`
  background-image: url(${backdrop1});
  background-size: cover;
  background-position: 25% 50%;
  width: 100%;
  z-index: 2;
  grid-area: 1/2/7/7;

  @media(max-width: 1800px) {
    grid-area: 1/1/7/7;
    background-position: 30% 50%;
  }

  @media(max-width: 1400px) {
    grid-area: 1/1/6/7;
    background-position: 40% 50%;
  }
  @media(max-width: 1100px) {
    grid-area: 2/1/6/6;
    background-position: 80%;
  }
  @media(max-width: 900px){
    grid-area: 2/1/4/3;
    background-position: 100% 50%;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100%;
  }
`;

const DescContainer = Styled.div`
  z-index: 3;
  grid-area: 1/4/6/6;

  @media(max-width: 4600px) {
    grid-area: 2/4/6/6;
  }

  @media(max-width: 2600px) {
    grid-area: 3/4/6/6;
  }

  @media(max-width: 1800px) {
    grid-area: 2/4/6/6;
  }

  @media(max-width: 1100px) {
    grid-area: 3/3/6/5;
  }

  @media(max-width: 900px) {
    padding: 0 40px;
    grid-area: 3/1/4/2;
  }
`;

const DescTitle = Styled.div`
  font-size: 3rem;
  padding: 30px 0 10px 0;
  color: #9C1641;
`;

const Desc = Styled.div`
  font-size: 1.5rem;
`;

const Logo = Styled.img`
  width: 15vw;
  height: auto;
  min-width: 120px;
  top: 20px;
  left: 35px;
  position: absolute;
  @media(max-width: 600px){
    top: 15px;
    left: 15px;
  }
  z-index: 10;
`;

const GroundContent = Styled.div`
  width: 100%;
  z-index: 3;
  @media(max-width: 570px){
    margin-top: -60px;
  }
  @media(max-width: 380px){
    margin-top: -90px;
  }
`;

const Road = Styled.img`
  width: 100%;
`;

const RoadWrapper = Styled.div`
  width: 100vw;
  margin-top: -30vw;
  min-width: 1000px;
  overflow: hidden;
`;

const TimeWrapper = Styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  font-size: 24px;
  justify-content: space-around;
  color: white;
  margin-top: -10px;
  padding-top: 50px;
  background: #4D8857;
`;

const Clickable = Styled.div`
  &:hover{
    cursor: pointer;
  }
`;

const FAQContainer = Styled.div`
  overflow: hidden;
  background: #4D8857;
  padding: 40px;
  margin-top: -25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: white;
  @media(max-width: 900px){
    grid-template-columns: 1fr;
  }
  @media(max-width: 650px){
    padding: 40px 0;
  }
`;

const FAQTitle = Styled.div`
  padding: 10px;
  font-size: 16px;
  /* @media(max-width: 650px){
    padding: ;
  } */
`;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FAQState: 'General',
    };
  }

  changeFAQ(title) {
    this.setState({FAQState: title});
  }

  render() {
    const { FAQState }= this.state;

    const Descriptions = [
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
        body: 'Interested in contributing to open source? Be sure to apply for your chance to attend. Really want to come? Complete our Open Source Challenge for guaranteed admission to HackIllinois 2019. It’s simple—just make one PR to any project between December 1, 2018 and the close of applications. New to open source? No problem. Our workshops and mentors will help guide you through the intricacies of open source, from licensing to making your first PR (pull request).',
      }
    ];

    const Clickables = [
      {
        title: 'General',
      },
      {
        title: 'Before',
      },
      {
        title: 'During',
      },
    ];

    const FAQPanels = {
      General: {
        content: [
          [
            {
              q: 'How do I get to the University of Illinois/Siebel/etc.?',
              a: 'Hackillinois will be providing some bus routes to the event. More information on what routes the buses will take to follow. If you are a University of Illinois student please walk or utilize the MTD bus system.'
            },
            {
              q: 'Do I need to have a programming background to participate?',
              a: 'No! People of all skill levels are welcomed.',
            },
          ],
          [
            {
              q: 'How do applications work?',
              a: 'You must apply in order to be considered for HackIllinois. Admissions will be based on a weighted lottery. Decisions will be released in early January in multiple waves, and it is to your advantage to apply as soon as possible. If you’re accepted, there will be a limited time to RSVP before we reallocate your spot to another student.',
            },
          ],
          [
            {
              q: 'What should I bring?',
              a: 'You should bring a student ID, a reusable water bottle, a change of clothing, personal items such as toiletries, and a laptop & charger. Due to safety considerations, please do not bring desktop computers, extra monitors, weapons, or alcoholic beverages.',
            },
          ],
          [
            {
              q: 'How can I make the most out of HackIllinois tools?',
              a: 'The Hardware Hut is available to all at ECEB. More information on what will be available will be coming later.',
            },
            {
              q: 'Have more questions?',
              a: 'Please don’t hesitate to reach out to us at contact@hackillinois.org if you have any other questions.',
            },
          ],
        ],
      },
      Before: {
        content: [
          [
            {
              q: 'What facilities, floors, and rooms are available to work in?',
              a: 'Refer to maps that will be on the website which can be found [insert hyperlink].',
            },
            {
              q: 'Where do I sleep?',
              a: 'There will be sleeping rooms furnished with air mattresses and pillows. We want you to be healthy and comfortable during the weekend!',
            }
          ],
          [
            {
              q: 'Is there anything to do other than code?',
              a: 'ABSOLUTELY! There will be a variety of mini-events this year, including the customary Nerf battles as well as some new events. There will also be open-source keynotes and engaging workshops, so you should definitely check out the schedule to be posted here on the website.',
            },
          ],
          [
            {
              q: 'Do I have to go to the opening/ending ceremony?',
              a: 'Yes! Prize and food information will be covered at the opening ceremony. Prizes will be announced at the ending ceremony.',
            },
            {
              q: 'How can I contact a mentor?',
              a: 'Room locations for each mentor are up on the website and on our pamphlet. Otherwise, you can contact them on Slack.',
            }
          ],
          [
            {
              q: 'Will there be food?',
              a: 'Snacks, drinks, and all meals will be provided for the entire weekend. If you have a dietary restriction, please make sure to mention it on the application. We’ll have a wide variety of food available, including vegetarian and vegan options, throughout the weekend. All announcements for when the food arrives will be on the app, so please check there.',
            },
          ],
        ],
      },
      During: {
        content: [
          [
            {
              q: 'Do I have to stay in the north quad? (aka Siebel and ECEB)',
              a: 'Nope! Feel free to roam around Urbana-Champaign and explore what we have to offer.'
            },
          ],
          [
            {
              q: 'How can I stay updated with what is going on at the event?',
              a: 'Please download the app beforehand! Our website will also be continually updated with new information throughout the year.',
            },
          ],
          [
            {
              q: 'Can I work on my own projects?',
              a: 'Yes, feel free to work on your own project, people in past years have won creating projects from scratch! However, the benefit of working with a mentor or company is that you get guidance and the opportunity to communicate with experts in the field.',
            },
          ],
          [
            {
              q: 'Do I need a team? How do I find one?',
              a: 'No, you are not required to have a team to participate. You are encouraged to work with mentors and other participants in order to get the full experience. You can make teams prior to the event or look for them through slack during the event. If you do have a team, please try to keep it below 8 people.',
            },
          ],
        ],
      },
    };

    return (
      <Container>
        <Logo src={logo} />
        <Content>
          <Tagline src={tagline} alt={'tagline'} />
          <SubContent>
            <City src={city} />
            <Backdrop1>
            </Backdrop1>
            <DescContainer>
              {Descriptions.map(e =>
                <div>
                  <DescTitle>{e.title}</DescTitle>
                  <Desc>{e.body}</Desc>
                </div>
              )}
            </DescContainer>
          </SubContent>
          <GroundContent>
            <RoadWrapper>
              <Road src={bottomroad} />
            </RoadWrapper>
            <TimeWrapper>
              {Clickables.map(e => 
                <Clickable
                key={e.title}
                onClick={()=> this.changeFAQ(e.title)}>
                  {FAQState === e.title ? <b>{e.title}</b> : e.title}
                </Clickable>
              )}
            </TimeWrapper>
            <FAQContainer>
              {FAQPanels[FAQState].content.map(e => 
                <FAQTitle key={e[0].q}>
                  {e.map(f => 
                    <div key={f.q}>
                      <b>{f.q}</b><br/>{f.a}<br/><br/>
                    </div>
                  )}
                </FAQTitle>
              )}
            </FAQContainer>
          </GroundContent>
        </Content>

      </Container>
    );
  }
}
