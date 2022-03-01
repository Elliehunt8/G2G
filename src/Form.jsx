/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
// import { useForm, Controller } from 'react-hook-form';
// import { TextField, Checkbox } from '@mui/material';
// import Input from '@mui/material/Input';
// import Select from 'react-select';
const FormContainer = styled.div`
  border: 8px solid #799496;
`;
const StarsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
`;
const SurpriseText = styled.div`
  font-family: 'Khand', sans-serif;
`;
const RatingCalc = styled.div`
  font-family: 'Khand', sans-serif;
`;
const RatingForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Options = styled.div`
  display: flex;
  justify-content: center;
  font-size: large;
  font-family: 'Khand', sans-serif;
  text-transform: capitalize;
`;
const SubmitButton = styled.button`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  width: 200px;
  font-family: 'Shadows Into Light';
  font-size: large;
  color: white;
  background-color: #799496;
  margin: 5px;
  margin-left: 12rem;
`;
const ReportButton = styled.button`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-family: 'Shadows Into Light';
  color: white;
  margin-left: 48rem;
  margin-top: 10px;
  background-color: #799496;
`;
const Emojis = styled.div`
    display: flex;
    justify-content: center;
`;
const Legend = styled.legend`
  font-family: 'Shadows Into Light';
  font-size: x-large;
  letter-spacing: 0.75px;
  text-transform: capitalize;
