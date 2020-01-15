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
        <div className="aboutContainer" id="about1">
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum vestibulum sapien eget sollicitudin.
          Nam viverra, sapien sed volutpat imperdiet, dui justo sagittis ante, non tincidunt velit ligula nec massa.
          Integer dapibus pharetra nisl vitae tristique. Fusce tristique eros ut iaculis mollis.
          Vivamus elementum lacus venenatis diam ultrices varius.
          Proin maximus fermentum faucibus. Vivamus lobortis eu lacus eget feugiat.
          Maecenas tincidunt nisl lorem, at rhoncus metus finibus vel. Sed ex quam, pretium eu finibus eget, sollicitudin vel est.
        </p>
      </div>

      {/* Upper Right Section */}
      <div className="aboutContainer" id="aboutPic1"></div>
      <div className="aboutContainer" id="aboutPic2"></div>
      <div className="aboutContainer" id="aboutPic3"></div>

      {/* Bottom Left Section */}
      <div className="aboutContainer" id="aboutPic4"></div>
      <div className="aboutContainer" id="aboutPic5"></div>
      <div className="aboutContainer" id="aboutPic6"></div>
    </div>
  </AboutDetails>
 )
}

export default About;