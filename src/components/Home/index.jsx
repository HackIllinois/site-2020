import React from 'react';
import Styled from 'styled-components';
import bg from 'assets/home/background.png';
import tagline from 'assets/home/tagline.svg';
import city from 'assets/home/city.svg';
import logo from 'assets/home/logo.svg';
import backdrop1 from 'assets/home/backdrop.svg';
import backgroundRoad from 'assets/home/background_road.svg';
import foregroundBush from 'assets/home/foreground_bushes.svg';
import car from 'assets/home/car.svg';
import { DESCRIPTIONS, CLICKABLES, FAQ_PANELS } from './content';
const Container = Styled.div`
  position: relative;
  overflow-x: hidden;
  background-image: url(${bg});
  background-position: left top;
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
  display: grid;
  margin-top: 100px;
  grid-template-columns: 100px 2.5fr 0.5fr 1fr 1fr 0.4fr;
  grid-template-rows: 400px 200px 300px 300px 300px 500px;
  @media(max-width: 1800px) {
    grid-template-rows: 500px 300px 400px 300px 500px;
  }
  @media(max-width: 1400px) {
    grid-template-columns: 100px 1fr 1fr 1fr 1fr 0.3fr;
    grid-template-rows: 600px 400px 300px 400px 300px;
  }
  @media(max-width: 1100px) {
    grid-template-columns: 100px 0.8fr 1fr 1fr 0.3fr;
    grid-template-rows: 400px 400px 300px 400px 600px;
  }
  @media(max-width: 900px) {
    grid-template-columns: 100vw;
    grid-template-rows: 90vw 400px 1100px;
    justify-items: center;
  }
  @media(max-width: 700px) {
    grid-template-rows: 90vw 250px 150px 1200px;
  }
  @media(max-width: 600px) {
    grid-template-rows: 90vw 200px 200px 1500px;
  }

  @media(max-width: 450px) {
    grid-template-rows: 90vw 400px 1800px;
  }

  @media(max-width: 380px) {
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
  @media(max-width: 375px) {
    margin-top: 100px;
  }
`;

const City = Styled.img`
  height: 100%;
  z-index: 1;
  grid-area: 1 / 1 / 5 / 4;
  justify-self: start;
  @media(max-width: 1800px) {
    height: auto;
    width: 100%;
    grid-area: 1 / 1 / 4 / 3;
  }
  @media(max-width: 1400px) {
    grid-area: 1/1/3/4;
  }
  @media(max-width: 1100px) {
    grid-area: 1/1/3/4;
  }
  @media(max-width: 900px) {
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
  @media(max-width: 900px) {
    grid-area: 2/1/4/3;
    background-position: 100% 50%;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100%;
  }
  @media(max-width: 700px) {
    grid-area: 2/1/5/3;
  }
`;

const DescriptionContainer = Styled.div`
  z-index: 3;
  margin-top: 100px;
  grid-area: 1/4/6/6;
  @media(max-width: 3600px) {
    margin-top: 0;
    grid-area: 2/4/6/6;
  }
  @media(max-width: 2400px) {
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

const DescriptionTitle = Styled.div`
  font-size: 3rem;
  padding: 30px 0 10px 0;
  color: #9C1641;
`;

const Description = Styled.div`
  font-size: 1.5rem;
`;

const Logo = Styled.img`
  width: 15vw;
  height: auto;
  min-width: 120px;
  top: 20px;
  left: 35px;
  position: absolute;
  @media(max-width: 600px) {
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

const BackgroundRoad = Styled.img`
  width: 101%;
  margin-left: -2px;
`;

const ForegroundBush = Styled.img`
  position: relative;
  z-index: 5;
  width: 90%;
  margin: -2.5% 5%;
`;

const Car = Styled.img.attrs(props => {
  let p = props.position - 80;
  return {
    style: {
      transform: 'translate(' + (p > 0 ? p * 5 : 0) + 'vw)'
    }
  }
})`
  z-index: 2
  width: 10%;
  margin: -3.8% 0;
`;

const RoadWrapper = Styled.div`
  z-index: 2
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
  padding: 50px 0 25px 0;
  background: #4B8655;
`;

const Clickable = Styled.div`
  letter-spacing: 0.1em;
  font-family: Montserrat;
  font-style: normal;
  font-size: 1.2em;
  letter-spacing: 0.1em;
  &:hover{
    cursor: pointer;
  }
`;

const FAQContainer = Styled.div`
  z-index: 6;
  overflow: hidden;
  background: #4B8655;
  padding-bottom: 9vw;
  margin-top: -25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: white;
  @media(max-width: 3000px) {
    padding-bottom: 7vw;
  }
  @media(max-width: 2500px) {
    padding-bottom: 5vw;
  }
  @media(max-width: 2500px) {
    padding: 40px;
  }
  @media(max-width: 900px) {
    grid-template-columns: 1fr;
  }
  @media(max-width: 650px) {
    padding: 40px 0;
  }
`;

const FAQTitle = Styled.div`
  padding: 10px;
  font-size: 16px;
`;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FAQ_STATE: 'General',
      SCROLL_POS: 0,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.changeFAQ = this.changeFAQ.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  changeFAQ(title) {
    this.setState({ FAQ_STATE: title });
  }

  handleScroll() {
    let h = document.body.clientHeight;
    let st = document.body.scrollTop;
    let sh = document.body.scrollHeight;
    this.setState({ SCROLL_POS: st / (sh - h) * 100 });
  }

  render() {
    const { FAQ_STATE, SCROLL_POS } = this.state;
    return (
      <Container>
        <Logo src={logo} />
        <Content>
          <Tagline src={tagline} alt={'tagline'} />
          <SubContent>
            <City src={city} />
            <Backdrop1>
            </Backdrop1>
            <DescriptionContainer>
              {DESCRIPTIONS.map(e =>
                <div key={e.title}>
                  <DescriptionTitle>{e.title}</DescriptionTitle>
                  <Description>{e.body}</Description>
                </div>
              )}
            </DescriptionContainer>
          </SubContent>
          <GroundContent>
            <RoadWrapper>
              <BackgroundRoad src={backgroundRoad} alt={'backgroundRoad'} />
              <Car src={car} alt={'car'} position={SCROLL_POS} />
              <ForegroundBush src={foregroundBush} alt={'foregroundBush'} />
            </RoadWrapper>
            <TimeWrapper>
              {CLICKABLES.map(e =>
                <Clickable
                  key={e.title}
                  onClick={() => this.changeFAQ(e.title)}>
                  {FAQ_STATE
                    === e.title ? <b>{e.title}</b> : e.title}
                </Clickable>
              )}
            </TimeWrapper>
            <FAQContainer>
              {FAQ_PANELS[FAQ_STATE
              ].content.map(e =>
                <FAQTitle key={e[0].q}>
                  {e.map(f =>
                    <div key={f.q}>
                      <b>{f.q}</b><br />{f.a}<br /><br />
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
