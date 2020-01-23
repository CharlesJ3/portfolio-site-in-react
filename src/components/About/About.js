import React from 'react';
import '../About/About.css';
import styled from 'styled-components';

const AboutDetails = styled.div`
  position: absolute;
  top: 2%;
  left: 22%;
  width: 77vw;
  height: 95vh;
  border: 4px solid rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, 1);
  z-index: 1;
  box-shadow: inset 0px 0px 10px rgb(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B});
  animation: ${props => props.currentMenu === 1 && props.updatePos === 3 ? 'showMe' : ''} 1.5s ease-in;
  transition: border 2300ms ease-in-out;
  display: ${props => props.currentMenu === 1 && props.updatePos === 3 ? 'inherit' : 'none'};
  background: linear-gradient(
    90deg,
    rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, .1) 0%,
    rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, .1) 100%);
`;

const About = (props) => {
 return (
  <AboutDetails
    colors={props.colors}
    updatePos={props.updatePos}
    currentMenu={props.currentMenu}
  >
    <div id="aboutWrapper">

      {/* Upper Left Section */}
      <div className="aboutContainer" id="aboutMain">
        <div className="aboutImageContainer">
          <img
            className="aboutContainer"
            id="about1"
            src="../images/aboutImage1.jpg"
            alt="">
          </img>
          <img
            className="aboutContainer"
            id="about2"
            src="../images/aboutImage2.jpg"
            alt="">
          </img>
        </div>
        <div><h2>HELLO WORLD!</h2>
          <img alt="" className="aboutCubey" id="aboutCubey1" src="../images/UI/aboutCubey1.png"></img>
          <p>
          I'm Charles. I do full-stack development, along with some random design when needed. I'm a developer, a veteran,
          a father, and a constant learner. Report a bug or contact
          me <a href="mailto:c.jones.3.zero@gmail.com">here!</a>
          </p>
          <img alt="" className="aboutCubey" id="aboutCubey2" src="../images/UI/aboutCubey2.png"></img>
        </div>
          <br></br>
      </div>

      {/* Upper Right Section */}
        <video className="aboutContainer" id="aboutPic1" width="100%" height="100%" autoPlay loop src="../images/Spells/Videos/Earth0.mp4" />
        <video className="aboutContainer" id="aboutPic2" width="100%" height="100%" autoPlay loop src="../images/Spells/Videos/Rain1.mp4" />
        <video className="aboutContainer" id="aboutPic3" width="100%" height="100%" autoPlay loop src="../images/Spells/Videos/Lightning0.mp4" />

      {/* Bottom Left Section */}
        <img alt="" className="aboutContainer" id="aboutPic4" src="../images/Art Weather Boss 2.gif"></img>
        <img alt="" className="aboutContainer" id="aboutPic5" src="../images/Art Group 1.gif"></img>
        <img alt="" className="aboutContainer" id="aboutPic6" src="../images/Art Weather Boss 3.gif"></img>
    </div>
  </AboutDetails>
 )
}

export default About;