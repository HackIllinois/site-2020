import React from 'react';
import Styled, { keyframes } from 'styled-components';

import NavBar from 'components/NavBar';

import backdrop from 'assets/home/backdrop.svg';
import backgroundRoad from 'assets/home/background_road.svg';
import bg from 'assets/home/background.png';
import car from 'assets/home/car.svg';
import city from 'assets/home/city.svg';
import foregroundBush from 'assets/home/foreground_bushes.svg';
import signBush from 'assets/home/sign_bush.svg';
import tagline from 'assets/home/tagline.svg';

import sponsorCar from 'assets/sponsors/car.svg';
import sponsorBike from 'assets/sponsors/bike.svg';
import sponsorBus from 'assets/sponsors/bus.svg';

import logo from 'assets/home/logo.svg';

import {
  BusSponsors,
  CarSponsors,
  BikeSponsors,
} from './sponsors';

import {
  BACKGROUND_DECOR,
  DESCRIPTIONS,
  CLICKABLES,
  FAQ_PANELS,
} from './content';

const Container = Styled.div`
  position: relative;
  overflow-x: hidden;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;

  @media(min-width: 1100px) {
    font-size: 0.8vw;
  }

  @media(min-width: 2200px) {
    font-size: 1em;
  }
`;

const fadeOut = keyframes`
  0%   { opacity: 1; }
  100% { opacity: 0; }
`;

const fadeIn = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

const sway1 = keyframes`
  50% { transform: translate(3vw); }
  100% { transform: translate(0); }
`;

const sway2 = keyframes`
  50% { transform: translate(0, 3vh); }
  100% { transform: translate(0, 0); }
`;

const slide1 = keyframes`
  0% { transform: translate(0); }
  100% { transform: translate(-100vw); }
`;

const slide2 = keyframes`
  0% { transform: translate(-200vw); }
  100% { transform: translate(-100vw); }
`;

const slide3 = keyframes`
  0% { transform: translate(-100vw); }
  100% { transform: translate(0); }
`;

const slide4 = keyframes`
  0% { transform: translate(-100vw); }
  100% { transform: translate(-200vw); }
`;

const Content = Styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
`;

const SubContent = Styled.div`
  width: 100%;
  display: grid;
  margin-top: 100px;
  grid-template-columns: 100px 2.5fr 0.5fr 1fr 1fr 0.4fr;
  grid-template-rows: 500px 200px 300px 300px 900px;
  @media(max-width: 2200px) {
    grid-template-rows: 500px 200px 300px 300px 700px;
  }
  @media(max-width: 1800px) {
    grid-template-rows: 500px 200px 300px 300px 500px;
  }
  @media(max-width: 1600px) {
    grid-template-rows: 500px 300px 850px;
  }
  @media(max-width: 1400px) {
    grid-template-columns: 100px 1fr 1fr 1fr 1fr 0.3fr;
    grid-template-rows: 400px 400px 50vw;
  }
  @media(max-width: 1100px) {
    grid-template-columns: 100px 0.8fr 1fr 1fr 0.3fr;
    grid-template-rows: 400px 400px 400px 400px 700px;
  }
  @media(max-width: 900px) {
    grid-template-columns: 100vw;
    grid-template-rows: 90vw 40vw 1200px;
    justify-items: center;
  }
  @media(max-width: 700px) {
    grid-template-rows: 90vw 200px 150px 1200px;
  }
  @media(max-width: 600px) {
    grid-template-rows: 90vw 100px 200px 1500px;
  }
  @media(max-width: 450px) {
    grid-template-rows: 90vw 100px 1300px;
  }
`;

const Tagline = Styled.img`
  z-index: 20;
  overflow: hidden;
  height: 35vh;
  margin: 20vh 20px 0 20px;

  @media(max-width: 1000px) {
    width: 60vw;
    margin-top: 100px;
  }
`;

const TaglineText = Styled.div`
  z-index: 20;
  margin-top: 5vh;
  margin-bottom: 36vh;
  font-size: 3vh;
  @media(max-width: 400px) {
      margin-top: 0;
      font-size: 2.5vh;
  }

  text-align: center;
`;

const BackgroundDecor = Styled.img.attrs(props => props.style)`
  position: absolute;
  width: 12vw;
  pointer-events: visiblePainted;
  animation: ${p => (p.src.includes('plane') ? sway2 : sway1)} 8s ease-in-out ${p => `${-(p.uid * 2).toString()}s`} infinite;
  &:hover{
    cursor: 'default';
  }

  @media(max-width: 900px) {
    display: ${p => (p.mobileStyle ? 'visible' : 'none')};
    margin: ${p => (p.mobileStyle ? p.mobileStyle.margin : null)};
    clip-path: ${p => (p.isMobile && p.mobileStyle ? p.mobileStyle.clipPath : null)};
    background: ${p => (p.isMobile && p.mobileStyle ? p.mobileStyle.background : null)};
    /* position: static; */
    width: 20vw;
  }

  @media(max-width: 700px) {
    width: 35vw;
  }
