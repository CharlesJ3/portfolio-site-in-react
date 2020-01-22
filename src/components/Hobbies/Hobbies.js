import React from 'react';
import '../Hobbies/Hobbies.css';
import styled from 'styled-components';

const HobbiesDetails = styled.div`
  position: absolute;
  top: 2%;
  left: 22%;
  width: 77vw;
  height: 95vh;
  border: 4px solid rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, 1);
  z-index: 1;
  box-shadow: inset 0px 0px 10px rgb(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B});
  animation: ${props => props.currentMenu === 4 && props.updatePos === 3 ? 'showMe3' : ''} 1.5s ease-in;
  transition: border 2300ms ease-in-out;
  display: ${props => props.currentMenu === 4 && props.updatePos === 3 ? 'inherit' : 'none'};
  background: linear-gradient(
    90deg,
    rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, .1) 0%,
    rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, .1) 100%);
`;

const Hobbies = (props) => {
 return (
  <HobbiesDetails
    colors={props.colors}
    updatePos={props.updatePos}
    currentMenu={props.currentMenu}
  >
    <div id="hobbyContainer">
      <div id="rain">
        <img className="hobbyCubey" id="hobbyCubey1" src="../images/UI/hobbyCubey1.png"></img>
        <img className="hobbyCubey" id="hobbyCubey2" src="../images/UI/hobbyCubey1.png"></img>
        <img className="hobbyCubey" id="hobbyCubey3" src="../images/UI/hobbyCubey1.png"></img>
        <img className="hobbyCubey" id="hobbyCubey4" src="../images/UI/hobbyCubey1.png"></img>
        <img className="hobbyCubey" id="hobbyCubey5" src="../images/UI/hobbyCubey1.png"></img>
        <img className="hobbyCubey" id="hobbyCubeyUp" src="../images/UI/hobbyCubey2.png"></img>

      </div>

      <div>
      {/* PUT HOBBY STUFF HERE */}

      </div>


    </div>
  </HobbiesDetails>
 )
}

export default Hobbies;