import React from 'react';
import styled from 'styled-components';
import './App.css';
import imgOne from './img/card-img1.jpg';
import imgTwo from './img/card-img2.jpg';
import imgThree from './img/card-img3.jpg';
import imgFour from './img/card-img4.JPG';
import imgFive from './img/card-img5.PNG';
import imgSix from './img/card-img6.jpg';
import imgSeven from './img/card-img7.jpg';
import imgEight from './img/card-img8.jpg';


export function Cards() {
  return (
    <CardsWrapper>
      <section className = 'cards-top'>
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

      <section className = 'cards-bottom'>
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
      .card {
        width: 25%;
        margin: 1%;
        background-color: white;
        .card-img {
          width: 25%;
          
        }
        .card-title {
          
        }
        .card-text {
    
        }
        .card-btn {
    
        }
      
    }
    .cards-bottom {
      display: flex;
      .card {
        width: 25%;
        margin: 1%;
        background-color: white;
        .card-img {
          width: 100%;
          
        }
        .card-title {
          
        }
        .card-text {
    
        }
        .card-btn {
    
        }
    
  }
`
