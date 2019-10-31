import React from 'react';
import Styled from 'styled-components';
import bg from 'assets/svgs/background.svg';
import tagline from 'assets/svgs/HackIllinois_Website_tagline.svg';
import sponsor from 'assets/svgs/Sponsor.svg';
import city from 'assets/svgs/HackIllinois_Website-05.svg';
import logo from 'assets/svgs/HackIllinois_Website_logo.svg';

const Container = Styled.div`
  position: relative;
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
  min-width: 500px;
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
  @media(max-width: 425px){
    display: block;
  }
`;

const City = Styled.img`
  width: 50vw;
  margin: 15vh auto 15vh -16.5vw;
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
          <City src={city} alt={'city'} />
        </Content>
      </Container>
    );
  }
}
