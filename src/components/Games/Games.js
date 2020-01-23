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
    link: 'https://github.com/CharlesJ3/Idle-Snackrifice',

  },{
    type: 'game',
    name: 'Idle Rings',
    img: '../images/Game Idle Rings Thumb.png',
    img2: '../images/Game Idle Rings 2.png',
    link: 'https://github.com/CharlesJ3/Idle-Rings',
  },{
    type: 'game',
    name: 'Idle Summoner',
    img: '../images/Game Idle Summoner 2 Thumb.png',
    img2: '../images/Game Idle Summoner 2.png',
    link: 'https://www.kongregate.com/games/shadowxblade/idle-summoner',
  },{
    type: 'game',
    name: 'Idle Tournament',
    img: '../images/Game Idle Tournament Thumb.png',
    img2: '../images/Game Idle Tournament.png',
    link: 'https://github.com/CharlesJ3/idletournaments',
  },{
    type: 'game',
    name: 'Idle Weather 3D',
    img: '../images/Game Idle Weather Thumb.png',
    img2: '../images/Game Idle Weather 3.png',
    link: '',
  },{
    type: 'art',
    name: 'Talent Tree',
    img: '',
    img2: '../images/Summoner/talent_tree.png',

  },{
    type: 'art',
    name: 'Bathornet Red',
    img: '',
    img2: '../images/Summoner/bathornetred.png',

  },{
    type: 'art',
    name: 'Bathornet Green',
    img: '',
    img2: '../images/Summoner/bathornetgreen.png',

  },{
    type: 'art',
    name: 'Bathornet Blue',
    img: '',
    img2: '../images/Summoner/bathornetblue.png',

  },{
    type: 'art',
    name: 'Bandit White Grey',
    img: '',
    img2: '../images/Summoner/BanditWhiteGrey.png',

  },{
    type: 'art',
    name: 'Bandit Dark Green',
    img: '',
    img2: '../images/Summoner/BanditGreenDarkGreen.png',

  },{
    type: 'art',
    name: 'Bandit Dark Blue',
    img: '',
    img2: '../images/Summoner/BanditBlueDarkBlue.png',

  },{
    type: 'art',
    name: 'Bandit Black Red',
    img: '',
    img2: '../images/Summoner/BanditBlackRed.png',

  },{
    type: 'art',
    name: 'Bandit Beige Gold',
    img: '',
    img2: '../images/Summoner/BanditBeigeGold.png',

  },{
    type: 'art',
    name: 'Thunder Serpent Final',
    img: '',
    img2: '../images/Summoner/thunderSerpent-upgrade_6.png',

  },{
    type: 'art',
    name: 'Thunder Serpent 6',
    img: '',
    img2: '../images/Summoner/thunderSerpent-upgrade_5.png',

  },{
    type: 'art',
    name: 'Thunder Serpent 5',
    img: '',
    img2: '../images/Summoner/thunderSerpent-upgrade_4.png',

  },{
    type: 'art',
    name: 'Thunder Serpent 4',
    img: '',
    img2: '../images/Summoner/thunderSerpent-upgrade_3.png',

  },{
    type: 'art',
    name: 'Thunder Serpent 3',
    img: '',
    img2: '../images/Summoner/thunderSerpent-upgrade_2.png',

  },{
    type: 'art',
    name: 'Thunder Serpent 2',
    img: '',
    img2: '../images/Summoner/thunderSerpent-upgrade_1.png',

  },{
    type: 'art',
    name: 'Thunder Serpent 1',
    img: '',
    img2: '../images/Summoner/8-bit-original-thunderSerpent.png',

  },{
    type: 'art',
    name: 'Lightning Triforce',
    img: '',
    img2: '../images/Spells/Lightning Triforce.png',

  },{
    type: 'art',
    name: 'Lightning Pulsate',
    img: '',
    img2: '../images/Spells/Lightning Pulsate.png',

  },{
    type: 'art',
    name: 'Lightning Mastery',
    img: '',
    img2: '../images/Spells/Lightning Mastery.png',

  },{
    type: 'art',
    name: 'Lightning Ground',
    img: '',
    img2: '../images/Spells/Lightning Ground.png',

  },{
    type: 'art',
    name: 'Lightning Critical',
    img: '',
    img2: '../images/Spells/Lightning Critical ACTUAL.png',

  },{
    type: 'art',
    name: 'Lightning Chain',
    img: '',
    img2: '../images/Spells/Lightning Chain.png',

  },{
    type: 'art',
    name: 'Skeleton Final',
    img: '',
    img2: '../images/Summoner/skeleton-upgrade_6.png',

  },{
    type: 'art',
    name: 'Skeleton 6',
    img: '',
    img2: '../images/Summoner/skeleton-upgrade_5.png',

  },{
    type: 'art',
    name: 'Skeleton 5',
    img: '',
    img2: '../images/Summoner/skeleton-upgrade_4.png',

  },{
    type: 'art',
    name: 'Skeleton 4',
    img: '',
    img2: '../images/Summoner/skeleton-upgrade_3.png',

  },{
    type: 'art',
    name: 'Skeleton 3',
    img: '',
    img2: '../images/Summoner/skeleton-upgrade_2.png',

  },{
    type: 'art',
    name: 'Skeleton 2',
    img: '',
    img2: '../images/Summoner/skeleton-upgrade_1.png',

  },{
    type: 'art',
    name: 'Skeleton 1',
    img: '',
    img2: '../images/Summoner/8-bit-original-skeleton.png',

  },{
    type: 'art',
    name: 'Rain Bounce',
    img: '',
    img2: '../images/Spells/RainBounce.png',

  },{
    type: 'art',
    name: 'Rain Acid',
    img: '',
    img2: '../images/Spells/Rain Acid.png',

  },{
    type: 'art',
    name: 'Rain Empower',
    img: '',
    img2: '../images/Spells/Rain Empower.png',

  },{
    type: 'art',
    name: 'Rain Flood',
    img: '',
    img2: '../images/Spells/Rain Flood.png',

  },{
    type: 'art',
    name: 'Rain Meteor',
    img: '',
    img2: '../images/Spells/Rain Meteor.png',

  },{
    type: 'art',
    name: 'Rainfall Rush',
    img: '',
    img2: '../images/Spells/Rain Rainfall Rush.png',

  },{
    type: 'art',
    name: 'Frost Giant Final',
    img: '',
    img2: '../images/Summoner/frostGiant-upgrade_6.png',

  },{
    type: 'art',
    name: 'Frost Giant 6',
    img: '',
    img2: '../images/Summoner/frostGiant-upgrade_5.png',

  },{
    type: 'art',
    name: 'Frost Giant 5',
    img: '',
    img2: '../images/Summoner/frostGiant-upgrade_4.png',

  },{
    type: 'art',
    name: 'Frost Giant 4',
    img: '',
    img2: '../images/Summoner/frostGiant-upgrade_3.png',

  },{
    type: 'art',
    name: 'Frost Giant 3',
    img: '',
    img2: '../images/Summoner/frostGiant-upgrade_2.png',

  },{
    type: 'art',
    name: 'Frost Giant 2',
    img: '',
    img2: '../images/Summoner/frostGiant-upgrade_1.png',

  },{
    type: 'art',
    name: 'Frost Giant 1',
    img: '',
    img2: '../images/Summoner/8-bit-original-frostGiant.png',

  },{
    type: 'art',
    name: 'Earth Reinforce',
    img: '',
    img2: '../images/Spells/Earth Reinforce.png',

  },{
    type: 'art',
    name: 'Earth Missed',
    img: '',
    img2: '../images/Spells/Earth Missed.png',

  },{
    type: 'art',
    name: 'Earth Lineup',
    img: '',
    img2: '../images/Spells/Earth Lineup.png',

  },{
    type: 'art',
    name: 'Earth Guidance',
    img: '',
    img2: '../images/Spells/Earth Guidance.png',

  },{
    type: 'art',
    name: 'Earth Drop',
    img: '',
    img2: '../images/Spells/Earth Drop.png',

  },{
    type: 'art',
    name: 'Earth Destroy',
    img: '',
    img2: '../images/Spells/Earth Destroy.png',

  },{
    type: 'art',
    name: 'Dragon Final',
    img: '',
    img2: '../images/Summoner/dragonling-upgrade_4.png',

  },{
    type: 'art',
    name: 'Dragon 6',
    img: '',
    img2: '../images/Summoner/dragonling-upgrade_3.png',

  },{
    type: 'art',
    name: 'Dragon 5',
    img: '',
    img2: '../images/Summoner/dragonling-upgrade_2.png',

  },{
    type: 'art',
    name: 'Dragon 4',
    img: '',
    img2: '../images/Summoner/dragonling-upgrade_1.png',

  },{
    type: 'art',
    name: 'Dragon 3',
    img: '',
    img2: '../images/Summoner/dragonling-upgrade_1c.png',

  },{
    type: 'art',
    name: 'Dragon 2',
    img: '',
    img2: '../images/Summoner/dragonling-upgrade_1b.png',

  },{
    type: 'art',
    name: 'Dragon 1',
    img: '',
    img2: '../images/Summoner/dragonling-upgrade_1a.png',

  },{
    type: 'art',
    name: 'Cubey Red Question',
    img: '',
    img2: '../images/Cubey Red Question.png',

  },{
    type: 'art',
    name: 'Cubey Boss Surprised',
    img: '',
    img2: '../images/Cubey Boss Surprised.png',

  },{
    type: 'art',
    name: 'Active Ability 4',
    img: '',
    img2: '../images/Spells/Active 4.png',

  },{
    type: 'art',
    name: 'Active Ability 3',
    img: '',
    img2: '../images/Spells/Active 3.png',

  },{
    type: 'art',
    name: 'Active Ability 2',
    img: '',
    img2: '../images/Spells/Active 2.png',

  },{
    type: 'art',
    name: 'Active Ability 1',
    img: '',
    img2: '../images/Spells/Active 1.png',

  },{
    type: 'art',
    name: 'Cubey Red',
    img: '',
    img2: '../images/Art Weather 1.gif',

  },{
    type: 'art',
    name: 'Cubey Blue',
    img: '',
    img2: '../images/Art Weather 2.gif',

  },{
    type: 'art',
    name: 'Cubey Green',
    img: '',
    img2: '../images/Art Weather 3.gif',

  },{
    type: 'art',
    name: 'Cubey Dark Green',
    img: '',
    img2: '../images/Art Weather 4.gif',

  },{
    type: 'art',
    name: 'Spacebot Red',
    img: '',
    img2: '../images/Art Weather 5.gif',

  },{
    type: 'art',
    name: 'Spacebot Blue',
    img: '',
    img2: '../images/Art Weather 6.gif',

  },{
    type: 'art',
    name: 'Spacebot Green',
    img: '',
    img2: '../images/Art Weather 7.gif',

  },{
    type: 'art',
    name: 'Spacebot Grey',
    img: '',
    img2: '../images/Art Weather 8.gif',

  },{
    type: 'art',
    name: 'Slithery Green',
    img: '',
    img2: '../images/Art Weather 9.gif',

  },{
    type: 'art',
    name: 'Slithery Yellow',
    img: '',
    img2: '../images/Art Weather 10.gif',

  },{
    type: 'art',
    name: 'Spacebot Dark',
    img: '',
    img2: '../images/Art Weather 11.gif',

  },{
    type: 'art',
    name: 'Spacebot Scary',
    img: '',
    img2: '../images/Art Weather 12.gif',

  },{
    type: 'art',
    name: 'Space Cat Prototype',
    img: '',
    img2: '../images/Art Weather 13.gif',

  },{
    type: 'art',
    name: 'Cubey Bosses',
    img: '',
    img2: '../images/Art Weather Boss 1.gif',

  },{
    type: 'art',
    name: 'Spacebot Boss',
    img: '',
    img2: '../images/Art Weather Boss 2.gif',

  },{
    type: 'art',
    name: 'Snake Boss',
    img: '',
    img2: '../images/Art Weather Boss 3.gif',

  },{
    type: 'art',
    name: 'Orc Boss',
    img: '',
    img2: '../images/Art Weather Boss 4.gif',
  },
];

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

        {/* Games (left) */}
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
                <a href={e.link} target="_blank" rel="noopener noreferrer">{e.name} <br /><br />
                  <img
                    className="imageHoldergames"
                    src={e.img2}
                    width={'75%'}
                    alt={e.name}
                  >
                  </img>
                </a>
              </p> : false;
            })}

          </div>
        </div>

        {/* Art (right) */}
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
                    >
                    </img>
                  </p> : false;
                })}
          </div>
        </div>
      </div>
    </div>
  </GamesDetails>
 )
}

export default Games;