import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Alex Laughlin',
        img: 'img/250x180/alex-laughlin.jpg',
        clicked: false
    },
    {
        name: 'Antron Brown',
        img: 'img/250x180/antron-brown.jpg',
        clicked: false
    },
    {
        name: 'Bo Butner',
        img: 'img/250x180/bo-butner.jpg',
        clicked: false
    },
    {
        name: 'Brittany Force',
        img: 'img/250x180/brittany-force.jpg',
        clicked: false
    },
    {
        name: 'Cruz Pedregon',
        img: 'img/250x180/cruz-pedregon.jpg',
        clicked: false
    },
    {
        name: 'Doug Kalitta',
        img: 'img/250x180/doug-kalitta.jpg',
        clicked: false
    },
    {
        name: 'Erica-Enders',
        img: 'img/250x180/erica-enders.jpg',
        clicked: false
    },
    {
        name: 'Greg Anderson',
        img: 'img/250x180/greg-anderson.jpg',
        clicked: false
    },
    {
        name: 'Jack Beckman',
        img: 'img/250x180/jack-beckman.jpg',
        clicked: false
    },
    {
        name: 'John Force',
        img: 'img/250x180/john-force.jpg',
        clicked: false
    },
    {
        name: 'Leah Pritchett',
        img: 'img/250x180/leah-pritchett.jpg',
        clicked: false
    },
    {
        name: 'Matt Hagan',
        img: 'img/250x180/matt-hagan.jpg',
        clicked: false
    },
    {
        name: 'Robert Hight',
        img: 'img/250x180/robert-hight.jpg',
        clicked: false
    },
    {
        name: 'Ron Caps',
        img: 'img/250x180/ron-caps.jpg',
        clicked: false
    },
    {
        name: 'Steve Torrance',
        img: 'img/250x180/steve-torrance.jpg',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every NHRA Driver once. When a driver is clicked, the grid will shuffle.<br/>Try not to click the same NHRA Driver twice or the game will restart!</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}