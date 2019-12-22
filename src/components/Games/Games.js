import React from 'react';
import '../Games/Games.css';
import styled from 'styled-components';

const GamesDetails = styled.div`
  position: absolute;
  top: 2%;
  left: 22%;
  width: 77vw;
  height: 95vh;
  border: 4px solid rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, 1);
  z-index: 1;
  box-shadow: inset 0px 0px 10px rgb(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B});
  animation: ${props => props.currentMenu === 2 && props.updatePos === 3 ? 'showMe5' : ''} 1.5s ease-in;
  transition: border 2300ms ease-in-out;
  display: ${props => props.currentMenu === 2 && props.updatePos === 3 ? 'inherit' : 'none'};
  background: linear-gradient(
    90deg,
    rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, .1) 0%,
    rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, .1) 100%);
`;

const Games = (props) => {
 return (
  <GamesDetails
    colors={props.colors}
    updatePos={props.updatePos}
    currentMenu={props.currentMenu}
  >

  </GamesDetails>
 )
}

export default Games;