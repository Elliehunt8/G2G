/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styled from 'styled-components';
import Jokes from './Jokes';
import Map from './Map';
// { useState, useEffect }
const Title = styled.h1`
  font-family: 'Merienda';
  font-size: xxx-large;
  color: #525174;
`;
const Tagline = styled.h2`
    font-size: x-large;
    color: #525174;
    font-family: 'Khand',sans-serif;
    margin-left: 55rem;
    font-style: italic;
    text-transform: lowercase;
`;
const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: center;
  background-color: white;
`;
const TheOs = styled.img`
  padding-top: 35px;
  height: 70px;
  width: 70px;
  border-radius: 20% 20% 80% 80%;
`;

const Space = styled.div`
  width: 60px;
`;
const BodyDiv = styled.div`
   margin: 0 auto;
   min-height: 100%;
`;
const RightContent = styled.div`
  /* grid-column-start: 2;
  grid-column-end: 3; */
  float: right;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  text-align: center;
  padding-top: 4rem;
  min-height: 100%;
  margin-right: 10rem;
  margin-bottom: 3rem;
`;
const LeftContent = styled.div`
  /* display: flex;
  justify-content: space-between;
  max-height: 700px;
  padding: 1rem; */
  min-height: 100%;
  margin-left: 10rem;
  padding-top: 3rem;
`;
function App() {
  return (
    <BodyDiv>
      <TitleDiv>
        <Title>G</Title>
        <TheOs src="src/img/theO.jpg" />
        <Title>TTA</Title>
        <Space />
        <Title>G</Title>
        <TheOs src="src/img/theO.jpg" />
      </TitleDiv>
      <Tagline>Public Bathroom Locator</Tagline>
      <RightContent>
        <Jokes />
      </RightContent>
      <LeftContent>
        <Map />
      </LeftContent>
    </BodyDiv>
  );
}

export default App;
