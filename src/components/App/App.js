import React from 'react';
import '../App/App.css'
import Header from '../Header/Header';
import * as THREE from "three";

class App extends React.Component {

    constructor() {
      super();

      this.state = ({
        colors: {

          //The Current First color for Styled Divs
          currentColor1R: 225,
          currentColor1B: 21,
          currentColor1G: 82,

          //The Current Second Color for Styled Divs
          currentColor2R: 27,
          currentColor2B: 147,
          currentColor2G: 55,
        },

        //Color 1 -
        color1R: 225,
        color1B: 21,
        color1G: 82,

        //Color 2 -
        color2R: 27,
        color2B: 147,
        color2G: 55,

        //Color 3 -
        color3R: 15,
        color3B: 226,
        color3G: 12,

        //Color 4 -
        color4R: 22,
        color4B: 124,
        color4G: 132,

        //Color 5 -
        color5R: 16,
        color5B: 26,
        color5G: 123,

        //Color 6 -
        color6R: 12,
        color6B: 224,
        color6G: 232,

        //Color 7 - Pink
        color7R: 25,
        color7B: 221,
        color7G: 22,

        //Color 8 - Purple
        color8R: 237,
        color8B: 117,
        color8G: 55,

        //Color 9 -
        color9R: 163,
        color9B: 55,
        color9G: 11,

        //Color 10 -
        color10R: 255,
        color10B: 45,
        color10G: 237,

        currentTab: 0,
        updateColors: false,
        updatePos: 1,
        currentMenu: 0,
      });
    }

    //We'll store all color updates in one function so we can share the colors across React and Three JS
    updateColors = (menu) => {

      if(this.state.updatePos === 1){
        this.setState({
          updatePos: 2,
        })
      }

        if (menu === 1) {

          this.setState({
            colors: {
              currentColor1R: this.state.color3R,
              currentColor1B: this.state.color3B,
              currentColor1G: this.state.color3G,

              currentColor2R: this.state.color4R,
              currentColor2B: this.state.color4B,
              currentColor2G: this.state.color4G,
            },
            updateColors: true,
            currentMenu: 1,
          })

        } else if (menu === 2) {

          this.setState({
            colors: {
              currentColor1R: this.state.color5R,
              currentColor1B: this.state.color5B,
              currentColor1G: this.state.color5G,

              currentColor2R: this.state.color6R,
              currentColor2B: this.state.color6B,
              currentColor2G: this.state.color6G,
            },
            updateColors: true,
            currentMenu: 2,
          })
        } else if (menu === 3) {

          this.setState({
            colors: {
              currentColor1R: this.state.color7R,
              currentColor1B: this.state.color7B,
              currentColor1G: this.state.color7G,

              currentColor2R: this.state.color8R,
              currentColor2B: this.state.color8B,
              currentColor2G: this.state.color8G,
            },
            updateColors: true,
            currentMenu: 3,
        })

        } else if (menu === 4) {

          this.setState({
            colors: {
              currentColor1R: this.state.color9R,
              currentColor1B: this.state.color9B,
              currentColor1G: this.state.color9G,

              currentColor2R: this.state.color10R,
              currentColor2B: this.state.color10B,
              currentColor2G: this.state.color10G,
            },
            updateColors: true,
            currentMenu: 4,
          })
        }

        setTimeout(() => {
          this.setState({
            updatePos: 3,
          })
          console.log('now!')
        }, 2000);
  }