`;

const City = Styled.img`
  height: 100%;
  z-index: 1;
  grid-area: 1 / 1 / 4 / 4;
  justify-self: start;
  @media(max-width: 1800px) {
    height: auto;
    width: 100%;
    grid-area: 1 / 1 / 4 / 3;
  }
  @media(max-width: 1400px) {
    grid-area: 1/1/3/4;
    height: 100%;
    width: auto;
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

const Backdrop = Styled.div`
  background-image: url(${backdrop});
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
    grid-area: 2/4/6/6;
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
  font-size: 3em;
  @media(max-width: 900px) {
    font-size: 1.5em;
  }
  padding: 30px 0 10px 0;
  color: #9C1641;
`;

const Description = Styled.div`
  font-size: 1.5em;
  @media(max-width: 900px) {
    font-size: 1em;
  }
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
  .faqOut{
    animation: ${fadeOut} 0.2s ease-in forwards;
  }
  .faqIn{
    animation: ${fadeIn} 0.2s ease-out forwards;
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
  const p = props.position * 105;
  return {
    style: {
      transform: `translate(${p}vw)`,
    },
  };
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
  grid-area: 1/1/1/1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8em 5em 5em 8em;
  margin: 2em auto;
  font-size: 16px;
`;

const Pole = Styled.div`
  background-color: #222B5F;
  grid-area: 1/1/1/1;
  z-index: 0;
  width: 1vw;
  margin: 0 auto;
  max-height: 500px;
  position: relative;
`;

const SignBush = Styled.img`
  z-index: 10;
  width: 12em;
  position: absolute;
  bottom: 0;
  transform: translate(-45%, 2px);

`;

const Clickable = Styled.div.attrs(props => {
  if (props.isFAQ) {
    return {
      style: {
        color: '#FFF',
        backgroundColor: '#285163',
        clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)',
      },
    };
  }
  return {
    style: {
      transition: '0.2s',
      backgroundColor: props.selected ? '#E28B79' : '#FBF4EA',
    },
  };
})`
  z-index: 1;
  letter-spacing: 0.1em;
  font-family: Montserrat;
  font-style: normal;
  font-size: 1.6em;
  text-align: center;
  text-transform: uppercase;
  padding-top: 0.3em;
  width: 7em;
  height: 1.6em;
  border-radius: 2px;
  color: #222B5C;
  transform: ${p => `rotate(${p.rotation}deg)`};

  &:hover {
    cursor: ${p => (p.isFAQ ? 'default' : 'pointer')};
  }
`;

const FAQHeightMaintainer = Styled.div`
  display: grid;
  grid-template-columns: 100vw;
  overflow: hidden;
  padding-top: 10px;
  background: #4B8655;
  @media(max-width: 900px) {
    display: none;
  }
  @media(min-width: 1650px) {
    max-height: 600px;
  }
`;

const FAQMaxHeight = Styled.div`
  display: flex;
  flex-direction: row;
  grid-area: 1/1/2/2;
  width: 300vw;
  visibility: hidden;
`;

const FAQPlaceholder = Styled.div`
  width: 100vw;
`;
const FAQContainer = Styled.div`
  z-index: 61;
  overflow: hidden;
  padding: 2vw 0 9vw 0;
  display: grid;
  grid-area: 1/1/2/2;
  grid-template-columns: 1fr 1fr 1fr 1fr 4vw;
  color: white;
  width: 100vw;

  @media(max-width: 3000px) {
    padding-bottom: 1vw;
  }
  @media(max-width: 2500px) {
    padding-bottom: 1vw;
  }
  @media(max-width: 900px) {
    grid-template-columns: 1fr;
    display: none;
  }
  @media(max-width: 650px) {
    padding: 40px 0;
  }
`;

const FAQTitle = Styled.div`
  padding: 16px;
  font-size: 18px;
  a {
    color: white;
  }
`;

const FAQMobileWrapper = Styled.div`
  @media(max-width: 900px) {
    display: flex;
  }
  flex-direction: row;
  display: none;
  background: #4B8655;
  padding-bottom: 9vw;
  padding-top: 20px;
  color: white;
  width: 300vw;
  animation: ${p => (p.transition.includes('General')
    ? (p.transition.includes('reverse') ? slide1 : slide3)
    : (p.transition.includes('reverse') ? slide2 : slide4))} 0.7s ease-in-out forwards;
`;

