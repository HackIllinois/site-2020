import React from 'react';
import Styled, { keyframes } from 'styled-components';
import bg from 'assets/svgs/background.svg';
import tagline from 'assets/svgs/HackIllinois_Website_tagline.svg';
import sponsor from 'assets/svgs/Sponsor.svg';
import city from 'assets/svgs/HackIllinois_Website-05.svg';
import logo from 'assets/svgs/HackIllinois_Website_logo.svg';
import backdrop1 from 'assets/svgs/HackIllinois_Website-18.svg';
import bottomroad from 'assets/svgs/bottomroad.svg';

const Container = Styled.div`
  position: relative;
  overflow-x: hidden;
`;

const BackgroundWrapper = Styled.div`
  overflow: hidden;
  width: 100%;
  /* display: flex; */
  align-items: center;
  justify-content: center;
`;
const Background = Styled.img`
  width: 100%;
  min-width: 1500px;
`;

const Content = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubContent = Styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const Tagline = Styled.img`
  overflow: hidden;
  width: 75vw;
  max-width: 600px;
  margin-top: 125px;
  @media(max-width: 425px){
    margin-top: 100px;
  }
`;

const Sponsor = Styled.img`
  margin-top: 30px;
  max-width: 600px;
  width: 75vw;
  display: none;
  /* @media(max-width: 425px) {
    display: block;
  } */
`;

const City = Styled.img`
  position: absolute;
  overflow: hidden;
  width: 80vw;
  flex-grow: 0;
  transform: translate(-10vw, 200px);
  margin-right: -600px;
  margin-left: -10vw;

  @media(max-width: 1700px) {
    transform: translate(-100px, 200px);
    width: 1000px;
  }

  @media(max-width: 1300px) {
    transform: translate(-100px, 100px);
    width: 90vw;
  }

  @media(max-width: 1000px) {
    width: 100vw;
  }
`;

const Backdrop1 = Styled.img`
  position: absolute;
  overflow: hidden;
  /* flex-grow: 0;
  flex-shrink: 0; */
  right: -300px;
  width: 90vw;
  
  transform: translate(5vw, 150px);
  
  @media(max-width: 1700px) {
    width: 1800px;
    transform: translate(0, 150px);
  }
  
  @media(max-width: 1300px) {
    transform: translate(0, 300px);
  }
  
  @media(max-width: 1000px) {
    transform: translate(0, 350px);
  }
`;

const Logo = Styled.img`
  width: 15vw;
  height: auto;
  min-width: 120px;
  /* position: auto; */
  top: 20px;
  left: 35px;
  position: absolute;
  @media(max-width: 600px){
    top: 15px;
    left: 15px;
  }
`;

const GroundContent = Styled.div`
  width: 100%;
  height: 0;
  position: absolute;
  z-index: 3;

  @media(min-width: 1700px) {
    margin-top: calc(80vw + 250px);
  }

  @media(max-width: 1700px) {
    transform: translate(0, 1745px);
  }
  
  @media(max-width: 1300px) {
    transform: translate(0, 1895px);
  }
  
  @media(max-width: 1000px) {
    transform: translate(0, 1945px);
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
transition: 10s;
  &:hover{
    transform: rotate(100000deg);
    cursor: pointer;
  }
`;

const FAQContainer = Styled.div`
  overflow: hidden;
  background: #4D8857;
  padding: 40px;
  margin-top: -25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-height: 300px;
  color: white;
`;

const FAQTitle = Styled.div`
  font-size: 16px;
`;

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Logo src={logo} />
        <BackgroundWrapper>
          <Background src={bg} alt={'background'} />
        </BackgroundWrapper>
        <Content>
          <Tagline src={tagline} alt={'tagline'} />
          {/* <Sponsor src={sponsor} alt={'sponsor'} /> */}
          <SubContent>
            <City src={city} alt={'city'} />
            <Backdrop1 src={backdrop1} alt={'backdrop1'} />
            <GroundContent>
              <RoadWrapper>
                <Road src={bottomroad} />
              </RoadWrapper>
              <TimeWrapper>
                <Clickable>
                  General
                </Clickable>
                <Clickable>
                  Before
                </Clickable>
                <Clickable>During</Clickable>
              </TimeWrapper>
              <FAQContainer>
                <FAQTitle>
                  How do I get there to the University/Siebel/etc?
                </FAQTitle>
              </FAQContainer>
            </GroundContent>
          </SubContent>
        </Content>
<<<<<<< HEAD
        <GroundContent>
          <RoadWrapper>
            <Road src={bottomroad} />
          </RoadWrapper>
          <TimeWrapper>
            <Clickable>
              General
            </Clickable>
            <Clickable>
              Before
            </Clickable>
            <Clickable>During</Clickable>
          </TimeWrapper>
          <FAQContainer>
            <FAQTitle>
              <b>
                How do I get there to the University of Illinois/Siebel/etc.?
            </b><br />
              Hackillinois will be providing some bus routes to the event. More information on what routes the buses will take to follow. If you are a University of Illinois student please walk or utilize the MTD bus system.

            </FAQTitle>
            <FAQTitle>
            <b>Do I need to have a programming background to participate?</b><br/>
No! People of all skill levels are welcomed. 
            </FAQTitle>
            <FAQTitle>
            <b>What should I bring?</b> <br/>
You should bring a student ID, a reusable water bottle, a change of clothing, personal items such as toiletries, and a laptop & charger. Due to safety considerations, please do not bring desktop computers, extra monitors, weapons, or alcoholic beverages.
</FAQTitle>
          </FAQContainer>
        </GroundContent>
=======
        
>>>>>>> 6c1569e2273670d896b9d35ad81905e3cc4e7e13
      </Container>
    );
  }
}
