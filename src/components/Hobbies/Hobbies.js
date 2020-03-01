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
        <img alt="falling cubey 1" className="hobbyCubey" id="hobbyCubey1" src="../images/UI/hobbyCubey1.png"></img>
        <img alt="falling cubey 2" className="hobbyCubey" id="hobbyCubey2" src="../images/UI/hobbyCubey1.png"></img>
        <img alt="falling cubey 3" className="hobbyCubey" id="hobbyCubey3" src="../images/UI/hobbyCubey1.png"></img>
        <img alt="falling cubey 4" className="hobbyCubey" id="hobbyCubey4" src="../images/UI/hobbyCubey1.png"></img>
        <img alt="falling cubey 5" className="hobbyCubey" id="hobbyCubey5" src="../images/UI/hobbyCubey1.png"></img>
        <img alt="falling cubey 6" className="hobbyCubey" id="hobbyCubeyUp" src="../images/UI/hobbyCubey2.png"></img>

      </div>

      <div class="hobbieMain">
        <div class="hobbiesActual">
          <h2 class="hobbiesTitle" alt="title">Hobbies!</h2>
          <p>2020 Goals</p>
            <ul>
              <li><span class="highlight">Weightlifting</span> - 1000 Pound club by July</li>
              <li><span class="highlight">Gaming</span> - Finish and launch my second game</li>
              <li><span class="highlight">Family</span> - Take my kids to Texas for Vacation</li>
            </ul>
        </div>
        <div class="hobbiesLinks">
          <h2 class="hobbiesTitle" alt="title">Links!</h2>
          <p>
            <a href="https://idle-weather.herokuapp.com/">Idle Weather (pre-pre-Alpha!)</a><br />
            <a href="https://github.com/CharlesJ3" target="_blank" rel="noopener noreferrer">Github</a><br />
            <a href="https://codepen.io/CharlesJ3/" target="_blank" rel="noopener noreferrer">Codepen</a><br />
            <a href="https://www.codewars.com/users/CharlesJ3" target="_blank" rel="noopener noreferrer">Codewars!</a><br />
            <a href="http://charlesjones.me/" target="_blank" rel="noopener noreferrer">Old Portfolio Site!</a><br />
          </p>
        </div>
        <div class="hobbiesContact">
          <h2 class="hobbiesTitle" alt="title">Contacts!</h2>
          <p>
            <a href="mailto:c.jones.3.zero@gmail.com">Email</a><br />
            <a href="https://www.linkedin.com/in/charlesjonesiii/" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
            <a href="https://github.com/CharlesJ3" target="_blank" rel="noopener noreferrer">Github</a><br />
            <a href="https://www.kongregate.com/accounts/Shadowxblade" target="_blank" rel="noopener noreferrer">Kongregate</a><br />
          </p>
        </div>
      </div>
    </div>
  </HobbiesDetails>
 )
}

export default Hobbies;