const FAQMobileContainer = Styled.div`
  width: 100vw;
  display: grid;
  padding: 0 3vw;
  grid-template-rows: 2.5rem 1fr;
  font-size: calc(20px + 2vw);
`;

const FAQMobileHeader = Styled.div`
  grid-area: 1/1/2/2;
  text-align: center;
`;

const FAQMobileTitleContainer = Styled.div`
  padding-top: 20px;
  grid-area: 2/1/3/2;
`;

const FAQMobileArrows = Styled.div.attrs(props => ({ style: { left: props.isLeft ? '5vw' : '95vw' } }))`
  @media(max-width: 900px) {
    display: block
  }
  display: none;
  z-index: 10;
  font-size: calc(20px + 2vw);
  margin-top: 17px;
  position: absolute;
  color: white;
  opacity: 70%;
  visibility: ${p => (p.invisible ? 'hidden' : null)};

  &:hover{
    cursor: pointer;
  }
`;

const BoldDiv = Styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`;

const Sponsors = Styled.div`
  background: #4B8655;
  width: 100vw;
  margin: -10px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
`;

const SponsorWrapper = Styled.div`
  background: #EEE8E0;
  width: 80vw;
  display: grid;
  margin: 250px 30px 25px 30px;
  overflow: visible;
  position: relative;
  padding: 100px 20px 60px 20px;
  grid-template-columns: ${props => props.cols};
  grid-row-gap: 30px;
  grid-column-gap: 40px;
  justify-items: center;
  align-items: center;
  max-width: 1000px;
  @media(max-width: 800px) {
    margin: 150px 30px 25px 30px;
    padding: 75px 20px 40px 20px;
  }
  @media(max-width: 475px) {
    margin: 100px 30px 25px 30px;
    padding: 50px 20px 20px 20px;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }
  @media(max-width: 325px) {
    margin: 50px 30px 25px 30px;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }
`;

const SponsorMascot = Styled.img`
  width: ${props => props.width};
  top: ${props => `${props.top}%`};
  position: absolute;
  min-width: ${props => props.minwidth};
  left: 50%;
  transform: translate(-50%);
  @media(max-width: 800px) {
    top: ${props => `${props.top + 10}%`};
  }
  @media(max-width: 475px) {
    top: ${props => `${props.top + 15}%`};
  }
  @media(max-width: 325px) {
    top: ${props => `${props.top + 20}%`};
  }
`;

const SponsorLogo = Styled.img`
  width: 80%;
  padding: 10px;
  max-height: 150px;
`;

const HackIllLogo = Styled.img`
  width: 100px;
  margin-top: 250px;
  margin-bottom: 25px;
