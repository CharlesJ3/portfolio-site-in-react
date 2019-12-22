import React from 'react';
import '../Header/Header.css';
import styled from 'styled-components';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
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

  const Title = styled.p`
    color: white;
    font-size: 2em;
    text-shadow: 1px 1px 1px rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, 1);
    text-align: center;
    margin-bottom: 1%;
  `;

  const Menu1 = styled.div`
    width: 20%;
    height: 15%;
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
      rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, 1) 0%,
      rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, 1) 100%);
  `;

  const Menu2 = styled.div`
    width: 20%;
    height: 15%;
    top: ${props.updatePos ? '9%' : '19%'};
    left: ${props.updatePos ? '21%' : '1%'};
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
      rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, 1) 0%,
      rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, 1) 100%);
  `;

  const Menu3 = styled.div`
    width: 20%;
    height: 15%;
    top: ${props.updatePos ? '9%' : '36%'};
    left: ${props.updatePos ? '57%' : '1%'};
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
      rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, 1) 0%,
      rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, 1) 100%);
  `;

  const Menu4 = styled.div`
    width: 20%;
    height: 15%;
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
      rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, 1) 0%,
      rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, 1) 100%);
  `;


  const MiniMenu1 = styled.div`
    width: 5%;
    height: 10%;
    text-shadow: rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, 1) 5px 5px 5px;
    border-radius: 20px;
    box-shadow: rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, 1) 5px 5px 5px;
    color: red;
    position: absolute;
    top: 19%;
    left: 15%;
  `;

  const MiniMenu2 = styled.div`
    width: 5%;
    height: 10%;
    text-shadow: rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, 1) 5px 5px 5px;
    border-radius: 20px;
    box-shadow: rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, 1) 5px 5px 5px;
    color: red;
    position: absolute;
    top: 19%;
    left: 78%;
  `;

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
      </Menu1>
      <About
        colors={props.colors}
        updatePos={props.updatePos}
        currentMenu={props.currentMenu}
      />

      {/* <MiniMenu1 colors={props.colors} className="menuSelect" id="menu5" onClick={updateMenu}>
        <Title colors={props.colors}>HOME</Title>
      </MiniMenu1> */}

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
        <Title colors={props.colors}>Projects</Title>
      </Menu3>

      {console.log(props.currentMenu)};

      <Projects
        colors={props.colors}
        updatePos={props.updatePos}
        currentMenu={props.currentMenu}
      />
        {/* <MiniMenu2
          colors={props.colors}
          className="menuSelect"
          id="menu6"
          onClick={updateMenu}>

          <Title colors={props.colors}>
            Built With
          </Title>
        </MiniMenu2> */}
      <Menu4
        updatePos={props.updatePos}
        colors={props.colors}
        className="menuSelect"
        id="menu4"
        onClick={() => updateMenu(4)}>
        <Title colors={props.colors}>
          Hobbies
        </Title>
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