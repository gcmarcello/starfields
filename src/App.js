import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import {SlidersColor, SlidersQtd, SlidersSize, SlidersTmp} from './components/Sliders'


const myLinks = ["www.mylink.com"];                                                                   // Links para Estrelas Interativas

const App = () => {                                                                                   // True App.js
  const starContainer = useRef(null);
  const starContainerint = useRef(null);

  const [qtdEstrelas, setQtdEstrelas] = useState(800);
  const [tmpEstrelas, setTmpEstrelas] = useState(2);
  const [sizeEstrelas, setSizeEstrelas] = useState(2);
  const [colorEstrelas, setColorEstrelas] = useState(155);
  
  const updateQtdEstrelas = (value) => {                                                    // Slider QTD
    setQtdEstrelas(value);
  };
  const updateTmpEstrelas = (tmpvalue) => {                                                 // Slider TMP
    setTmpEstrelas(tmpvalue);
  };
  const updateSizeEstrelas = (sizevalue) => {                                               // Slider SIZE
    setSizeEstrelas(sizevalue);
  };
  const updateColorEstrelas = (colorvalue) => {                                               // Slider SIZE
    setColorEstrelas(colorvalue);
  };

  const generateInteractiveStars = () => {                                                  // Objeto Estrela Interativa
    const intStars = [];
    for (let i = 0; i < myLinks.length; i++) {
      const link = myLinks[i];
      const x1 = (Math.random()*2) - 1;
      const x2 = (Math.random()*2) - 1;
      const x5 = (Math.random()*2) - 1;
      const x6 = (Math.random()*2) - 1;
      const x9 = (Math.random()*2) - 1;
      const x10 = (Math.random()*2) - 1;
      const intStar_x = Math.random() * 100;
      const intStar_y = Math.random() * 100;
      intStars.push({ link, intStar_x, intStar_y, x1,x2,x5,x6,x9,x10});
    }
    return intStars;
  };

  useEffect(() => {                                                                         // useEffect
    starContainer.current.innerHTML = '';
    starContainerint.current.innerHTML = '';
    

    function generateStar(){                                            // Objeto Estrela Ordinária
      const x = [Math.random() * 100];                                  // Posição
      const y = [Math.random() * 100];
      let colorVary;
      const r = (Math.random() * (255 - 150) + 150);                      // Cor
      const g = (Math.random() * (255 - 150) + 100); 
      const b = (Math.random() * (255 - 150) + 150);                      // Tempo de Animação

      let animTimeProb = (Math.random() * 2) - 1;
      let animTime;
      if(animTimeProb >= 0.9) {
        animTime = (tmpEstrelas * Math.random() * (3 - 2) + 2)
      } else{
        animTime = (tmpEstrelas * Math.random() * (2 - 1) + 1)
      };
      let rndSize;                                                      // Tamanho
      let sizeProb = (Math.random() * 2) - 1;
      if(sizeProb >= 0.9){
        rndSize = (sizeEstrelas * Math.random() * (3 - 2) + 2)
      } else{
        rndSize = (sizeEstrelas * Math.random() * (2 - 1) + 1)
      };

      let opac;                                                         // Opacidade Inicial
      let opacProb = (Math.random()*2) - 1;
      if (opacProb >= 50) {
        opac = Math.random() * (0.95 - 0.75) + 0.75;
      } else {
        opac = 0;
      };
      let flash;                                                        // Opacidade Máxima
      let flashProb = (Math.random()*2) - 1;
      if (flashProb >= 0.85) {
        flash = Math.random() * (1 - 0.8) + 0.8;
      } else {
        flash = Math.random() * 0.2;
      };
      const [x1, x2, x3, x4, x5, x6] =                 // Posições aleatórias para animação
      [(Math.random()*2) - 1, (Math.random()*2) - 1, (Math.random()*2) - 1,
          (Math.random()*2) - 1, (Math.random()*2) - 1, (Math.random()*2) - 1];

      const Star = { x, y, r, g, b, rndSize, animTime,                    // Passa Props para lista
            flash, opac, x1,x2,x3,x4,x5,x6};
      return Star
    };

    function addStar(Star){                                                             // Renderiza Estrela no DOM
      const starElement = document.createElement('div');
      starElement.className = 'Star';
      starElement.style.height = `${Star.rndSize}px`;
      starElement.style.width = `${Star.rndSize}px`;
      starElement.style.left = `${Star.x}vw`;
      starElement.style.top = `${Star.y}vh`;
      starElement.style.animationDuration = `${Star.animTime}s`;
      starElement.style.background = `rgb(${Star.r},${Star.g},${Star.b})`;
      starElement.style.setProperty('--flash', Star.flash);
      starElement.style.setProperty('--opac', Star.opac);
      starElement.style.setProperty('--x1', Star.x1 + "px");
      starElement.style.setProperty('--x2', Star.x2 + "px");
      starElement.style.setProperty('--x3', Star.x3 + "px");
      starElement.style.setProperty('--x4', Star.x4 + "px");
      starElement.style.setProperty('--x5', Star.x5 + "px");
      starElement.style.setProperty('--x6', Star.x6 + "px");
      if (Star.rndSize >= 4) {
        starElement.style.boxShadow = `0px 0px 12px 2px rgba(255, 255, 255, 0.25)`;
      }

      starContainer.current.appendChild(starElement);
      starElement.addEventListener("animationend", () => {
        starElement.remove();
        addStar(generateStar())
      });
    };

    function addStars(){
      for (let i = 0; i < qtdEstrelas; i++){
        addStar(generateStar())
      }
    }
    addStars();

    generateInteractiveStars().forEach(intStar => {                                         // Renderiza Estrela Interativa no DOM
      const intStarElement = document.createElement('div');
      const earthElement = document.createElement('div');
      earthElement.className = 'earth';
      earthElement.style.left = `${intStar.intStar_x + 6.5}%`;
      earthElement.style.top = `${intStar.intStar_y}%`;
      earthElement.style.setProperty('--x1', intStar.x10 + "px");
      earthElement.style.setProperty('--x2', intStar.x9 + "px");
      earthElement.style.setProperty('--x5', intStar.x6 + "px");
      earthElement.style.setProperty('--x6', intStar.x5 + "px");
      earthElement.style.setProperty('--x9', intStar.x2 + "px");
      earthElement.style.setProperty('--x10', intStar.x1 + "px");
      intStarElement.className = 'interactive-star';
      intStarElement.style.left = `${intStar.intStar_x}%`;
      intStarElement.style.top = `${intStar.intStar_y}%`;
      intStarElement.style.setProperty('--x1', intStar.x1 + "px");
      intStarElement.style.setProperty('--x2', intStar.x2 + "px");
      intStarElement.style.setProperty('--x5', intStar.x5 + "px");
      intStarElement.style.setProperty('--x6', intStar.x6 + "px");
      intStarElement.style.setProperty('--x9', intStar.x9 + "px");
      intStarElement.style.setProperty('--x10', intStar.x10 + "px");
      starContainerint.current.appendChild(intStarElement);
      starContainerint.current.appendChild(earthElement);
    });

  }, [qtdEstrelas, tmpEstrelas, sizeEstrelas]);                                                                    // Fim useEffect


  return (                                                                               // JSX
<div className="App">

      <div id = "slidersinfo">
        <h1>✦ Star Editor ✦</h1>
        <p>Star Size: {sizeEstrelas}</p>
        <SlidersSize onSliderChange_size = {updateSizeEstrelas} />
        <p>Color Variation: {colorEstrelas}</p>
        <SlidersColor onSliderChange_color = {updateColorEstrelas} />
        <p>Light Delay: {tmpEstrelas}</p>
        <SlidersTmp onSliderChange_tmp = {updateTmpEstrelas} />
        <p>Quantity: {qtdEstrelas}</p>
        <SlidersQtd onSliderChange_qtd = {updateQtdEstrelas} />
        

      </div>

    <div>
      <div id="starfield" ref={starContainer}></div>
      <div id="starfieldint" ref={starContainerint}></div>
    </div>
  </div>
  );
};

export default App;
