import React from 'react';
import Styled from 'styled-components';
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
  display: flex;
  align-items: center;
  justify-content: center;

`;
const Background = Styled.img`
  width: 100%;
  /* height: 100% */
  min-width: 500px;
  @media(max-width: 1000px){
    width: 200%;
  }
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
  /* display: flex;
  flex-direction: row;
  align-items: space-between;

  @media(max-width: 600px) {
    flex-direction: column;
  } */
`;

const Tagline = Styled.img`
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
  width: 1000px;
  flex-grow: 0;
  transform: translate(-100px, 200px);
  margin-right: -600px;
  margin-left: -10vw;
  z-index: 1;

  @media(max-width: 1300px) {
    transform: translate(-100px, 100px);
    width: 80vw;
  }

  @media(max-width: 1000px) {
    width: 100vw;
  }
`;

const Backdrop1 = Styled.img`
  position: absolute;
  /* flex-grow: 0;
  flex-shrink: 0; */
  right: -300px;
  width: 1800px;
  z-index: 2;
  @media(max-width: 1300px) {
    transform: translate(0, 150px);
  }
  
  @media(max-width: 1000px) {
    transform: translate(0, 350px);
  }
`;

const Logo = Styled.img`
  width: 15vw;
  height: auto;
  min-width: 120px;
  position: auto;
  top: 20px;
  left: 35px;
  position: absolute;
  @media(max-width: 600px){
    top: 15px;
    left: 15px;
  }
`;

const GroundContent = Styled.div`
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 10;
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

const FAQContainer = Styled.div`
  background: #4D8857;
  padding: 40px;
  margin-top: -25px;
`;

const FAQTitle = Styled.div`
  font-size: 16px;
  font-weight: 600px;
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
          <Sponsor src={sponsor} alt={'sponsor'} />
          <SubContent>
            <City src={city} alt={'city'} />
            <Backdrop1 src={backdrop1} alt={'backdrop1'} />
          </SubContent>
        </Content>
        <GroundContent>
            <RoadWrapper>
              <Road src={bottomroad} />
            </RoadWrapper>
            <FAQContainer>
              <FAQTitle>
                How do I get there to the University/Siebel/etc?
                </FAQTitle>
            </FAQContainer>
          </GroundContent>
      </Container>
    );
  }
}
