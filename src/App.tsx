import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import { Carousel } from 'components';

interface IHighlight {
  children: React.ReactNode;
  color: string;
}

const Highlight = ({ children, color }: IHighlight) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '90px 0',
      display: 'block',
      height: '200px',
      margin: '16px 16px 16px 0',
    }}
  >
    {' '}
    {children}{' '}
  </span>
);

function App() {
  return (
    <div className="App">
      <Carousel
        className={'exampleCarousel1'}
        show={3.5}
        slide={3}
        swiping={true}
      >
        <Highlight color="#2d66c3">We love Web 🌐</Highlight>
        <Highlight color="#f44336">We love Developers 👩🏻‍</Highlight>
        <a target="_blank" href="https://github.com/trendyol/">
          <Highlight color="#d53f8c">This is our github</Highlight>
        </a>
        <a target="_blank" href="https://trendyol.com/">
          <Highlight color="#f27a1a">This is our website</Highlight>
        </a>
        <Highlight color="#16be48">We love Trendyol green</Highlight>
        <Highlight color="#f27a1a">We love Trendyol orange</Highlight>
      </Carousel>
    </div>
  );
}

export default App;
