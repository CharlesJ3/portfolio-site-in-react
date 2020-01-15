import React from 'react';
import '../Games/Games.css';
import styled from 'styled-components';

const GamesDetails = styled.div`
  position: absolute;
  top: 2%;
  left: 22%;
  width: 77vw;
  height: 95vh;
  border: 4px solid rgba(${props => props.colors.currentColor2R}, ${props =>  props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, 1);
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
    <div className="gamesContainer" id="gamesMain">

      {/* Games/Art (upper) */}
      <div className="gamesContainer" id="gamesTop">

        {/* Games (upper right) */}
        <div className="gameSectionGames">
          <h2 className="gamesTitles">Games (Finished/Unfinished)</h2>
          <div className="gameImageGames">


          </div>
        </div>

        {/* Art (upper right) */}
        <div className="gameSectionArt">
          <h2 className="gamesTitles">Art (Finished/Unfinished)</h2>
        </div>
        <div className="gameImageArt">


        </div>
      </div>

      {/* Description (bottom) */}
      <div className="gamesContainer" id="gamesBottom">

        {/* Image (bottom left) */}
        <div className="gameSectionName">
          <div className="gameImageMain">
          <h2 className="gamesTitles">Game/Art Title</h2>

          </div>

        </div>

        {/* Description (bottom right) */}
        <div className="gameSectionDescription">
          <div className="gameImageDescription">
          <h2 className="gamesTitles">Description</h2>

          </div>
        </div>
      </div>
    </div>
  </GamesDetails>
 )
}

export default Games;