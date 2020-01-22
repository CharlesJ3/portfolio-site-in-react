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

const gamesAndArt = [
  {
    type: 'game',
    name: 'Idle Snackrifice',
    img: '../images/Game Idle Snackrifice Thumb.png',
    img2: '../images/Game Idle Snackrifice 3.png',
    desc: '',
  },{
    type: 'game',
    name: 'Idle Rings (Prototype)',
    img: '../images/Game Idle Rings Thumb.png',
    img2: '../images/Game Idle Rings 2.png',
    desc: 'A fun little Threejs game I made with Vanilla JS. Never finished but it never really had a point besides messing around'
  },{
    type: 'game',
    name: 'Idle Summoner',
    img: '../images/Game Idle Summoner 2 Thumb.png',
    img2: '../images/Game Idle Summoner 2.png',
    desc: '',
  },{
    type: 'game',
    name: 'Idle Tournament (WIP)',
    img: '../images/Game Idle Tournament Thumb.png',
    img2: '../images/Game Idle Tournament.png',
    desc: '',
  },{
    type: 'game',
    name: 'Idle Weather 3D',
    img: '../images/Game Idle Weather Thumb.png',
    img2: '../images/Game Idle Weather 3.png',
    desc: '',
  },{
    type: 'art',
    name: 'Talent Tree',
    img: '',
    img2: '../images/Summoner/talent_tree.png',
    desc: '',
  },{
    type: 'art',
    name: 'Bathornet Red',
    img: '',
    img2: '../images/Summoner/bathornetred.png',
    desc: '',
  },{
    type: 'art',
    name: 'Bathornet Green',
    img: '',
    img2: '../images/Summoner/bathornetgreen.png',
    desc: '',
  },{
    type: 'art',
    name: 'Bathornet Blue',
    img: '',
    img2: '../images/Summoner/bathornetblue.png',
    desc: '',
  },{
    type: 'art',
    name: 'Bandit White Grey',
    img: '',
    img2: '../images/Summoner/BanditWhiteGrey.png',
    desc: '',
  },{
    type: 'art',
    name: 'Bandit Dark Green',
    img: '',
    img2: '../images/Summoner/BanditGreenDarkGreen.png',
    desc: '',
  },{
    type: 'art',
    name: 'Bandit Dark Blue',
    img: '',
    img2: '../images/Summoner/BanditBlueDarkBlue.png',
    desc: '',
  },{
    type: 'art',
    name: 'Bandit Black Red',
    img: '',
    img2: '../images/Summoner/BanditBlackRed.png',
    desc: '',
  },{
    type: 'art',
    name: 'Bandit Beige Gold',
    img: '',
    img2: '../images/Summoner/BanditBeigeGold.png',
    desc: '',
  },{
    type: 'art',
    name: 'Thunder Serpent Final',
    img: '',
    img2: '../images/Summoner/thunderSerpent-upgrade_6.png',
    desc: '',
  },{
    type: 'art',
    name: 'Thunder Serpent 6',
    img: '',
    img2: '../images/Summoner/thunderSerpent-upgrade_5.png',
    desc: '',
  },{
    type: 'art',
    name: 'Thunder Serpent 5',
    img: '',
    img2: '../images/Summoner/thunderSerpent-upgrade_4.png',
    desc: '',
  },{
    type: 'art',
    name: 'Thunder Serpent 4',
    img: '',
    img2: '../images/Summoner/thunderSerpent-upgrade_3.png',
    desc: '',
  },{
    type: 'art',
    name: 'Thunder Serpent 3',
    img: '',
    img2: '../images/Summoner/thunderSerpent-upgrade_2.png',
    desc: '',
  },{
    type: 'art',
    name: 'Thunder Serpent 2',
    img: '',
    img2: '../images/Summoner/thunderSerpent-upgrade_1.png',
    desc: '',
  },{
    type: 'art',
    name: 'Thunder Serpent 1',
    img: '',
    img2: '../images/Summoner/8-bit-original-thunderSerpent.png',
    desc: '',
  },{
    type: 'art',
    name: 'Lightning Triforce',
    img: '',
    img2: '../images/Spells/Lightning Triforce.png',
    desc: '',
  },{
    type: 'art',
    name: 'Lightning Pulsate',
    img: '',
    img2: '../images/Spells/Lightning Pulsate.png',
    desc: '',
  },{
    type: 'art',
    name: 'Lightning Mastery',
    img: '',
    img2: '../images/Spells/Lightning Mastery.png',
    desc: '',
  },{
    type: 'art',
    name: 'Lightning Ground',
    img: '',
    img2: '../images/Spells/Lightning Ground.png',
    desc: '',
  },{
    type: 'art',
    name: 'Lightning Critical',
    img: '',
    img2: '../images/Spells/Lightning Critical ACTUAL.png',
    desc: '',
  },{
    type: 'art',
    name: 'Lightning Chain',
    img: '',
    img2: '../images/Spells/Lightning Chain.png',
    desc: '',
  },{
    type: 'art',
    name: 'Skeleton Final',
    img: '',
    img2: '../images/Summoner/skeleton-upgrade_6.png',
    desc: '',
  },{
    type: 'art',
    name: 'Skeleton 6',
    img: '',
    img2: '../images/Summoner/skeleton-upgrade_5.png',
    desc: '',
  },{
    type: 'art',
    name: 'Skeleton 5',
    img: '',
    img2: '../images/Summoner/skeleton-upgrade_4.png',
    desc: '',
  },{
    type: 'art',
    name: 'Skeleton 4',
    img: '',
    img2: '../images/Summoner/skeleton-upgrade_3.png',
    desc: '',
  },{
    type: 'art',
    name: 'Skeleton 3',
    img: '',
    img2: '../images/Summoner/skeleton-upgrade_2.png',
    desc: '',
  },{
    type: 'art',
    name: 'Skeleton 2',
    img: '',
    img2: '../images/Summoner/skeleton-upgrade_1.png',
    desc: '',
  },{
    type: 'art',
    name: 'Skeleton 1',
    img: '',
    img2: '../images/Summoner/8-bit-original-skeleton.png',
    desc: '',
  },{
    type: 'art',
    name: 'Rain Bounce',
    img: '',
    img2: '../images/Spells/RainBounce.png',
    desc: '',
  },{
    type: 'art',
    name: 'Rain Acid',
    img: '',
    img2: '../images/Spells/Rain Acid.png',
    desc: '',
  },{
    type: 'art',
    name: 'Rain Empower',
    img: '',
    img2: '../images/Spells/Rain Empower.png',
    desc: '',
  },{
    type: 'art',
    name: 'Rain Flood',
    img: '',
    img2: '../images/Spells/Rain Flood.png',
    desc: '',
  },{
    type: 'art',
    name: 'Rain Meteor',
    img: '',
    img2: '../images/Spells/Rain Meteor.png',
    desc: '',
  },{
    type: 'art',
    name: 'Rainfall Rush',
    img: '',
    img2: '../images/Spells/Rain Rainfall Rush.png',
    desc: '',
  },{
    type: 'art',
    name: 'Frost Giant Final',
    img: '',
    img2: '../images/Summoner/frostGiant-upgrade_6.png',
    desc: '',
  },{
    type: 'art',
    name: 'Frost Giant 6',
    img: '',
    img2: '../images/Summoner/frostGiant-upgrade_5.png',
    desc: '',
  },{
    type: 'art',
    name: 'Frost Giant 5',
    img: '',
    img2: '../images/Summoner/frostGiant-upgrade_4.png',
    desc: '',
  },{
    type: 'art',
    name: 'Frost Giant 4',
    img: '',
    img2: '../images/Summoner/frostGiant-upgrade_3.png',
    desc: '',
  },{
    type: 'art',
    name: 'Frost Giant 3',
    img: '',
    img2: '../images/Summoner/frostGiant-upgrade_2.png',
    desc: '',
  },{
    type: 'art',
    name: 'Frost Giant 2',
    img: '',
    img2: '../images/Summoner/frostGiant-upgrade_1.png',
    desc: '',
  },{
    type: 'art',
    name: 'Frost Giant 1',
    img: '',
    img2: '../images/Summoner/8-bit-original-frostGiant.png',
    desc: '',
  },{
    type: 'art',
    name: 'Earth Reinforce',
    img: '',
    img2: '../images/Spells/Earth Reinforce.png',
    desc: '',
  },{
    type: 'art',
    name: 'Earth Missed',
    img: '',
    img2: '../images/Spells/Earth Missed.png',
    desc: '',
  },{
    type: 'art',
    name: 'Earth Lineup',
    img: '',
    img2: '../images/Spells/Earth Lineup.png',
    desc: '',
  },{
    type: 'art',
    name: 'Earth Guidance',
    img: '',
    img2: '../images/Spells/Earth Guidance.png',
    desc: '',
  },{
    type: 'art',
    name: 'Earth Drop',
    img: '',
    img2: '../images/Spells/Earth Drop.png',
    desc: '',
  },{
    type: 'art',
    name: 'Earth Destroy',
    img: '',
    img2: '../images/Spells/Earth Destroy.png',
    desc: '',
  },{
    type: 'art',
    name: 'Dragon Final',
    img: '',
    img2: '../images/Summoner/dragonling-upgrade_4.png',
    desc: '',
  },{
    type: 'art',
    name: 'Dragon 6',
    img: '',
    img2: '../images/Summoner/dragonling-upgrade_3.png',
    desc: '',
  },{
    type: 'art',
    name: 'Dragon 5',
    img: '',
    img2: '../images/Summoner/dragonling-upgrade_2.png',
    desc: '',
  },{
    type: 'art',
    name: 'Dragon 4',
    img: '',
    img2: '../images/Summoner/dragonling-upgrade_1.png',
    desc: '',
  },{
    type: 'art',
    name: 'Dragon 3',
    img: '',
    img2: '../images/Summoner/dragonling-upgrade_1c.png',
    desc: '',
  },{
    type: 'art',
    name: 'Dragon 2',
    img: '',
    img2: '../images/Summoner/dragonling-upgrade_1b.png',
    desc: '',
  },{
    type: 'art',
    name: 'Dragon 1',
    img: '',
    img2: '../images/Summoner/dragonling-upgrade_1a.png',
    desc: '',
  },{
    type: 'art',
    name: 'Cubey Red Question',
    img: '',
    img2: '../images/Cubey Red Question.png',
    desc: '',
  },{
    type: 'art',
    name: 'Cubey Boss Surprised',
    img: '',
    img2: '../images/Cubey Boss Surprised.png',
    desc: '',
  },{
    type: 'art',
    name: 'Active Ability 4',
    img: '',
    img2: '../images/Spells/Active 4.png',
    desc: '',
  },{
    type: 'art',
    name: 'Active Ability 3',
    img: '',
    img2: '../images/Spells/Active 3.png',
    desc: '',
  },{
    type: 'art',
    name: 'Active Ability 2',
    img: '',
    img2: '../images/Spells/Active 2.png',
    desc: '',
  },{
    type: 'art',
    name: 'Active Ability 1',
    img: '',
    img2: '../images/Spells/Active 1.png',
    desc: '',
  },{
    type: 'art',
    name: 'Cubey Red',
    img: '',
    img2: '../images/Art Weather 1.gif',
    desc: '',
  },{
    type: 'art',
    name: 'Cubey Blue',
    img: '',
    img2: '../images/Art Weather 2.gif',
    desc: '',
  },{
    type: 'art',
    name: 'Cubey Green',
    img: '',
    img2: '../images/Art Weather 3.gif',
    desc: '',
  },{
    type: 'art',
    name: 'Cubey Dark Green',
    img: '',
    img2: '../images/Art Weather 4.gif',
    desc: '',
  },{
    type: 'art',
    name: 'Spacebot Red',
    img: '',
    img2: '../images/Art Weather 5.gif',
    desc: '',
  },{
    type: 'art',
    name: 'Spacebot Blue',
    img: '',
    img2: '../images/Art Weather 6.gif',
    desc: '',
  },{
    type: 'art',
    name: 'Spacebot Green',
    img: '',
    img2: '../images/Art Weather 7.gif',
    desc: '',
  },{
    type: 'art',
    name: 'Spacebot Grey',
    img: '',
    img2: '../images/Art Weather 8.gif',
    desc: '',
  },{
    type: 'art',
    name: 'Slithery Green',
    img: '',
    img2: '../images/Art Weather 9.gif',
    desc: '',
  },{
    type: 'art',
    name: 'Slithery Yellow',
    img: '',
    img2: '../images/Art Weather 10.gif',
    desc: '',
  },{
    type: 'art',
    name: 'Spacebot Dark',
    img: '',
    img2: '../images/Art Weather 11.gif',
    desc: '',
  },{
    type: 'art',
    name: 'Spacebot Scary',
    img: '',
    img2: '../images/Art Weather 12.gif',
    desc: '',
  },{
    type: 'art',
    name: 'Space Cat Prototype',
    img: '',
    img2: '../images/Art Weather 13.gif',
    desc: '',
  },{
    type: 'art',
    name: 'Cubey Bosses',
    img: '',
    img2: '../images/Art Weather Boss 1.gif',
    desc: '',
  },{
    type: 'art',
    name: 'Spacebot Boss',
    img: '',
    img2: '../images/Art Weather Boss 2.gif',
    desc: '',
  },{
    type: 'art',
    name: 'Snake Boss',
    img: '',
    img2: '../images/Art Weather Boss 3.gif',
    desc: '',
  },{
    type: 'art',
    name: 'Orc Boss',
    img: '',
    img2: '../images/Art Weather Boss 4.gif',
  },
];

