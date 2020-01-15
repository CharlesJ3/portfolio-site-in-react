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



const projects = [{
    type: 'admin',
    currentProject: 0,
    lastProject: 0,
    nextProject: 1,
  },{
    type: 'site',
    name: 'NSPF',
    img: `url('../src/images/NSPF 1 About.PNG')`
  },{
    type: 'site',
    name: 'WAHC',
    img: '',
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
    name: 'My Site',
    img: '',
  },{
}];

const Projects = (props) => {
 return (
  <ProjectsDetails
    colors={props.colors}
    updatePos={props.updatePos}
    currentMenu={props.currentMenu}
  >
    <div id="projectsWrapper">
      <div id="projectsHeader">
        <button className="projectButtons">WEBSITES</button>
        <button className="projectButtons">APP/SPAs</button>
        <button className="projectButtons">CODEPEN</button>
      </div>

      <div id="projectsSection">
        <div id="projectSection1">
          {projects.map(e => {
            return e.type === 'site' ?
              <p className="projectsItem" key={e.name} style={{backgroundImage: `${e.img}` }} >
                {e.name} <br /><br />
                <span className="imageHolderProjects" >

                </span>
              </p> : false;
          })}
        </div>
        <div id="projectSection1">TEST2</div>
        <div id="projectSection1">TEST3</div>
      </div>
    </div>
  </ProjectsDetails>
 )
}

export default Projects;