`;
function Form() {
  const [washed, setWashed] = useState(null);
  const [experience, setExperience] = useState(null);
  const [cleanliness, setCleanliness] = useState(null);
  const [keyReq, setKey] = useState(null);
  const [purchase, setPurchase] = useState(null);
  const [employees, setEmployees] = useState(null);
  const [genderNeutral, setGenderNeutral] = useState(null);
  const [stalls, setStalls] = useState(null);
  const [tp, setTp] = useState(null);
  const [experiencePoints, setExperiencePoints] = useState(0);
  const [cleanlinessPoints, setCleanlinessPoints] = useState(0);
  const [keyPoints, setKeyPoints] = useState(0);
  const [purchasePoints, setPurchasePoints] = useState(0);
  const [employeePoints, setEmployeePoints] = useState(0);
  const [gnPoints, setGnPoints] = useState(0);
  const [stallPoints, setStallPoints] = useState(0);
  const [tpPoints, setTpPoints] = useState(0);
  const [rating, setRating] = useState(null);
  // const [totalPoints, setTotalPoints] = useState(0);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const body = {
      washed, experience, cleanliness, keyReq, purchase, employees, genderNeutral, stalls, tp,
    };
    console.log(body);
  };

  const generateRating = () => {
    if (experience === 'terrible') {
      setExperiencePoints(experiencePoints + 1);
    } else if (experience === 'ok') {
      setExperiencePoints(experiencePoints + 2);
    } else if (experience === 'good') {
      setExperiencePoints(experiencePoints + 3);
    } else if (experience === 'great') {
      setExperiencePoints(experiencePoints + 4);
    } else if (experience === 'amazing') {
      setExperiencePoints(experiencePoints + 5);
    } else {
      setExperiencePoints(experiencePoints + 0);
    }
    if (cleanliness === 'diseased') {
      setCleanlinessPoints(cleanlinessPoints + 1);
    } else if (cleanliness === 'gross') {
      setCleanlinessPoints(cleanlinessPoints + 2);
    } else if (cleanliness === 'fine') {
      setCleanlinessPoints(cleanlinessPoints + 3);
    } else if (cleanliness === 'clean') {
      setCleanlinessPoints(cleanlinessPoints + 4);
    } else if (cleanliness === 'spotless') {
      setCleanlinessPoints(cleanlinessPoints + 5);
    } else {
      setCleanlinessPoints(cleanlinessPoints + 0);
    }
    if (keyReq === 'yes') {
      setKeyPoints(keyPoints + 0);
    } else if (keyReq === 'no') {
      setKeyPoints(keyPoints + 2);
    } else {
      setKeyPoints(keyPoints + 0);
    }
    if (purchase === 'no') {
      setPurchasePoints(purchasePoints + 2);
    } else {
      setPurchasePoints(purchasePoints + 0);
    }
    if (employees === 'yes') {
      setEmployeePoints(employeePoints + 2);
    } else {
      setEmployeePoints(employeePoints + 0);
    }
    if (genderNeutral === 'yes') {
      setGnPoints(gnPoints + 2);
    } else {
      setGnPoints(gnPoints + 0);
    }
    if (stalls === 'one') {
      setStallPoints(stallPoints + 5);
    } else if (stalls === 'multipleWdoors') {
      setStallPoints(stallPoints + 4);
    } else if (stalls === 'multipleW/Odoors') {
      setStallPoints(stallPoints + 1);
    } else {
      setStallPoints(stallPoints + 0);
    }
    if (tp === 'none') {
      setTpPoints(tpPoints + 0);
    } else if (tp === '1') {
      setTpPoints(tpPoints + 2);
    } else if (tp === '2') {
      setTpPoints(tpPoints + 4);
    } else if (tp === '3') {
      setTpPoints(tpPoints + 5);
    } else {
      setTpPoints(tpPoints + 0);
    }
    const total = cleanlinessPoints + experiencePoints + keyPoints + purchasePoints + employeePoints + gnPoints + stallPoints + tpPoints;
    console.log(total);
    const ratingAvg = total / 5;
    console.log(ratingAvg);
    if (total > 25) {
      setRating(5);
    } else {
      setRating(ratingAvg);
    }
  };
  const reported = () => {
    window.alert('Bathroom Reported');
  };

  return (
    <FormContainer>
      <StarsDiv>
        <Rating name="read-only" value={3.45} precision={0.25} max={5} size="medium" readOnly />
      </StarsDiv>
      <ReportButton onClick={() => reported()} type="submit">Report Out of Order/Closed</ReportButton>
      <RatingForm onSubmit={(e) => onFormSubmit(e)}>
        <fieldset>
          <Legend>How was your experience overall?</Legend>
          <Options>
            <label htmlFor="terrible">
              <input
                type="radio"
                id="terrible"
                name="overallExp"
                value="terrible"
                onClick={() => setExperience('terrible')}
              />
              Terrible
            </label>
            <label htmlFor="ok">
              <input
                type="radio"
                id="Ok"
                name="overallExp"
                value="Ok"
                onClick={() => setExperience('ok')}
              />
              Ok
            </label>
            <label htmlFor="good">
              <input
                type="radio"
                id="good"
                name="overallExp"
                value="good"
                onClick={() => setExperience('good')}
              />
              Good
            </label>
            <label htmlFor="great">
              <input
                type="radio"
                id="great"
                name="overallExp"
                value="great"
                onClick={() => setExperience('great')}
              />
              Great
            </label>
            <label htmlFor="amazing">
              <input
                type="radio"
                id="amazing"
                name="overallExp"
                value="amazing"
                onClick={() => setExperience('amazing')}
              />
              Amazing
            </label>
          </Options>
          {experience === 'terrible' ? <Emojis>👎 👎 👎</Emojis> : experience === 'ok' ? <Emojis>🤷‍♀️ 🆗 🤷‍♂️</Emojis> : experience === 'good' ? <Emojis>👍 👍 👍</Emojis> : experience === 'great' ? <Emojis>🙂 🙂 🙂</Emojis> : experience === 'amazing' ? <Emojis>🚽 🥳 🧻</Emojis> : null}
          <Legend>Was the bathroom clean?</Legend>
          <Options>
            <label htmlFor="diseased">
              <input
                type="radio"
                id="diseased"
                name="cleanliness"
                value="diseased"
                onClick={() => setCleanliness('diseased')}
              />
              Diseases Likely
            </label>
            <label htmlFor="Gross">
              <input
                type="radio"
                id="Gross"
                name="cleanliness"
                value="Gross"
                onClick={() => setCleanliness('gross')}
              />
              Gross
            </label>
            <label htmlFor="fine">
              <input
                type="radio"
                id="fine"
                name="cleanliness"
                value="fine"
                onClick={() => setCleanliness('fine')}
              />
              Fine
            </label>
            <label htmlFor="clean">
              <input
                type="radio"
                id="clean"
                name="cleanliness"
                value="clean"
                onClick={() => setCleanliness('clean')}
              />
              Clean
            </label>
            <label htmlFor="Spotless">
              <input
                type="radio"
                id="Spotless"
                name="cleanliness"
                value="Spotless"
                onClick={() => setCleanliness('spotless')}
              />
              Spotless
            </label>
          </Options>
          {cleanliness === 'diseased' ? <Emojis>🦠 👀 ☣️</Emojis> : cleanliness === 'gross' ? <Emojis>🤮 🤢 👎</Emojis> : cleanliness === 'fine' ? <Emojis>🤷‍♀️ 🆗 🤷‍♂️</Emojis> : cleanliness === 'clean' ? <Emojis>🧼 🧽 👍</Emojis> : cleanliness === 'spotless' ? <Emojis>✨ 😍 ✨</Emojis> : null}
          <Legend>Does this bathroom require a key?</Legend>
          <Options>
            <label htmlFor="keychoiceyes">
              <input
                type="radio"
                id="keychoiceyes"
                name="key"
                value="key yes"
                onClick={() => setKey('yes')}
              />
              Yes

            </label>
            <label htmlFor="keychoiceno">
              <input
                type="radio"
                id="keychoiceno"
                name="key"
                value="key no"
                onClick={() => setKey('no')}
              />
              No
            </label>
          </Options>
          {keyReq === 'yes' ? <Emojis>🔑 👎</Emojis> : keyReq === 'no' ? <Emojis>🚫 🔑 🎊</Emojis> : null}
          <Legend>Were you required to make a purchase?</Legend>
          <Options>
            <label htmlFor="purchaseYes">
              <input
                type="radio"
                id="purchaseYes"
                name="purchase"
                value="purchaseYes"
                onClick={() => setPurchase('yes')}
              />
              Yes

            </label>
            <label htmlFor="purchaseNo">
              <input
                type="radio"
                id="purchaseNo"
                name="purchase"
                value="purchaseNo"
                onClick={() => setPurchase('no')}
              />
              No
            </label>
          </Options>
          {purchase === 'yes' ? <Emojis>🙄 💰</Emojis> : purchase === 'no' ? <Emojis>🎉 🥳</Emojis> : null}
          <Legend>Did the employees mind their biz while you did your biz?</Legend>
          <Options>
            <label htmlFor="goodEmployee">
              <input
                type="radio"
                id="goodEmp"
                name="employee"
                value="goodEmp"
                onClick={() => setEmployees('yes')}
              />
              Yes

            </label>
            <label htmlFor="badEmployee">
              <input
                type="radio"
                id="badEmp"
                name="employee"
                value="badEmp"
                onClick={() => setEmployees('no')}
              />
              No
            </label>
          </Options>
          {employees === 'yes' ? <Emojis>☺️☺️☺️</Emojis> : employees === 'no' ? <Emojis>🥴🥴🥴</Emojis> : null}
          <Legend>Gender Neutral?</Legend>
          <Options>
            <label htmlFor="GN">
              <input
                type="radio"
                id="GN"
                name="genderneutral"
                value="GN"
                onClick={() => setGenderNeutral('yes')}
              />
              Yes

            </label>
            <label htmlFor="notGN">
              <input
                type="radio"
                id="noGN"
                name="genderneutral"
                value="noGN"
                onClick={() => setGenderNeutral('no')}
              />
              No
            </label>
          </Options>
          {genderNeutral === 'yes' ? <Emojis>💪 💪 💪</Emojis> : genderNeutral === 'no' ? <Emojis>😒 😒 😒</Emojis> : null}
          <Legend>Stalls</Legend>
          <Options>
            <label htmlFor="oneStall">
              <input
                type="radio"
                id="oneStall"
                name="stalls"
                value="oneStall"
                onClick={() => setStalls('one')}
              />
              Single

            </label>
            <label htmlFor="multipleStallsDoors">
              <input
                type="radio"
                id="multipleStallsD"
                name="stalls"
                value="multipleStallsD"
                onClick={() => setStalls('multipleWdoors')}
              />
              Multiple with doors
            </label>
            <label htmlFor="multipleStallsNoDoors">
              <input
                type="radio"
                id="multipleStallsND"
                name="stalls"
                value="multipleStallsND"
                onClick={() => setStalls('multipleW/Odoors')}
              />
              Multiple without doors
            </label>
          </Options>
          {stalls === 'one' ? <Emojis>🕺</Emojis> : stalls === 'multipleWdoors' ? <Emojis>🕺 💃 🕺</Emojis> : stalls === 'multipleW/Odoors' ? <Emojis>👯‍♀️👯‍♂️👯‍♀️</Emojis> : null}

          <Legend>Toilet Paper?</Legend>
          <Options>
            <label htmlFor="none">
              <input
                type="radio"
                id="non"
                name="tp"
                value="none"
                onClick={() => setTp('none')}
              />
              None

            </label>
            <label htmlFor="onePly">
              <input
                type="radio"
                id="onePly"
                name="tp"
                value="onePly"
                onClick={() => setTp('1')}
              />
              1-Ply

            </label>
            <label htmlFor="twoPly">
              <input
                type="radio"
                id="twoPly"
                name="tp"
                value="twoPly"
                onClick={() => setTp('2')}
              />
              2-Ply
            </label>
            <label htmlFor="threePly">
              <input
                type="radio"
                id="threePly"
                name="tp"
                value="threePly"
                onClick={() => setTp('3')}
              />
              3-Ply
            </label>
          </Options>
          {tp === 'none' ? <Emojis> 🧻 😡 </Emojis> : tp === '1' ? <Emojis> 🧻 👎 </Emojis> : tp === '2' ? <Emojis> 🧻 👍 </Emojis> : tp === '3' ? <Emojis>🧻 👏 </Emojis> : null}
          <Legend>Did you wash your hands?</Legend>
          <Options>
            <label htmlFor="washed">
              <input
                type="radio"
                id="yes"
                name="hands"
                value="yes"
                onClick={() => setWashed('yes')}
              />
              Yes
            </label>
            <label htmlFor="maybe">
              <input
                type="radio"
                id="maybe"
                name="hands"
                value="maybe"
                onClick={() => setWashed('maybe')}
              />
              Maybe
            </label>
            <label htmlFor="no">
              <input
                type="radio"
                id="no"
                name="hands"
                value="no"
                onClick={() => setWashed('no')}
              />
              No
            </label>
          </Options>
          {washed === 'yes' ? <Emojis>🙌 🙌 🙌</Emojis> : washed === 'maybe' ? <Emojis><SurpriseText>All right, then. Keep your secrets.</SurpriseText></Emojis> : washed === 'no' ? <Emojis><SurpriseText>Go wash your hands ya filthy animal</SurpriseText></Emojis> : null }
          <div>
            <SubmitButton type="button" onClick={() => generateRating()}>Generate Rating</SubmitButton>
            {rating > 0
              ? (
                <RatingCalc>
                  Calculated Rating =
                  {' '}
                  {rating}
                </RatingCalc>
              )
              : null}
          </div>
          <div>
            {rating
              ? <SubmitButton type="submit">Submit</SubmitButton>
              : null }
          </div>
        </fieldset>
      </RatingForm>
    </FormContainer>
  );
}

export default Form;