`;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PREV_FAQ: '',
      FAQ_STATE: 'General',
      CAR_POS: 0,
      FAQ_ANIMATION: '',
      IS_MOBILE: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.changeFAQ = this.changeFAQ.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  changeFAQ(title) {
    setTimeout(() => { this.setState({ FAQ_STATE: title }); }, 200);
    this.setState({ FAQ_ANIMATION: 'faqOut' });
    setTimeout(() => { this.setState({ FAQ_ANIMATION: 'faqIn' }); }, 200);
    setTimeout(() => { this.setState({ FAQ_ANIMATION: '' }); }, 400);
  }

  handleScroll() {
    const h = window.innerHeight;
    const carRect = document.getElementById('car').getBoundingClientRect();
    const carPos = carRect.top < h ? (1 - carRect.top / h) : 0;
    this.setState({ CAR_POS: carPos });
  }

  scrollRight() {
    if (this.state.FAQ_STATE === 'General') {
      this.setState({ FAQ_STATE: 'Before', PREV_FAQ: 'General' });
    }
    if (this.state.FAQ_STATE === 'Before') {
      this.setState({ FAQ_STATE: 'During', PREV_FAQ: 'Before' });
    }
  }

  scrollLeft() {
    if (this.state.FAQ_STATE === 'During') {
      this.setState({ FAQ_STATE: 'Before', PREV_FAQ: 'During' });
    }
    if (this.state.FAQ_STATE === 'Before') {
      this.setState({ FAQ_STATE: 'General', PREV_FAQ: 'Before' });
    }
  }

  render() {
    const {
      FAQ_STATE, PREV_FAQ, CAR_POS, IS_MOBILE, FAQ_ANIMATION,
    } = this.state;
    return (
      <Container>
        <NavBar />
        <Content>
          <Tagline src={tagline} alt="tagline" />
          <TaglineText>
            FEBRUARY 28 – MARCH 1, 2020
          </TaglineText>
          {BACKGROUND_DECOR.map(e => (
            <BackgroundDecor
              key={e.id}
              uid={e.id}
              isMobile={IS_MOBILE}
              src={e.img}
              style={e.style}
              mobileStyle={e.mobileStyle}
            />
          ))}
          <SubContent>
            <City src={city} />
            <Backdrop />
            <DescriptionContainer>
              {DESCRIPTIONS.map(e => (
                <div key={e.title}>
                  <DescriptionTitle>{e.title}</DescriptionTitle>
                  <Description>{e.body}</Description>
                </div>
              ))}
            </DescriptionContainer>
          </SubContent>
          <GroundContent>
            <RoadWrapper>
              <BackgroundRoad src={backgroundRoad} alt="backgroundRoad" />
              <Car id="car" src={car} alt="car" position={CAR_POS} />
              <ForegroundBush src={foregroundBush} alt="foregroundBush" />
            </RoadWrapper>
            <FAQMobileArrows
              invisible={FAQ_STATE === CLICKABLES[0].title}
              isLeft
              onClick={this.scrollLeft}
            >&#8249;
            </FAQMobileArrows>
            <FAQMobileArrows
              invisible={FAQ_STATE === CLICKABLES[CLICKABLES.length - 1].title}
              onClick={this.scrollRight}
            >&#8250;
            </FAQMobileArrows>
            <FAQHeightMaintainer>
              <FAQMaxHeight>
                {Object.keys(FAQ_PANELS).map(k => (
                  <FAQPlaceholder key={k}>
                    {FAQ_PANELS[k].content.map(e => (
                      <FAQTitle key={e[0].q}>
                        {e.map(f => (
                          <div key={f.q}>
                            <BoldDiv>{f.q}</BoldDiv>{f.a}<br /><br />
                          </div>
                        ))}
                      </FAQTitle>
                    ))}
                  </FAQPlaceholder>
                ))}
              </FAQMaxHeight>
              <FAQContainer>
                <Pole>
                  <SignBush src={signBush} alt="bush" />
                </Pole>
                <TimeWrapper>
                  <Clickable isFAQ rotation="-3">
                    FAQ
                  </Clickable>
                  {CLICKABLES.map(e => (
                    <Clickable
                      key={e.title}
                      onClick={() => this.changeFAQ(e.title)}
                      selected={FAQ_STATE === e.title}
                      rotation={e.rotation}
                    >
                      {e.title}
                    </Clickable>
                  ))}
                </TimeWrapper>
                {FAQ_PANELS[FAQ_STATE].content.map(e => (
                  <FAQTitle key={e[0].q} className={FAQ_ANIMATION}>
                    {e.map(f => (
                      <div key={f.q}>
                        <BoldDiv>{f.q}</BoldDiv>{f.a}{f.l && <a href={f.l.path}>{f.l.text}</a>}
                        <br /><br />
                      </div>
                    ))}
                  </FAQTitle>
                ))}
              </FAQContainer>
            </FAQHeightMaintainer>
            <FAQMobileWrapper transition={FAQ_STATE !== 'Before' ? FAQ_STATE : (`${PREV_FAQ}reverse`)}>
              {Object.keys(FAQ_PANELS).map(e => (
                <FAQMobileContainer key={e}>
                  <FAQMobileHeader>
                    {e}
                  </FAQMobileHeader>
                  <FAQMobileTitleContainer>
                    <FAQTitle>
                      {FAQ_PANELS[e].content.map(f => (
                        f.map(g => (
                          <div key={g.q}>
                            <br />
                            <BoldDiv>{g.q}</BoldDiv>{g.a}{g.l && <a href={g.l.path}>{g.l.text}</a>}
                          </div>
                        ))
                      ))}
                    </FAQTitle>
                  </FAQMobileTitleContainer>
                </FAQMobileContainer>
              ))}
            </FAQMobileWrapper>
          </GroundContent>
        </Content>
        <Sponsors>
          <SponsorWrapper cols="1fr 1fr">
            <SponsorMascot top={-35} width="27%" src={sponsorBus} />
            {BusSponsors.map(s => (
              <SponsorLogo src={s} key={s} />
            ))}
          </SponsorWrapper>
          <SponsorWrapper cols="1fr 1fr 1fr">
            <SponsorMascot top={-25} width="25%" src={sponsorCar} />
            {CarSponsors.map(s => (
              <SponsorLogo src={s} key={s} />
            ))}
          </SponsorWrapper>
          <SponsorWrapper cols="1fr 1fr 1fr 1fr">
            <SponsorMascot top={-35} width="15%" src={sponsorBike} />
            {BikeSponsors.map(s => (
              <SponsorLogo src={s} key={s} />
            ))}
          </SponsorWrapper>
          <HackIllLogo src={logo} alt="" />
        </Sponsors>
      </Container>
    );
  }
}
