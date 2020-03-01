import React from 'react';
import '../Projects/Projects.css';
import styled from 'styled-components';

const ProjectsDetails = styled.div`
  position: absolute;
  top: 2%;
  left: 22%;
  width: 77vw;
  height: 95vh;
  border: 4px solid rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, 1);
  z-index: 1;
  box-shadow: inset 0px 0px 10px rgb(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B});
  animation: ${props => props.currentMenu === 3 && props.updatePos === 3 ? 'showMe4' : ''} 1.5s ease-in;
  transition: border 2300ms ease-in-out;
  display: ${props => props.currentMenu === 3 && props.updatePos === 3 ? 'inherit' : 'none'};
  background: linear-gradient(
    90deg,
    rgba(${props => props.colors.currentColor2R}, ${props => props.colors.currentColor2G}, ${props => props.colors.currentColor2B}, .1) 0%,
    rgba(${props => props.colors.currentColor1R}, ${props => props.colors.currentColor1G}, ${props => props.colors.currentColor1B}, .1) 100%);
`;

const projects = [
  {
    type: 'site',
    name: 'StepIntoSwim',
    img: '../images/SIS 1 Main.PNG',
    link: 'https://stepintoswim.org',
  },{
    type: 'site',
    name: 'Instructor Portals',
    img: '../images/Portal Image 1.PNG',
    link: 'http://portofino.vls01.com',
  },{
    type: 'site',
    name: 'NSPF/WAHC Combo',
    img: '../images/WAHC 2019.PNG',
    link: 'https://nspf.org/wahc',
  },{
    type: 'site',
    name: 'National Swimming Pool Foundation',
    img: '../images/NSPF 1 About.PNG',
    link: 'https://nspf.org/',
  },{
    type: 'site',
    name: 'CharlesJones.me',
    img: '../images/team.png',
    link: 'http://charlesjones.me',
  },{
    type: 'site',
    name: 'WAHC 2014-2018',
    img: '../images/WAHC 2014-2018.png',
    link: 'https://thewahc.org',
  },{
    type: 'site',
    name: 'PHTA',
    img: '../images/PHTA 1 Main.PNG',
    link: 'https://phta.org',
  },{
    type: 'site',
    name: 'WAHCity',
    img: '../images/WAHCity All.png',
    link: 'https://thewahc.org',
  },{
    type: 'apps',
    name: 'Movie Selector - Drop the Ball!',
    img: '../images/App 1.PNG',
    link: 'http://movie-selector.herokuapp.com/',
  },{
    type: 'apps',
    name: 'Idle Tournaments (In Progress)',
    img: '../images/Game Idle Tournament Thumb.png',
    link: 'https://github.com/CharlesJ3/idletournaments',
  },{
    type: 'apps',
    name: 'Always Funny',
    img: '../images/App 2.PNG',
    link: 'http://sunnyquote.herokuapp.com/',
  },{
    type: 'apps',
    name: 'This "site"!',
    img: '../images/App 3.PNG',
    link: '#',
  },{
    type: 'pens',
    name: 'NASA Astronomy Picture of the Day',
    img: '',
    iFrameData: 'https://codepen.io/CharlesJ3/embed/gxebMx?height=265&theme-id=dark&default-tab=result',
    link: '',
  },{
    type: 'pens',
    name: 'Bubble Up!',
    img: '',
    iFrameData: 'https://codepen.io/CharlesJ3/embed/zgKvVm?height=765&theme-id=dark&default-tab=result',
    link: '',
  },{
    type: 'pens',
    name: 'Rotating Triangles',
    img: '',
    iFrameData: 'https://codepen.io/CharlesJ3/embed/RwbvpoL?height=265&theme-id=dark&default-tab=result',
    link: '',
  },{
    type: 'pens',
    name: 'Rain Drops',
    img: '',
    iFrameData: 'https://codepen.io/CharlesJ3/embed/xxKQOKK?height=265&theme-id=dark&default-tab=result',
    link: '',
  },{
    type: 'pens',
    name: 'Staring',
    img: '',
    iFrameData: 'https://codepen.io/CharlesJ3/embed/aboQNee?height=265&theme-id=dark&default-tab=result',
    link: '',
  },{
    type: 'pens',
    name: 'Infinite Snek (for my son)',
    img: '',
    iFrameData: 'https://codepen.io/CharlesJ3/embed/VOMBQP?height=265&theme-id=dark&default-tab=result',
    link: '',
  },{
    type: 'pens',
    name: 'Flippy Fish (for my daughter)',
    img: '',
    iFrameData: 'https://codepen.io/CharlesJ3/embed/OYLRqw?height=265&theme-id=dark&default-tab=result',
    link: '',
  },{
    type: 'pens',
    name: 'Fun with Rainbow Text',
    img: '',
    iFrameData: 'https://codepen.io/CharlesJ3/embed/EpVRMj?height=265&theme-id=dark&default-tab=result',
    link: '',
  },{
    type: 'pens',
    name: 'Spin 2 : Electric Spinaloo',
    img: '',
    iFrameData: 'https://codepen.io/CharlesJ3/embed/qXLOYO?height=265&theme-id=dark&default-tab=result',
    link: '',
  },{
    type: 'pens',
    name: 'Rotating Pipes (Loading Screen)',
    img: '',
    iFrameData: 'https://codepen.io/CharlesJ3/embed/PKBRPd?height=265&theme-id=dark&default-tab=result',
    link: '',
  },{
    type: 'pens',
    name: 'Pure CSS Progress (Loading Screen)',
    img: '',
    iFrameData: 'https://codepen.io/CharlesJ3/embed/Lxegdb?height=265&theme-id=dark&default-tab=result',
    link: '',
  },{
    type: 'pens',
    name: 'Animations Using GSAP',
    img: '',
    iFrameData: 'https://codepen.io/CharlesJ3/embed/yLBwyKd?height=265&theme-id=dark&default-tab=result',
    link: '',
  },{
    type: 'pens',
    name: 'Choose Your Theme!',
    img: '',
    iFrameData: 'https://codepen.io/CharlesJ3/embed/ZEzVVbz?height=265&theme-id=dark&default-tab=result',
    link: '',
  },
];

