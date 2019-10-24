import React from 'react';
import Styled from 'styled-components';
import bg from 'assets/svgs/background.svg';
import tagline from 'assets/svgs/HackIllinois_Website_tagline.svg';
import sponsor from 'assets/svgs/Sponsor.svg';
import city from 'assets/svgs/HackIllinois_Website-05.svg';

const Container = Styled.div`
  position: relative;
`;

const Background = Styled.img`
  width: 100%;
`;

const Content = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const Tagline = Styled.img`
  display: block;
  width: 40vw;
  margin: 25vh auto 5vh auto;

  @media(max-width: 900px) {
    margin: 15vh auto 3vh auto;
  }

  /* @media(max-width: 300px) {
    margin: 0 auto 2vh auto;
  }
  @media(max-width: 1000px) {
    margin: 15vh auto 4vh auto;
  } */


`;

const Sponsor = Styled.img`
  display: block;
  width: 40vw;
  margin: 15vh auto;
`;

const City = Styled.img`
  display: block;
  width: 50vw;
  margin: 15vh auto 15vh -16.5vw;
`;

export default class Home extends React.Component {
  render() {
    return (
    <Container>
        <Background src={bg} alt={'background'}/>
        <Content>
          <Tagline src={tagline} alt={'tagline'}/>
          <Sponsor src={sponsor} alt={'sponsor'}/>
          <City src={city} alt={'city'}/>
        </Content>
    </Container>
    );
  }
}
