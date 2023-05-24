import React, { useEffect } from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Helmet } from 'react-helmet';

import transcript from "./assets/Transcript_for_Siana_Kong.pdf";

import trees from "./images/trees2.png";
import train from "./images/train.jpg";
import mountain from "./images/peaks.jpg";
import toronto from "./images/skyline.png";
import journey from "./images/journey.jpg";
import girl from "./images/girl.png";
import clouds from "./images/clouds.png";

import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Exp from "./pages/Exp";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App(){


    return (
        <div class="pobjects">
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Parallax pages={3.35}
                style={{
                    backgroundColor: 'rgb(23,27,44)',
                }}>
                {/*first page; name*/} 
                <ParallaxLayer 
                    offset={0}
                    speed={0.15}
                    style={{
                        backgroundImage: `url(${mountain})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(80%)',
                    }}
                    class="animation_layer parallax"
                />
                <ParallaxLayer 
                    offset={0.26} 
                    speed={0.7}
                    >
                    <Welcome/>
                </ParallaxLayer>
                
                <ParallaxLayer 
                    offset={0.1}
                    speed={0.6}
                    style={{
                        backgroundImage: `url(${trees})`,
                        backgroundSize: 'cover',
                        backgroundPositionX: 'center',
                    }}
                    >
                </ParallaxLayer>


                {/*about me & school*/}
                <ParallaxLayer 
                    offset={0.99}
                    speed={0.5}
                    style={{
                        backgroundColor: 'rgb(23,27,44)',
                        backgroundSize: '200%',
                    }}
                    >
                </ParallaxLayer>
                <ParallaxLayer 
                    offset={1}
                    speed={0.5}
                    >
                        <About/>
                </ParallaxLayer>
                <ParallaxLayer 
                    offset={0.98}
                    speed={0.07}
                    >
                    <a href={transcript} download><img src={girl} width={"310px"} id="transcript"></img></a>
                </ParallaxLayer>

                
                {/*work experience*/}
                <ParallaxLayer 
                    offset={1.6}
                    speed={0.8}
                    style={{
                        backgroundImage: `url(${train})`,
                        backgroundSize: 'cover',
                        backgroundPositionX: 'center',
                    }}
                    >   
                    <ParallaxLayer 
                        offset={0.45}
                        speed={0.2}
                    >
                        <Exp/>
                    </ParallaxLayer>
                </ParallaxLayer>
                <ParallaxLayer 
                    offset={1.99}
                    speed={0.9}
                    >
                    {/* <div className="parallax-layer-toronto"> */}
                        <img src={toronto} alt="toronto" />
                    {/* </div> */}
                    <ParallaxLayer 
                        offset={1}
                        speed={0.3}
                    >
                        {/*projects*/}
                        <Projects/>
                    </ParallaxLayer>
                </ParallaxLayer>
                

                {/*tech skills*/}
                <ParallaxLayer
                    offset={2.7}
                    speed={1}
                    style={{
                        backgroundImage: `url(${journey})`,
                        backgroundSize: 'cover',
                        backgroundPositionX: 'center',
                    }}
                    >
                    <ParallaxLayer 
                        offset={0.7}
                        speed={0.4}
                    >
                        <img src={clouds} alt="clouds" id="cloud"/>
                    </ParallaxLayer>
                    <ParallaxLayer 
                        offset={0.95}
                        speed={0.3}
                    >
                        {/*projects*/}
                        <Skills/>
                    </ParallaxLayer>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default App;