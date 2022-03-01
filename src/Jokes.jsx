/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import jokes from './jokesData';

const Container = styled.div`
`;
// const JokesDiv = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-content: center;
//     justify-content: flex-end;
// `;
const JokeHeader = styled.h1`
    font-family: 'Shadows Into Light';
    font-size: xxx-large;
    color: #525174;
`;
const JokeQuestion = styled.h3`
  width: 300px;
  font-family: 'Shadows Into Light';
  text-transform: capitalize;
  font-size: x-large;
  color: white;
  letter-spacing: 1.75px;
`;
const JokeAnswer = styled.h3`
    text-transform: uppercase;
    font-family: 'Shadows Into Light';
    font-size: large;
    color: white;
    letter-spacing: 1.5px;
`;
// const RefreshImg = styled.img`
//   height: 40px;
//   width: 40px;
//   border-radius: 40%;
// `;
// const ButtonDiv = styled.div`
// `;
const NewJokeButton = styled.button`
  height: 39px;
  width: 41px;
  border-radius: 50%;
  border: 3px solid #525174;
  background-color: #799496;
  color: white;
  /* blue: #525174 green: #799496 */
  /* padding: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1rem;
  width: 100px;
  margin: 1rem; */
`;
const RevealButton = styled.button`
  padding: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1rem;
  width: 100px;
  margin: 1rem;
  border: 3px solid #525174;
  font-family: 'Shadows Into Light';
  font-size: x-large;
  color: white;
  background-color: #799496;
`;

function Jokes() {
  const [joke, setJoke] = useState([]);
  const [answerShown, setAnswerShown] = useState(false);

  const displayRandomJoke = () => {
    const randomJoke = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomJoke]);
  };
  const reveal = () => {
    setAnswerShown(false);
    displayRandomJoke();
  };

  useEffect(() => {
    displayRandomJoke();
  }, []);
  return (
    <Container>
      <JokeHeader>Crappy Jokes</JokeHeader>
      <NewJokeButton type="button" onClick={() => reveal()}><AutorenewIcon /></NewJokeButton>
      <JokeQuestion>{joke.question}</JokeQuestion>
      {answerShown
        ? <JokeAnswer>{joke.answer}</JokeAnswer>
        : null}
      <RevealButton type="button" onClick={() => setAnswerShown(!answerShown)}>Reveal</RevealButton>
    </Container>
  );
}

export default Jokes;
