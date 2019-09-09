import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard.js';
import _ from 'lodash';

export default class WordCard extends Component {
    render() {
    return (
        <div>
            { Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i}/>) }
        </div>
    );
    }
}