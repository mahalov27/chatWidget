import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const widgetContainer = document.getElementById('chat-widget-container') || (() => {
    const container = document.createElement('div');
    container.id = 'chat-widget-container';
    document.body.appendChild(container);
    return container;
})();

ReactDOM.render(<App />, widgetContainer);