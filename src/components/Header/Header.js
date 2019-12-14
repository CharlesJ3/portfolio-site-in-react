import React from 'react';
import '../Header/Header.css';
import styled from 'styled-components';

const Menu1 = styled.div`
  width: 20%;
  height: 15%;
  border-radius: 20px;
  box-shadow: 0px 5px 1px maroon;
  position: absolute;
  top: 2%;
  left: 2%;
  z-index: 4;
  font-family: verdana;
  font-weight: bold;
  text-decoration: underline overline;
  text-decoration-style: double;
  text-transform: uppercase;
  text-align: center;
  text-shadow: rgb(0, 0, 0) 2px 2px 2px;
  border: 1px solid rgba(${props => props.colors.color2R}, ${props => props.colors.color2G}, ${props => props.colors.color2B}, 1);
  background: linear-gradient(
    90deg,
    rgba(${props => props.colors.color2R}, ${props => props.colors.color2G}, ${props => props.colors.color2B}, 1) 0%,
    rgba(${props => props.colors.color1R}, ${props => props.colors.color1G}, ${props => props.colors.color1B}, 1) 100%);
`;

const Menu2 = styled.div`
  width: 20%;
  height: 15%;
  border-radius: 20px;
  box-shadow: 0px 5px 1px maroon;
  position: absolute;
  top: 9%;
  left: 21%;
  z-index: 5;
  font-family: verdana;
  font-weight: bold;
  text-decoration: underline overline;
  text-decoration-style: double;
  text-transform: uppercase;
  text-align: center;
  text-shadow: rgb(0, 0, 0) 2px 2px 2px;
  border: 1px solid rgba(${props => props.colors.color2R}, ${props => props.colors.color2G}, ${props => props.colors.color2B}, 1);
  background: linear-gradient(
    90deg,
    rgba(${props => props.colors.color2R}, ${props => props.colors.color2G}, ${props => props.colors.color2B}, 1) 0%,
    rgba(${props => props.colors.color1R}, ${props => props.colors.color1G}, ${props => props.colors.color1B}, 1) 100%);
`;

const Menu3 = styled.div`
  width: 20%;
  height: 15%;
  border-radius: 20px;
  box-shadow: 0px 5px 1px maroon;
  position: absolute;
  top: 9%;
  left: 57%;
  z-index: 5;
  font-family: verdana;
  font-weight: bold;
  text-decoration: underline overline;
  text-decoration-style: double;
  text-transform: uppercase;
  text-align: center;
  text-shadow: rgb(0, 0, 0) 2px 2px 2px;
  border: 1px solid rgba(${props => props.colors.color2R}, ${props => props.colors.color2G}, ${props => props.colors.color2B}, 1);
  background: linear-gradient(
    90deg,
    rgba(${props => props.colors.color2R}, ${props => props.colors.color2G}, ${props => props.colors.color2B}, 1) 0%,
    rgba(${props => props.colors.color1R}, ${props => props.colors.color1G}, ${props => props.colors.color1B}, 1) 100%);
`;

const Menu4 = styled.div`
  width: 20%;
  height: 15%;
  border-radius: 20px;
  box-shadow: 0px 5px 1px maroon;
  position: absolute;
  top: 2%;
  left: 76%;
  z-index: 4;
  font-family: verdana;
  font-weight: bold;
  text-decoration: underline overline;
  text-decoration-style: double;
  text-transform: uppercase;
  text-align: center;
  text-shadow: rgb(0, 0, 0) 2px 2px 2px;
  border: 1px solid rgba(${props => props.colors.color2R}, ${props => props.colors.color2G}, ${props => props.colors.color2B}, 1);
  background: linear-gradient(
    90deg,
    rgba(${props => props.colors.color2R}, ${props => props.colors.color2G}, ${props => props.colors.color2B}, 1) 0%,
    rgba(${props => props.colors.color1R}, ${props => props.colors.color1G}, ${props => props.colors.color1B}, 1) 100%);
`;

const MiniMenu1 = styled.div`
  width: 5%;
  height: 10%;
  /* height: 2em; */
  border-radius: 20px;
  box-shadow: 0px 5px 1px maroon;
  color: red;
  position: absolute;
  top: 19%;
  left: 15%;
`;

const MiniMenu2 = styled.div`
  width: 5%;
  height: 10%;
  /* height: 2em; */
  border-radius: 20px;
  box-shadow: 0px 5px 1px maroon;
  color: red;
  position: absolute;
  top: 19%;
  left: 78%;
`;

const Title = styled.p`
  color: white;
  font-size: 2em;
  text-shadow: 1px 1px 1px rgba(${props => props.colors.color2R}, ${props => props.colors.color2G}, ${props => props.colors.color2B}, 1);
  text-align: center;
  margin-bottom: 1%;
`;

const updateMenu1 = () => {

  document.querySelector('#menu1').className += " reset1";
  document.querySelector('#menu2').className += " reset2";
  document.querySelector('#menu3').className += " reset3";
  document.querySelector('#menu4').className += " reset4";
  document.querySelector('#menu5').className += " resetM1";
  document.querySelector('#menu6').className += " resetM2";

}

export default class Header extends React.Component {
  render() {
    return (
      <div className="test" >
        <Menu1 colors={this.props.colors}
               className="menuSelect" id="menu1" onClick={updateMenu1}
               >
          <Title colors={this.props.colors}>About Me</Title>
        </Menu1>
          <MiniMenu1 className="menuSelect" id="menu5" onClick={updateMenu1}>
            <Title colors={this.props.colors}>HOME</Title>
          </MiniMenu1>
        <Menu2 colors={this.props.colors}
               className="menuSelect" id="menu2" onClick={updateMenu1}
               >
          <Title colors={this.props.colors}>Games I've Built</Title>
        </Menu2>
        <Menu3 colors={this.props.colors}
               className="menuSelect" id="menu3" onClick={updateMenu1}
               >
          <Title colors={this.props.colors}>Projects</Title>
        </Menu3>
          <MiniMenu2 className="menuSelect" id="menu6" onClick={updateMenu1}>
            <Title colors={this.props.colors}>Built With</Title>
          </MiniMenu2>
        <Menu4 colors={this.props.colors}
               className="menuSelect" id="menu4" onClick={updateMenu1}
               >
          <Title colors={this.props.colors}>Hobbies</Title>
        </Menu4>
        {console.log(this.props.colors.color7R)}
      </div>
    );
  }
}