const hideLeftDisplayRight = (img, desc) => {

  document.getElementById("rightDisplay").style.display = 'none';
  document.getElementById("leftInfo").style.display = 'none';

  document.getElementById("rightInfo").style.display = 'inherit';

  document.getElementById("gameImage2").src = img;
  document.getElementById("gameDescription2").innerHTML = `${desc}`;
}

const hideRightDisplayLeft = (img, desc) => {

  document.getElementById("leftDisplay").style.display = 'hidden';
  document.getElementById("rightInfo").style.display = 'none';

  document.getElementById("leftInfo").style.display = 'inherit';

  document.getElementById("gameImage1").src = img;
  document.getElementById("gameDescription1").innerHTML = `${desc}`;
}

const switchBackMenus = () => {
  document.getElementById("rightDisplay").style.display = 'initial';
  document.getElementById("leftDisplay").style.display = 'initial';

  document.getElementById("rightInfo").style.display = 'none';
  document.getElementById("leftInfo").style.display = 'none';
}

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

        {/* Games (upper left) */}
        <div className="gameSectionGames" id="leftDisplay">
          <h2 className="gamesTitles">Games (Finished/Unfinished)</h2>
          <div className="gameImageGames">
          {gamesAndArt.map((e,index) => {
            /*
            *  Here we will use map to generate our array of objects
            *  which contains all my games
            *
            *  Please note: && props.currentMenu is important so we do not
            *  constantly load external resources when choosing new menu due
            *  to styled components rendering dynamically
            */
            return e.type === 'game' && props.currentMenu === 2 ?
              <p className="gamesItemGames" key={e.name + index}>
                {e.name} <br /><br />
                <img
                  className="imageHoldergames"
                  src={e.img2}
                  width={'75%'}
                  alt={e.name}
                  onMouseEnter={() => hideLeftDisplayRight(e.img2, e.desc)}
                  onMouseLeave={switchBackMenus}
                >
                </img>
              </p> : false;
            })}

          </div>
        </div>

        {/* Art (upper right) */}
          <div className="gameSectionArt" id="rightDisplay">
            <h2 className="gamesTitles">Art (Finished/Unfinished)</h2>
            <div className="gameImageArt">
              {gamesAndArt.map((e,index) => {
                return e.type === 'art' && props.currentMenu === 2 ?
                  <p className="gamesItemArt" key={e.name + index}>
                  <img
                    className="imageHoldergames"
                    src={e.img2}
                    width={'90%'}
                    alt={e.name}
                    onMouseEnter={() => hideRightDisplayLeft(e.img2, e.desc)}
                    onMouseLeave={switchBackMenus}
                  >
                  </img>
                  </p> : false;
                })}
          </div>
        </div>
      </div>

      {/* Description (bottom) */}
      <div className="gamesContainer" id="gamesBottom">

        {/* Image (bottom left) */}
        <div className="gameSectionName" id="leftInfo">
          <div className="gameImageMain">
            <img id="gameImage1"></img>
            <p id="gameDescription1"></p>
          </div>
        </div>

        {/* Description (bottom right) */}
        <div className="gameSectionDescription" id="rightInfo">
          <div className="gameImageDescription">
            <img id="gameImage2"></img>
            <p id="gameDescription2"></p>
          </div>
        </div>
      </div>
    </div>
  </GamesDetails>
 )
}

export default Games;