import React, { useEffect, useRef } from 'react';
import './App.css';

// Task: Setar todas as Probs para gerar 4 "raridades" de estrelas
const myLinks = ["www.mylink.com"];

const generateStar = () => {
  const stars = [];
  for (let i = 0; i < 120; i++) {
    // Posição
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    // RGB aleatório
    const r = Math.random() * (255 - 190) + 190;
    const g = Math.random() * (255 - 190) + 190;
    const b = Math.random() * (255 - 190) + 190;

    // Velocidade aleatória
    let rndTwinkle;
    let twinkleProb = (Math.random()*2) - 1;
    if (twinkleProb >= 0.75) {
      rndTwinkle = Math.random() * (2 - 0.6) + 0.6;
    } else {
      rndTwinkle = Math.random() * (5 - 2) + 2;
    };

    // Tamanho
    let rndSize;
    let sizeProb = (Math.random()*2) - 1;
    if (sizeProb >= 0.99) {
      rndSize = Math.random() * (3.5 - 2) + 2;
    } else {
      rndSize = Math.random() * (2 - 1) + 1;
    };

    // Opacidade Inicial
    let opac;
    let opacProb = (Math.random()*2) - 1;
    if (opacProb >= 50) {
      opac = Math.random() * (0.95 - 0.75) + 0.75;
    } else {
      opac = 0;
    };

    // Opacidade Flash
    let flash;
    let flashProb = (Math.random()*2) - 1;
    if (flashProb >= 0.85) {
      flash = Math.random() * (1 - 0.8) + 0.8;
    } else {
      flash = Math.random() * 0.2;
    };

    // Random Positions for animation
    const x1 = (Math.random()*2) - 1;
    const x2 = (Math.random()*2) - 1;
    const x3 = (Math.random()*2) - 1;
    const x4 = (Math.random()*2) - 1;
    const x5 = (Math.random()*2) - 1;
    const x6 = (Math.random()*2) - 1;
    const x7 = (Math.random()*2) - 1;
    const x8 = (Math.random()*2) - 1;
    const x9 = (Math.random()*2) - 1;
    const x10 = (Math.random()*2) - 1;
    stars.push({ x, y, r, g, b, rndTwinkle, rndSize, flash, opac, x1,x2,x3,x4,x5,x6,x7,x8,x9,x10 });
  }
  return stars;
};

const generateInteractiveStars = () => {
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

const App = () => {
  const starContainer = useRef(null);
  const starContainerint = useRef(null);

  useEffect(() => {
    const addStar = (star) => {
      const starElement = document.createElement('div');
      starElement.className = 'star';
      starElement.style.height = `${star.rndSize}px`;
      starElement.style.width = `${star.rndSize}px`;
      starElement.style.left = `${star.x}vw`;
      starElement.style.top = `${star.y}vh`;
      starElement.style.animationDuration = `${star.rndTwinkle}s`;
      starElement.style.background = `rgb(${star.r},${star.g},${star.b})`;
      starElement.style.setProperty('--flash', star.flash);
      starElement.style.setProperty('--opac', star.opac);
      starElement.style.setProperty('--x1', star.x1 + "px");
      starElement.style.setProperty('--x2', star.x2 + "px");
      starElement.style.setProperty('--x3', star.x3 + "px");
      starElement.style.setProperty('--x4', star.x4 + "px");
      starElement.style.setProperty('--x5', star.x5 + "px");
      starElement.style.setProperty('--x6', star.x6 + "px");
      starElement.style.setProperty('--x7', star.x7 + "px");
      starElement.style.setProperty('--x8', star.x8 + "px");
      starElement.style.setProperty('--x9', star.x9 + "px");
      starElement.style.setProperty('--x10', star.x10 + "px");

      if (star.rndSize >= 4) {
        starElement.style.boxShadow = `0px 0px 12px 2px rgba(255, 255, 255, 0.25)`;
      }

      starContainer.current.appendChild(starElement);
      starElement.addEventListener("animationend", () => {
        starElement.remove();
        const newStar = generateStar()[0];
        addStar(newStar);
      });
    };

    starContainer.current.innerHTML = '';
    starContainerint.current.innerHTML = '';

    let i = 0;
    const interval = setInterval(() => {
      if (i < 2600) {
        const newStar = generateStar()[0];
        addStar(newStar);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 15);

    generateInteractiveStars().forEach(intStar => {
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

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div id="starfield" ref={starContainer}></div>
      <div id="starfieldint" ref={starContainerint}></div>
    </div>
  );
};

export default App;
