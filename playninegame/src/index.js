import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faCheck, faTimes, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);
library.add(faCheck);
library.add(faTimes);
library.add(faSyncAlt);

const root = document.getElementById('root');

class App extends Component {
    render() {
        return (
          <Game />
        );
    }
}

ReactDOM.render(<App />, root);