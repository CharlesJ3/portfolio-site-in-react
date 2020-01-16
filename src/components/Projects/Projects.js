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
    type: 'admin',
    currentProject: 0,
    lastProject: 0,
    nextProject: 1,
  },{
    type: 'site',
    name: 'NSPF',
    img: '../images/NSPF 1 About.PNG'
  },{
    type: 'site',
    name: 'WAHC 2014-2018',
    img: '../images/NSPF 1 About.PNG',
  },{
    type: 'site',
    name: 'PHTA',
    img: '',
  },{
    type: 'site',
    name: 'NSPF/WAHC Combo',
    img: '',
  },{
    type: 'site',
    name: 'WAHCity',
    img: '',
  },{
    type: 'site',
    name: 'FIND ME',
    img: '',
  },{
    type: 'site',
    name: 'StepIntoSwim',
    img: '',
  },{
    type: 'site',
    name: 'Instructor Portals',
    img: '',
  },{
    type: 'site',
    name: 'National Swimming Pool Foundation',
    img: '',
  },{
    type: 'apps',
    name: 'NSPF',
    img: '../images/NSPF 1 About.PNG'
  },{
    type: 'apps',
    name: 'NSPF',
    img: '../images/NSPF 1 About.PNG'
  },{
    type: 'apps',
    name: 'WAHC',
    img: '',
  },{
    type: 'pens',
    name: 'PHTA',
    img: '',
  },{
    type: 'pens',
    name: 'NSPF/WAHC Combo',
    img: '',
  },{
    type: 'pens',
    name: 'WAHCity',
    img: '',
  },{
    type: 'pens',
    name: 'FIND ME',
    img: '',
  },{
    type: 'pens',
    name: 'StepIntoSwim',
    img: '',
  },{
    type: 'pens',
    name: 'Instructor Portals',
    img: '',
  },{
    type: 'pens',
    name: 'My Site',
    img: '',
  },
];

const changeMenus = (currentMenu) => {
  if(currentMenu === 1){
    document.getElementById('projectSection1').style.display = 'flex';
    document.getElementById('projectSection2').style.display = 'none';
    document.getElementById('projectSection3').style.display = 'none';
  } else if(currentMenu === 2){
    document.getElementById('projectSection1').style.display = 'none';
    document.getElementById('projectSection2').style.display = 'flex';
    document.getElementById('projectSection3').style.display = 'none';
    console.log('test');
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
            return e.type === 'site' ?
              <p className="projectsItem" key={e.name + index}>
                {e.name} <br /><br />
                <img
                  className="imageHolderProjects"
                  src={e.img}
                  width={'70%'}
                  alt={e.name}
                >
                </img>
              </p> : false;
            })}
        </div>
        <div id="projectSection2">
          {projects.map((e,index) => {
            return e.type === 'apps' ?
            <p className="projectsItem" key={e.name + index}>
              {e.name} <br /><br />
              <img
                className="imageHolderProjects"
                src={e.img}
                width={'70%'}
                alt={e.name}
              >
              </img>
            </p> : false;
          })}
        </div>
        <div id="projectSection3">
        {projects.map((e,index) => {
          return e.type === 'pens' ?
          <p className="projectsItem" key={e.name + index}>
            {e.name} <br /><br />
            <img
              className="imageHolderProjects"
              src={e.img}
              width={'70%'}
              alt={e.name}
            >
            </img>
          </p> : false;
        })}
        </div>
      </div>
    </div>
  </ProjectsDetails>
 )
}

export default Projects;