    //This entire lifecycle will be used for our ThreeJS background. All initial ThreeJS must go inside componentDidMount
    componentDidMount() {

      let dirLight, dirLight2;

      const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("battleArea"),
        antialias: true
      });

      //Camera
      const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        2500
      );

      camera.position.x -= 200;
      camera.position.y += 50;

      //Here we set the size, and run the function that will adjust the page based on resize
      renderer.setSize(window.innerWidth, window.innerHeight);

      function resizeRendererToDisplaySize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
      }

      window.addEventListener('resize', resizeRendererToDisplaySize(), false);

      renderer.setClearColor('rgb(2,15,20)', .01);

      const scene = new THREE.Scene();

      dirLight = new THREE.DirectionalLight('rgb(22,2,166)', .95);
      dirLight2 = new THREE.DirectionalLight('rgb(24,30,66)', .95);

      dirLight.color.r = this.state.colors.currentColor1R;
      dirLight.color.g = this.state.colors.currentColor1G;
      dirLight.color.b = this.state.colors.currentColor1B;
      dirLight.color.a = .5;
      dirLight.intensity = .0075;
      dirLight.needsUpdate = true;

      dirLight2.color.r = this.state.colors.currentColor2R;
      dirLight2.color.g = this.state.colors.currentColor2G;
      dirLight2.color.b = this.state.colors.currentColor2B;
      dirLight2.color.a = .5;
      dirLight2.intensity = .0075;
      dirLight2.needsUpdate = true;

      dirLight.position.set(10, 121, 21);
      dirLight2.position.set(-10, -111, 21);

      scene.add(dirLight, dirLight2);

      //Rings!
      const geometryInner1 = new THREE.TorusGeometry(21, 12, 22, 75, 28);
      const geometryOuter1 = new THREE.TorusGeometry(33, 12, 17, 15, 23);

      //Rings!
      const geometryInner2 = new THREE.TorusGeometry(15, 18, 22, 35, 18);
      const geometryOuter2 = new THREE.TorusGeometry(20, 18, 17, 17, 18);

      const material2 = new THREE.MeshPhysicalMaterial({
        clearcoat: 1,
        clearcoatRoughness: 1,
        reflectivity: 3,
      })

      //Set 1
      let ring = new THREE.Mesh(geometryInner1, material2);
      let ring2 = new THREE.Mesh(geometryOuter1, material2);
      let ring3 = new THREE.Mesh(geometryOuter1, material2);

      //Set 1 PART 2
      let ring4 = new THREE.Mesh(geometryInner2, material2);
      let ring5 = new THREE.Mesh(geometryOuter2, material2);
      let ring6 = new THREE.Mesh(geometryOuter2, material2);

      //Set 3
      let ring7 = new THREE.Mesh(geometryInner1, material2);
      let ring8 = new THREE.Mesh(geometryOuter1, material2);
      let ring9 = new THREE.Mesh(geometryOuter1, material2);

      //Set 3 PART 2
      let ring10 = new THREE.Mesh(geometryInner2, material2);
      let ring11 = new THREE.Mesh(geometryOuter2, material2);
      let ring12 = new THREE.Mesh(geometryOuter2, material2);

      //Set 3
      let ring13 = new THREE.Mesh(geometryInner1, material2);
      let ring14 = new THREE.Mesh(geometryOuter1, material2);
      let ring15 = new THREE.Mesh(geometryOuter1, material2);

      //Set 3 PART 2
      let ring16 = new THREE.Mesh(geometryInner2, material2);
      let ring17 = new THREE.Mesh(geometryOuter2, material2);
      let ring18 = new THREE.Mesh(geometryOuter2, material2);

      ring.position.set(0, 0, -400);
      ring2.position.set(0, 0, -400);
      ring3.position.set(0, 0, -400);
      ring4.position.set(0, 0, -410);
      ring5.position.set(0, 0, -420);
      ring6.position.set(0, 0, -420);

      ring7.position.set(82, 25, -400);
      ring8.position.set(82, 25, -400);
      ring9.position.set(82, 25, -400);
      ring10.position.set(82, 25, -410);
      ring11.position.set(82, 25, -420);
      ring12.position.set(82, 25, -420);

      ring13.position.set(-82, -25, -400);
      ring14.position.set(-82, -25, -400);
      ring15.position.set(-82, -25, -400);
      ring16.position.set(-82, -25, -410);
      ring17.position.set(-82, -25, -420);
      ring18.position.set(-82, -25, -420);

      scene.add(
        ring, ring2, ring3, ring4, ring5, ring6,
        ring7, ring8, ring9, ring10, ring11, ring12,
        ring13, ring14, ring15, ring16, ring17, ring18,
      );


      renderer.render(scene, camera);

      /*IMPORTANT: State acts weird in render function, so call adjust values in state outside */
      let ringStatus = 0;

      const checkRingStatus = () => {
        if (ring7.position.x >= 1 && ring7.position.x <= -1) {
          ringStatus = 1;
        } else if (ring7.position.x >= -5 && ring7.position.x <= 5) {
          ringStatus = 2;
        }
      }

      /**
       * Update our lights when we want to swap menus
       */
      const checkLights = () => {

        if (this.state.updateColors === true) {

          dirLight.color.r = this.state.colors.currentColor1R;
          dirLight.color.g = this.state.colors.currentColor1G;
          dirLight.color.b = this.state.colors.currentColor1B;

          dirLight2.color.r = this.state.colors.currentColor2R;
          dirLight2.color.g = this.state.colors.currentColor2G;
          dirLight2.color.b = this.state.colors.currentColor2B;

          dirLight.updateMatrix();
          dirLight2.updateMatrix();

          // Set update colors back to false after changing them
          this.setState({
            updateColors: false
          })
        }
    }

    //RENDER LOOP
    requestAnimationFrame(render);

    function render() {

      checkLights();

      ring.rotation.z -= .015;
      ring2.rotation.z -= .017;
      ring3.rotation.z -= .013;
      ring4.rotation.z -= .025;
      ring5.rotation.z -= .032;
      ring6.rotation.z -= .04;

      ring7.rotation.z += .01;
      ring8.rotation.z += .012;
      ring9.rotation.z += .01;
      ring10.rotation.z -= .015;
      ring11.rotation.z += .020;
      ring12.rotation.z += .025;

      ring13.rotation.z += .01;
      ring14.rotation.z += .012;
      ring15.rotation.z += .01;
      ring16.rotation.z -= .015;
      ring17.rotation.z += .020;
      ring18.rotation.z += .025;


      //Orbital Rotations
      //We'll check to see what current status we have to do movements

        ring7.position.x = -83 * Math.sin(Date.now() / 5000);
        ring8.position.x = -83 * Math.sin(Date.now() / 5000);
        ring9.position.x = -83 * Math.sin(Date.now() / 5000);
        ring10.position.x = -83 * Math.sin(Date.now() / 5000);
        ring11.position.x = -83 * Math.sin(Date.now() / 5000);
        ring12.position.x = -83 * Math.sin(Date.now() / 5000);

        ring7.position.y = -83 * Math.cos(Date.now() / 5000);
        ring8.position.y = -83 * Math.cos(Date.now() / 5000);
        ring9.position.y = -83 * Math.cos(Date.now() / 5000);
        ring10.position.y = -83 * Math.cos(Date.now() / 5000);
        ring11.position.y = -83 * Math.cos(Date.now() / 5000);
        ring12.position.y = -83 * Math.cos(Date.now() / 5000);

        ring13.position.x = 83 * Math.sin(Date.now() / 5000);
        ring14.position.x = 83 * Math.sin(Date.now() / 5000);
        ring15.position.x = 83 * Math.sin(Date.now() / 5000);
        ring16.position.x = 83 * Math.sin(Date.now() / 5000);
        ring17.position.x = 83 * Math.sin(Date.now() / 5000);
        ring18.position.x = 83 * Math.sin(Date.now() / 5000);

        ring13.position.y = 83 * Math.cos(Date.now() / 5000);
        ring14.position.y = 83 * Math.cos(Date.now() / 5000);
        ring15.position.y = 83 * Math.cos(Date.now() / 5000);
        ring16.position.y = 83 * Math.cos(Date.now() / 5000);
        ring17.position.y = 83 * Math.cos(Date.now() / 5000);
        ring18.position.y = 83 * Math.cos(Date.now() / 5000);

      // camera.position.z = 100 * Math.cos(Date.now() / 5000);
      // camera.position.y = 100 * Math.cos(Date.now() / 5000);

      // camera.position.z = 300 * Math.cos(Date.now() / 5000);
      // camera.position.y = 20 * Math.tan(Date.now() / 5000);
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
  }

  render() {
    return (
        <div className="app">
          <Header
            colors={this.state.colors}
            updateColors={this.updateColors}
            updatePos={this.state.updatePos}
            currentMenu={this.state.currentMenu}
          >
          </Header>
          {/* <About />
          <Projects />
          <Hobbies />
          <Contact />
          <Footer /> */}
        </div>
    );
  }
}

export default App;