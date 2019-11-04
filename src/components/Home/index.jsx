import React from 'react';
import Styled from 'styled-components';
import bg from 'assets/svgs/background.svg';
import tagline from 'assets/svgs/HackIllinois_Website_tagline.svg';
import city from 'assets/svgs/HackIllinois_Website-05.svg';
import logo from 'assets/svgs/HackIllinois_Website_logo.svg';
import backdrop1 from 'assets/svgs/backdrop.svg';
import bottomroad from 'assets/svgs/bottomroad.svg';

const Container = Styled.div`
  position: relative;
  overflow-x: hidden;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
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
  height: 100%;
  display: grid;
  margin-top: 100px;
  grid-template-columns: 100px 1fr 1fr 1fr 1fr;
  grid-template-rows: 500px 400px 300px 300px 500px;
  @media(max-width: 1800px){
    grid-template-rows: 700px 200px 300px 300px;
  }
  @media(max-width: 1400px){
    grid-template-rows: 600px 300px 300px;
  }
  @media(max-width: 900px){
    grid-template-rows: 400px 300px;
  }
  @media(max-width: 636px){
    grid-template-columns: 100vw;
    grid-template-rows: 90vw 300px 800px;
    justify-items: center;
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
  grid-area: 1 / 1 / 4 / 4;
  justify-self: start;
  @media(max-width: 1800px){
    grid-area: 1 / 1 / 3 / 4;
  }
  @media(max-width: 1400px){
    grid-area: 1/1/2/4;
  }
  @media(max-width: 636px){
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
  grid-area: 1/2/6/6;
  @media(max-width: 1400px) {
    grid-area: 1/1/5/6;
    background-position: 30% 50%;
  }
  @media(max-width: 900px) {
    background-position: 30%;

  }
  @media(max-width: 636px){
    grid-area: 2/1/4/3;
    background-position: 100% 50%;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100%;
  }
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
  color: white;
  @media(max-width: 650px){
    grid-template-columns: 1fr;
  }
`;

const FAQTitle = Styled.div`
  font-size: 16px;
  @media(max-width: 650px){
    margin-top: 20px;
  }
`;

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Logo src={logo} />
        <Content>
          <Tagline src={tagline} alt={'tagline'} />
          <SubContent>
            <City src={city}/>
            <Backdrop1 />
          </SubContent>
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
                  <b>Do I need to have a programming background to participate?</b><br />
                  No! People of all skill levels are welcomed.
            </FAQTitle>
                <FAQTitle>
                  <b>What should I bring?</b> <br />
                  You should bring a student ID, a reusable water bottle, a change of clothing, personal items such as toiletries, and a laptop & charger. Due to safety considerations, please do not bring desktop computers, extra monitors, weapons, or alcoholic beverages.
            </FAQTitle>
              </FAQContainer>
            </GroundContent>
        </Content>

      </Container>
    );
  }
}
