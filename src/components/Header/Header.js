import React from 'react';
import '../Header/Header.css';
import styled from 'styled-components';
import About from '../About/About.js';
import Games from '../Games/Games.js';
import Hobbies from '../Hobbies/Hobbies.js';
import Projects from '../Projects/Projects.js';

const Header = (props) => {

  const updateMenu = (menu) => {
    props.updateColors(menu);
  }

  const Container = styled.div`
    position: inherit;
    width: 100vw;
    height: 99vh;
    z-index: -1;
  `;

  const Title = styled.h1`
    color: white;
    font-size: 2.5em;
    text-shadow: 1px 1px 1px rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, 1);
    text-align: center;
    margin-bottom: 1%;
    z-index: 3;
    line-height: 1.35;
  `;

  const Menu1 = styled.div`
    width: 21%;
    height: 95%;
    top: ${props.updatePos ? '2%' : '2%'};
    left: ${props.updatePos ? '2%' : '1%'};
    border-radius: 20px;
    box-shadow: 0px 5px 1px rgb(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B});
    position: absolute;
    z-index: 5;
    font-family: verdana;
    font-weight: bold;
    text-decoration: underline overline;
    text-decoration-style: double;
    text-transform: uppercase;
    text-align: center;
    animation: ${props.updatePos === 1 ? '' : props.updatePos === 2 ? 'reset1 2s linear' : props.updatePos === 3 ? 'reset1 0s linear' : console.log('end of the line!')};
    animation-fill-mode: forwards;
    border: 1px solid rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, 1);
    background: linear-gradient(
      90deg,
      rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, .31) 0%,
      rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, .31) 100%);
  `;

  const Menu2 = styled.div`
    width: 21%;
    height: 95%;
    top: ${props.updatePos ? '2%' : '19%'};
    left: ${props.updatePos ? '27%' : '1%'};
    border-radius: 20px;
    box-shadow: 0px 5px 1px rgb(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B});
    position: absolute;
    z-index: 5;
    font-family: verdana;
    font-weight: bold;
    text-decoration: underline overline;
    text-decoration-style: double;
    text-transform: uppercase;
    text-align: center;
    animation: ${props.updatePos === 1 ? '' : props.updatePos === 2 ? 'reset2 2s linear' : props.updatePos === 3 ? 'reset2 0s linear' : console.log('end of the line!')};
    animation-fill-mode: forwards;
    border: 1px solid rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, 1);
    background: linear-gradient(
      90deg,
      rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, .31) 0%,
      rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, .31) 100%);
  `;

  const Menu3 = styled.div`
    width: 21%;
    height: 95%;
    top: ${props.updatePos ? '2%' : '36%'};
    left: ${props.updatePos ? '52%' : '1%'};
    border-radius: 20px;
    box-shadow: 0px 5px 1px rgb(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B});
    position: absolute;
    z-index: 5;
    font-family: verdana;
    font-weight: bold;
    text-decoration: underline overline;
    text-decoration-style: double;
    text-transform: uppercase;
    text-align: center;
    animation: ${props.updatePos === 1 ? '' : props.updatePos === 2 ? 'reset3 2s linear' : props.updatePos === 3 ? 'reset3 0s linear' : console.log('end of the line!')};
    animation-fill-mode: forwards;
    border: 1px solid rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, 1);
    background: linear-gradient(
      90deg,
      rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, .31) 0%,
      rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, .31) 100%);
  `;

  const Menu4 = styled.div`
    width: 21%;
    height: 95%;
    top: ${props.updatePos ? '2%' : '56%'};
    left: ${props.updatePos ? '76%' : '1%'};
    border-radius: 20px;
    box-shadow: 0px 5px 1px rgb(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B});
    position: absolute;
    z-index: 5;
    font-family: verdana;
    font-weight: bold;
    text-decoration: underline overline;
    text-decoration-style: double;
    text-transform: uppercase;
    text-align: center;
    animation: ${props.updatePos === 1 ? '' : props.updatePos === 2 ? 'reset4 2s linear' : props.updatePos === 3 ? 'reset4 0s linear' : console.log('end of the line!')};
    animation-fill-mode: forwards;
    border: 1px solid rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, 1);
    background: linear-gradient(
      90deg,
      rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, .31) 0%,
      rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, .31) 100%);
  `;
;

  return (

    <Container>

      <Menu1
        colors={props.colors}
        updatePos={props.updatePos}
        className="menuSelect"
        id="menu1"
        onClick={() => updateMenu(1)}>

          <Title colors={props.colors}>
            About Me
          </Title>
          {console.log(props.updatePos)}
          <div className={props.updatePos === 1 ? "aboutMenu1" : "hide"}>
            <div className={props.updatePos === 1 ? "cubeyHi1" : "hide"}>

            </div>
            <img  alt={''} className={props.updatePos === 1 ? "aboutInfo" : "hide"} src="../images/aboutInfo2.png"></img>
            {/* <img className="aboutMenu1Pic" src="../images/aboutMainImages1.gif"></img>
            <img className="aboutMenu2Pic" src="../images/Art Weather 5.gif"></img>
            <img className="aboutMenu3Pic" src="../images/Art Group 1.gif"></img> */}
          </div>
      </Menu1>

      <About
        colors={props.colors}
        updatePos={props.updatePos}
        currentMenu={props.currentMenu}
      />

      <Menu2
        colors={props.colors}
        updatePos={props.updatePos}
        className="menuSelect"
        id="menu2"
        onClick={() => updateMenu(2)}>

        <Title
        colors={props.colors}>
          Games and Art
        </Title>
         <div className={props.updatePos === 1 ? "gamesMenu1" : ""}>
            <div className={props.updatePos === 1 ? "cubeyHi2" : ""}>

        </div>
        <img  alt={''} className={props.updatePos === 1 ? "gamesInfo" : "hide"} src="../images/gameInfo2.png"></img>
          {/* <img className="gamesMenu1Pic" src="../images/aboutMainImages1.gif"></img>
          <img className="gamesMenu2Pic" src="../images/Art Weather 5.gif"></img>
          <img className="gamesMenu3Pic" src="../images/Art Group 1.gif"></img> */}
        </div>
      </Menu2>

      <Games
        colors={props.colors}
        updatePos={props.updatePos}
        currentMenu={props.currentMenu}
      />

      <Menu3
        updatePos={props.updatePos}
        colors={props.colors}
        className="menuSelect"
        id="menu3"
        onClick={() => updateMenu(3)}>
        <Title colors={props.colors}>
          Sites and Projects
        </Title>
        <div className={props.updatePos === 1 ? "projectsMenu1" : ""}>
            <div className={props.updatePos === 1 ? "cubeyHi3" : ""}>

        </div>
        <img alt={''} className={props.updatePos === 1 ? "projectsInfo" : "hide"} src="../images/projectInfo2.png"></img>
          {/* <img className="projectsMenu1Pic" src="../images/aboutMainImages1.gif"></img>
          <img className="projectsMenu2Pic" src="../images/Art Weather 5.gif"></img>
          <img className="projectsMenu3Pic" src="../images/Art Group 1.gif"></img> */}
        </div>
      </Menu3>

      <Projects
        colors={props.colors}
        updatePos={props.updatePos}
        currentMenu={props.currentMenu}
      />

      <Menu4
        updatePos={props.updatePos}
        colors={props.colors}
        className="menuSelect"
        id="menu4"
        onClick={() => updateMenu(4)}>
        <Title colors={props.colors}>
          Hobbies and Links
        </Title>
        <div className={props.updatePos === 1 ? "hobbiesMenu1" : ""}>
            <div className={props.updatePos === 1 ? "cubeyHi4" : ""}>
        </div>
        <img  alt={''} className={props.updatePos === 1 ? "hobbiesInfo" : "hide"} src="../images/hobbiesInfo2.png"></img>
          {/* <img className="hobbiesMenu1Pic" src="../images/aboutMainImages1.gif"></img>
          <img className="hobbiesMenu2Pic" src="../images/Art Weather 5.gif"></img>
          <img className="hobbiesMenu3Pic" src="../images/Art Group 1.gif"></img> */}
        </div>
      </Menu4>

      <Hobbies
        colors={props.colors}
        updatePos={props.updatePos}
        currentMenu={props.currentMenu}
      />
    </Container>
  );
}

export default Header;