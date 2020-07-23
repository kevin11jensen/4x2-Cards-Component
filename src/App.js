import React from 'react';
import styled from 'styled-components';
import './App.css';
import imgOne from './img/card-img1.jpg';
import imgTwofrom './img/card-img2.jpg';
import imgThree from './img/card-img3.jpg';
import imgFour from './img/card-img4.jpg';
import imgFive from './img/card-img5.png';
import imgSix from './img/card-img6.jpg';
import imgSeven from './img/card-img7.jpg';
import imgEight from './img/card-img8.jpg';


export function Cards() {
  return (
    <CardsWrapper>
      <div className = 'card'>
        <img className = 'card-img' src = {} alt = '' />
        <h3 className = 'card-title'>Card Title</h3>
        <p className = 'card-text'>Card Text</p>
        <button className = 'card-btn'>Card Button</button>
      </div>
      <div className = 'card'>
        <img className = 'card-img' src = {} alt = '' />
        <h3 className = 'card-title'>Card Title</h3>
        <p className = 'card-text'>Card Text</p>
        <button className = 'card-btn'>Card Button</button>
      </div>
      <div className = 'card'>
        <img className = 'card-img' src = {} alt = '' />
        <h3 className = 'card-title'>Card Title</h3>
        <p className = 'card-text'>Card Text</p>
        <button className = 'card-btn'>Card Button</button>
      </div>
      <div className = 'card'>
        <img className = 'card-img' src = {} alt = '' />
        <h3 className = 'card-title'>Card Title</h3>
        <p className = 'card-text'>Card Text</p>
        <button className = 'card-btn'>Card Button</button>
      </div>
      <div className = 'card'>
        <img className = 'card-img' src = {} alt = '' />
        <h3 className = 'card-title'>Card Title</h3>
        <p className = 'card-text'>Card Text</p>
        <button className = 'card-btn'>Card Button</button>
      </div>
      <div className = 'card'>
        <img className = 'card-img' src = {} alt = '' />
        <h3 className = 'card-title'>Card Title</h3>
        <p className = 'card-text'>Card Text</p>
        <button className = 'card-btn'>Card Button</button>
      </div>
      <div className = 'card'>
        <img className = 'card-img' src = {} alt = '' />
        <h3 className = 'card-title'>Card Title</h3>
        <p className = 'card-text'>Card Text</p>
        <button className = 'card-btn'>Card Button</button>
      </div>
      <div className = 'card'>
        <img className = 'card-img' src = {} alt = '' />
        <h3 className = 'card-title'>Card Title</h3>
        <p className = 'card-text'>Card Text</p>
        <button className = 'card-btn'>Card Button</button>
      </div>
    </CardsWrapper>
  );
}

const CardsWrapper = styled.div `

  .card {

    .card-img {

    }
    .card-title {

    }
    .card-text {

    }
    .card-btn {

    }
  }
`
