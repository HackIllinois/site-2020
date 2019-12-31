import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import backdrop from 'assets/home/backdrop.svg';
import backgroundRoad from 'assets/home/background_road.svg';
import bg from 'assets/home/background.png';
import car from 'assets/home/car.svg';
import city from 'assets/home/city.svg';
import foregroundBush from 'assets/home/foreground_bushes.svg';
import logo from 'assets/home/logo.svg';
import tagline from 'assets/home/tagline.svg';

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
  background-position: left top;
  background-size: cover;
  
  @media(min-width: 1100px) {
    font-size: 0.8vw;
  }

  @media(min-width: 2200px) {
    font-size: 1em;
  }
`;

const Logo = Styled.img`
  width: 10vw;
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
    grid-template-rows: 300px 400px 500px;
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
  z-index: 20;
  overflow: hidden;
  height: 40vh;
  margin-top: 15vh;
  margin-left: 20px;
  margin-right: 20px;
  
  @media(max-width: 900px) {
    height: auto;
    margin-top: 100px;
    width: 70vw;
  }
  @media(max-width: 600px) {
    width: 85vw;
  }
  @media(max-width: 375px) {
    margin-top: 100px;
  }
`;

const TaglineText = Styled.div`
  z-index: 20;
  margin-top: 5vh;
  font-size: 2em;
  text-align: center;
  @media(min-width: 2000px) {
    font-size: 2em;
  }
`;

const Sponsor = Styled.div`
  height: 15vh;
  margin: 5vh;
`;

const CenterButton = Styled.button`
  font-size: 1.5em;
  color: white;
  background-color: #A43B5C;
  padding: 1rem 2em;
  border-radius: 3em;
  transition: transform 1s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const StyledCenterButton = ({ style }) => (
  <Link style={style} to="/apply">
    <CenterButton>
      APPLY NOW &nbsp;&#10132;
    </CenterButton>
  </Link>
);

const CenterLink = Styled(StyledCenterButton)`
  border-radius: 30px;
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
    position: static;
    width: 12vw;
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
  padding: 30px 0 10px 0;
  color: #9C1641;
`;

const Description = Styled.div`
  font-size: 1.5em;
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
  const p = props.position - 50;
  return {
    style: {
      transform: `translate(${p > 0 ? p * 2 : 0}vw)`,
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
  grid-template-rows: 5em 5em 5em 5em;
  margin: 2em auto;
  font-size: 16px;
`;

const Pole = Styled.div`
  background-color: #222B5F;
  grid-area: 1/1/1/1;
  z-index: 0;
  width: 1em;
  margin: 0 auto;
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
    cursor: pointer;
  }
`;

const FAQHeightMaintainer = Styled.div`
  display: grid;
  grid-template-columns: 100vw;
  overflow: hidden;
  padding-top: 40px;
  background: #4B8655;
  @media(max-width: 900px) {
    display: none;
  }
`;

const FAQMaxHeight = Styled.div`
  display: flex;
  flex-direction: row;
  grid-area: 1/1/2/2;
  width: 210vw;
  opacity: 0;
`;

const FAQPlaceholder = Styled.div`
  width: 70vw;
`;
const FAQContainer = Styled.div`
  z-index: 61;
  overflow: hidden;
  padding-bottom: 9vw;
  display: grid;
  grid-area: 1/1/2/2;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: white;
  width: 100vw;
  @media(max-width: 3000px) {
    padding-bottom: 7vw;
  }
  @media(max-width: 2500px) {
    padding-bottom: 5vw;
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
  padding: 10px;
  font-size: 18px;
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
  font-size: calc(20px + 5vw);
  position: absolute;
  color: white;
  opacity: 70%;
  visibility: ${p => (p.invisible ? 'hidden' : null)};

  &:hover{
    cursor: pointer;
  }
`;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PREV_FAQ: '',
      FAQ_STATE: 'General',
      SCROLL_POS: 0,
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
    const h = document.body.clientHeight;
    const st = document.body.scrollTop;
    const sh = document.body.scrollHeight;
    this.setState({ SCROLL_POS: (st / (sh - h)) * 100 });
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
      FAQ_STATE, PREV_FAQ, SCROLL_POS, IS_MOBILE, FAQ_ANIMATION,
    } = this.state;
    return (
      <Container>
        <Logo src={logo} />
        <Content>
          <Tagline src={tagline} alt="tagline" />
          <TaglineText>
            FEBRUARY 28 – MARCH 1, 2020
          </TaglineText>
          <Sponsor />
          <CenterLink />
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
              <Car src={car} alt="car" position={SCROLL_POS} />
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
                <FAQPlaceholder>
                  {FAQ_PANELS.General.content.map(e => (
                    <FAQTitle key={e[0].q}>
                      {e.map(f => (
                        <div key={f.q}>
                          <b>{f.q}</b><br />{f.a}<br /><br />
                        </div>
                      ))}
                    </FAQTitle>
                  ))}
                </FAQPlaceholder>
                <FAQPlaceholder>
                  {FAQ_PANELS.Before.content.map(e => (
                    <FAQTitle key={e[0].q}>
                      {e.map(f => (
                        <div key={f.q}>
                          <b>{f.q}</b><br />{f.a}<br /><br />
                        </div>
                      ))}
                    </FAQTitle>
                  ))}
                </FAQPlaceholder>
                <FAQPlaceholder>
                  {FAQ_PANELS.During.content.map(e => (
                    <FAQTitle key={e[0].q}>
                      {e.map(f => (
                        <div key={f.q}>
                          <b>{f.q}</b><br />{f.a}<br /><br />
                        </div>
                      ))}
                    </FAQTitle>
                  ))}
                </FAQPlaceholder>
              </FAQMaxHeight>
              <FAQContainer>
                <Pole />
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
                        <b>{f.q}</b><br />{f.a}<br /><br />
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
                    {FAQ_PANELS[e].content.map(f => (
                      <FAQTitle key={f[0].q}>
                        {f.map(g => (
                          <div key={g.q}>
                            <b>{g.q}</b><br />{g.a}<br /><br />
                          </div>
                        ))}
                      </FAQTitle>
                    ))}
                  </FAQMobileTitleContainer>
                </FAQMobileContainer>
              ))}
            </FAQMobileWrapper>
          </GroundContent>
        </Content>
      </Container>
    );
  }
}
