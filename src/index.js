import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/fonts/NeueMachina/NeueMachina-Regular.otf';
import './assets/fonts/NeueMachina/NeueMachina-Light.otf';
import './assets/fonts/NeueMachina/NeueMachina-Ultrabold.otf';
import AnimatedCursor from "react-animated-cursor"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimatedCursor
        color="255,255,255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '3px solid #fff',
        }}
        />
    <App />
  </React.StrictMode>
);
