import React, { useState, useEffect } from 'react';
import Card from './Card';
import wrestling from '../images/wrestling.png';
import basketball from '../images/basketball.png';
import swimming from '../images/swimming.png';
import archery from '../images/archery.png';
import pingpong from '../images/pingpong.png';
import tennis from '../images/tennis.png';
import football from '../images/football.png';
import soccer from '../images/soccer.png';
import ski from '../images/ski.png';
import badminton from '../images/badminton.png';
import volleyball from '../images/volleyball.png';
import hockey from '../images/hockey.png';

function CardContainer(props) {
  const { handleGameLogic, score, highScore } = props;

  let images = [
    {
      src: wrestling,
      title: 'Wrestling',
      backgroundColor: 'rgb(255 223 137)',
      borderStyle: '1px solid rgb(255 223 137)',
    },
    {
      src: basketball,
      title: 'Basketball',
      backgroundColor: 'rgb(54 145 154)',
      borderStyle: '1px solid rgb(54 145 154)',
    },
    {
      src: hockey,
      title: 'Hockey',
      backgroundColor: 'rgb(119 4 4)',
      borderStyle: '1px solid rgb(119 4 4)',
    },
    {
      src: football,
      title: 'Football',
      backgroundColor: 'rgb(76 136 89)',
      borderStyle: '1px solid rgb(76 136 89)',
    },
    {
      src: ski,
      title: 'Ski',
      backgroundColor: 'rgb(111 31 0)',
      borderStyle: '1px solid rgb(111 31 0)',
    },
    {
      src: swimming,
      title: 'Swimming',
      backgroundColor: 'rgb(255 141 0)',
      borderStyle: '1px solid rgb(255 141 0)',
    },
    {
      src: volleyball,
      title: 'Volleyball',
      backgroundColor: 'rgb(52 52 60)',
      borderStyle: '1px solid rgb(52 52 60)',
    },
    {
      src: soccer,
      title: 'Soccer',
      backgroundColor: 'rgb(245 194 80)',
      borderStyle: '1px solid rgb(245 194 80)',
    },
    {
      src: badminton,
      title: 'Badminton',
      backgroundColor: 'rgb(136 96 6)',
      borderStyle: '1px solid rgb(136 96 6)',
    },
    {
      src: tennis,
      title: 'Tennis',
      backgroundColor: 'rgb(255 148 148)',
      borderStyle: '1px solid rgb(255 148 148)',
    },
    {
      src: archery,
      title: 'Archery',
      backgroundColor: 'rgb(189 166 82)',
      borderStyle: '1px solid rgb(189 166 82)',
    },
    {
      src: pingpong,
      title: 'Pingpong',
      backgroundColor: 'rgb(226 143 58)',
      borderStyle: '1px solid rgb(226 143 58)',
    },
  ];

  const [cards, setNewCards] = useState(images);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    // eslint-disable-next-line
    setNewCards(newCards);
  }, [score, highScore]);

  return (
    <>
      {cards.map((card) => (
        <Card card={card} key={card.title} handleGameLogic={handleGameLogic} />
      ))}
    </>
  );
}

export default CardContainer;