const changeMenus = (currentMenu) => {
  if(currentMenu === 1){
    document.getElementById('projectSection1').style.display = 'flex';
    document.getElementById('projectSection2').style.display = 'none';
    document.getElementById('projectSection3').style.display = 'none';
  } else if(currentMenu === 2){
    document.getElementById('projectSection1').style.display = 'none';
    document.getElementById('projectSection2').style.display = 'inline-block';
    document.getElementById('projectSection3').style.display = 'none';
  } else if(currentMenu === 3){
    document.getElementById('projectSection1').style.display = 'none';
    document.getElementById('projectSection2').style.display = 'none';
    document.getElementById('projectSection3').style.display = 'flex';
  } else {
    throw console.error(`You've accessed a page on accident. No menu exists`);
  }
}

const Projects = (props) => {
 return (
  <ProjectsDetails
    colors={props.colors}
    updatePos={props.updatePos}
    currentMenu={props.currentMenu}
  >
    <div id="projectsWrapper">
      <div id="projectsHeader">
        <button className="projectButtons" id="projectSites" onClick={() => changeMenus(1)}>WEBSITES</button>
        <button className="projectButtons" id="projectApps"  onClick={() => changeMenus(2)}>APP/SPAs</button>
        <button className="projectButtons" id="projectPens"  onClick={() => changeMenus(3)}>CODEPENS</button>
      </div>

      <div id="projectsSection">
        <div id="projectSection1">
          {projects.map((e,index) => {
            /*
            *  Here we will use map to generate our array of objects
            *  which contains all of my sites, apps, and pens
            *
            *  Please note: && props.currentMenu is important so we do not
            *  constantly load external resources when choosing new menu due
            *  to styled components rendering dynamically
            */
            return e.type === 'site' && props.currentMenu === 3 ?
              <p className="projectsItem" key={e.name + index}>
                <a href={e.link} rel="noopener noreferrer" target="_blank">{e.name} <br /><br />
                  <img
                    className="imageHolderProjects"
                    src={e.img }
                    width={'80%'}
                    alt={e.name + '' + index}
                    title={e.name}
                  >
                  </img>
                </a>
              </p> : false;
            })}
         <p id="codepenInfo">
          Websites I designed, developed, and architected
        </p>
        </div>
        <div id="projectSection2">
          {projects.map((e,index) => {
            return e.type === 'apps' && props.currentMenu === 3 ?
            <p className="projectsItem" key={e.name + index}>
              <a href={e.link} rel="noopener noreferrer" target="_blank">{e.name} <br /><br />
                <img
                  className="imageHolderProjects"
                  src={e.img}
                  width={'75%'}
                  alt={e.name + '' + index}
                  title={e.name}
                >
                </img>
              </a>
            </p> : false;
          })}
         <p id="codepenInfo">
          A few apps I have made, or am currently making, in ReactJS!
        </p>
        </div>
        <div id="projectSection3">
        {projects.map((e,index) => {
          return e.type === 'pens' && props.currentMenu === 3 ?
          <div className="projectsPen" key={e.name + index}>

          <iframe
            title={e.name}
            width={'100%'}
            height={'100%'}
            src={e.iFrameData}
          >
          </iframe>
          </div> : false;
        })}
        <p id="codepenInfo">
          Codepen not loading? Use the <span className="rerun">Rerun</span> button to reload it!
        </p>

        {/*What is this for? To reload pens automatically. Codepen doesn't like loading a million pens at once, this helps */}

        {
          (function() {
            document.getElementsByClassName('rerun-button').dispatchEvent(new MouseEvent("click"));
          })

        }
        </div>
      </div>
    </div>
  </ProjectsDetails>
 )
}

export default Projects;