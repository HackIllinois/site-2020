import React from 'react';
import Styled from 'styled-components';
import bg from 'assets/HackIllinois_temp_background.png';

const Background = Styled.div`
    background-image: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    width: 200%;
    height: 0;
    padding-top: 240%;
`;

export default class Home extends React.Component {
  render() {
    return (
    <div>
        <Background>
        </Background>
    </div>
    );
  }
}
