import React from 'react';
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
  border: 1px solid rgba(${props => props.color2R}, ${props => props.color2G}, ${props => props.color2B}, 1);
  background: linear-gradient(
    90deg,
    rgba(${props => props.color2R}, ${props => props.color2G}, ${props => props.color2B}, 1) 0%,
    rgba(${props => props.color1R}, ${props => props.color1G}, ${props => props.color1B}, 1) 100%);
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
  border: 1px solid rgba(${props => props.color2R}, ${props => props.color2G}, ${props => props.color2B}, 1);
  background: linear-gradient(
    90deg,
    rgba(${props => props.color2R}, ${props => props.color2G}, ${props => props.color2B}, 1) 0%,
    rgba(${props => props.color1R}, ${props => props.color1G}, ${props => props.color1B}, 1) 100%);
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
  border: 1px solid rgba(${props => props.color2R}, ${props => props.color2G}, ${props => props.color2B}, 1);
  background: linear-gradient(
    90deg,
    rgba(${props => props.color2R}, ${props => props.color2G}, ${props => props.color2B}, 1) 0%,
    rgba(${props => props.color1R}, ${props => props.color1G}, ${props => props.color1B}, 1) 100%);
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
  border: 1px solid rgba(${props => props.color2R}, ${props => props.color2G}, ${props => props.color2B}, 1);
  background: linear-gradient(
    90deg,
    rgba(${props => props.color2R}, ${props => props.color2G}, ${props => props.color2B}, 1) 0%,
    rgba(${props => props.color1R}, ${props => props.color1G}, ${props => props.color1B}, 1) 100%);
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
  text-shadow: 1px 1px 1px rgba(${props => props.color2R}, ${props => props.color2G}, ${props => props.color2B}, 1);
  text-align: center;
  margin-bottom: 1%;
`;

export default class Header extends React.Component {
  render() {
    return (
      <div className="test">
        <Menu1 color1R={this.props.color1R} color1B={this.props.color1B} color1G={this.props.color1G}
               color2R={this.props.color2R} color2B={this.props.color2B} color2G={this.props.color2G}  >
          <Title color1R={this.props.color1R} color1B={this.props.color1B} color1G={this.props.color1G}
                 color2R={this.props.color2R} color2B={this.props.color2B} color2G={this.props.color2G}>About Me</Title>
        </Menu1>
          <MiniMenu1>
            <Title>...</Title>
          </MiniMenu1>
        <Menu2 color1R={this.props.color1R} color1B={this.props.color1B} color1G={this.props.color1G}
               color2R={this.props.color2R} color2B={this.props.color2B} color2G={this.props.color2G} >
          <Title color1R={this.props.color1R} color1B={this.props.color1B} color1G={this.props.color1G}
                 color2R={this.props.color2R} color2B={this.props.color2B} color2G={this.props.color2G}>Games I've Built</Title>
        </Menu2>
        <Menu3 color1R={this.props.color1R} color1B={this.props.color1B} color1G={this.props.color1G}
               color2R={this.props.color2R} color2B={this.props.color2B} color2G={this.props.color2G} >
          <Title color1R={this.props.color1R} color1B={this.props.color1B} color1G={this.props.color1G}
                 color2R={this.props.color2R} color2B={this.props.color2B} color2G={this.props.color2G}>Projects</Title>
        </Menu3>
          <MiniMenu2>
            <Title>...</Title>
          </MiniMenu2>
        <Menu4 color1R={this.props.color1R} color1B={this.props.color1B} color1G={this.props.color1G}
               color2R={this.props.color2R} color2B={this.props.color2B} color2G={this.props.color2G} >
          <Title color1R={this.props.color1R} color1B={this.props.color1B} color1G={this.props.color1G}
                 color2R={this.props.color2R} color2B={this.props.color2B} color2G={this.props.color2G}>Hobbies</Title>
        </Menu4>
      </div>
    );
  }
}