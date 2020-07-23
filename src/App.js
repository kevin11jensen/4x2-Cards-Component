import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import { TweenLite, Power3 } from 'gsap';
//img imports
import imgOne from './img/card-img1.jpg';
import imgTwo from './img/card-img2.jpg';
import imgThree from './img/card-img3.jpg';
import imgFour from './img/card-img4.JPG';
import imgFive from './img/card-img5.PNG';
import imgSix from './img/card-img6.jpg';
import imgSeven from './img/card-img7.jpg';
import imgEight from './img/card-img8.jpg';


export function Cards() {
  let top = useRef(null);
  let bottom = useRef(null);

useEffect(() => {
  TweenLite.from(top, {x: -1000, duration: 3, ease: Power3})
  TweenLite.from(bottom, {x: 1000, duration: 3, ease: Power3})
}, [])

  return (
    <CardsWrapper>
      <section ref = {el => (top = el)} className = 'cards-top'>
        <div className = 'card'>
          <img className = 'card-img' src = {imgOne} alt = '' />
          <h3 className = 'card-title'>Card Title</h3>
          <p className = 'card-text'>Card Text</p>
          <button className = 'card-btn'>Card Button</button>
        </div>
        <div className = 'card'>
          <img className = 'card-img' src = {imgTwo} alt = '' />
          <h3 className = 'card-title'>Card Title</h3>
          <p className = 'card-text'>Card Text</p>
          <button className = 'card-btn'>Card Button</button>
        </div>
        <div className = 'card'>
        <img className = 'card-img' src = {imgThree} alt = '' />
        <h3 className = 'card-title'>Card Title</h3>
        <p className = 'card-text'>Card Text</p>
        <button className = 'card-btn'>Card Button</button>
      </div>
      <div className = 'card'>
        <img className = 'card-img' src = {imgFour} alt = '' />
        <h3 className = 'card-title'>Card Title</h3>
        <p className = 'card-text'>Card Text</p>
        <button className = 'card-btn'>Card Button</button>
      </div>
      </section>

      <section ref = {el => (bottom = el)} className = 'cards-bottom'>
        <div className = 'card'>
          <img className = 'card-img' src = {imgFive} alt = '' />
          <h3 className = 'card-title'>Card Title</h3>
          <p className = 'card-text'>Card Text</p>
          <button className = 'card-btn'>Card Button</button>
        </div>
        <div className = 'card'>
        <img className = 'card-img' src = {imgSix} alt = '' />
        <h3 className = 'card-title'>Card Title</h3>
        <p className = 'card-text'>Card Text</p>
        <button className = 'card-btn'>Card Button</button>
      </div>
      <div className = 'card'>
        <img className = 'card-img' src = {imgSeven} alt = '' />
        <h3 className = 'card-title'>Card Title</h3>
        <p className = 'card-text'>Card Text</p>
        <button className = 'card-btn'>Card Button</button>
      </div>
      <div className = 'card'>
        <img className = 'card-img' src = {imgEight} alt = '' />
        <h3 className = 'card-title'>Card Title</h3>
        <p className = 'card-text'>Card Text</p>
        <button className = 'card-btn'>Card Button</button>
      </div>
      </section>
    </CardsWrapper>
  );
}

const CardsWrapper = styled.div `
  background-color: lightGray;
  
  .cards-top {
    display: flex;
    @media (max-width: 425px) {
      flex-direction: column;
      align-items: center;
    }
    .card {
      background-color: white;
      width: 25%;
      margin: 1%;
      text-align: center;
      @media (max-width: 425px) {
        width: 95%;
      }
      .card-img {
        width: 100%;
        height: 11rem;
        object-fit: cover;
        @media (max-width: 425px) {
          height: 16rem;
        }
      }
      .card-title {
              
      }
      .card-text {
          
      }
      .card-btn {
          margin-bottom: 3%;
          padding: 2% 5%;
      }
    }
  }
  .cards-bottom {
    display: flex;
    @media (max-width: 425px) {
      flex-direction: column;
      align-items: center;
    }
    .card {
      background-color: white;
      width: 25%;
      margin: 1%;
      text-align: center;
      @media (max-width: 425px) {
        width: 95%;
      }
      .card-img {
        width: 100%;
        height: 11rem;
        object-fit: cover;
        @media (max-width: 425px) {
          height: 16rem;
        }
      }
      .card-title {
              
      }
      .card-text {
          
      }
      .card-btn {
          margin-bottom: 3%;
          padding: 2% 5%;
      }
    }
  }
`