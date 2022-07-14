import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import Final from "../finalScore";
const Q5 = ({ score, setScore, name }) => {
  //
  const [wrongAnswer1, setWrongAnswer1] = useState(false);
  const [wrongAnswer2, setWrongAnswer2] = useState(false);
  const [wrongAnswer3, setWrongAnswer3] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [showButtonContinue, setShowButtonContinue] = useState(false);
  const [showQ2, setShowQ2] = useState(true);

  useEffect(() => {
    setWrongAnswer1(false);
    setWrongAnswer2(false);
    setWrongAnswer3(false);
  }, []);

  console.log(score);

  //
  return (
    <div>
      {showQ2 ? (
        <div>
          <div className="circleQ1"></div>
          <div className="circleQ2"></div>
          <div className="circleQ3"></div>
          <div className="circleQ4"></div>
          <div className="circleQ5"></div>
          <div className="qH2">
            <h2 className="Qu">افضل مغنيـ/ـة بالنسبة لي هي ؟</h2>
          </div>
          <div className="divAllAnswers">
            <div className="divAnswer">
              <button
                onClick={() => {
                  setWrongAnswer1(true);
                  setCorrectAnswer(true);
                  setShowButtonContinue(true);
                  setDisableButton(true);
                }}
                disabled={disableButton}
                className="buttonQ"
                id={wrongAnswer1 ? "wrongAnswer1" : "none"}
              >
                The Weeknd
              </button>
            </div>
            <div className="divAnswer">
              <button
                onClick={() => {
                  setCorrectAnswer(true);
                  setScore(score + 1);
                  setShowButtonContinue(true);
                  setDisableButton(true);
                }}
                disabled={disableButton}
                className="buttonQ"
                id={correctAnswer ? "correctAnswer" : "none"}
              >
                Lana Del Rey
              </button>
            </div>
            <div className="divAnswer">
              <button
                onClick={() => {
                  setWrongAnswer2(true);
                  setCorrectAnswer(true);
                  setDisableButton(true);
                  setShowButtonContinue(true);
                }}
                disabled={disableButton}
                className="buttonQ"
                id={wrongAnswer2 ? "wrongAnswer2" : "none"}
              >
                Taylor Swift
              </button>
            </div>
            <div className="divAnswer">
              <button
                onClick={() => {
                  setWrongAnswer3(true);
                  setCorrectAnswer(true);
                  setShowButtonContinue(true);
                  setDisableButton(true);
                }}
                disabled={disableButton}
                className="buttonQ"
                id={wrongAnswer3 ? "wrongAnswer3" : "none"}
              >
                Selena Gomez
              </button>
            </div>
          </div>
          <div>
            {showButtonContinue ? (
              <button className="continue" onClick={() => setShowQ2(false)}>
                Continue
              </button>
            ) : (
              ""
            )}{" "}
          </div>
        </div>
      ) : (
        // <div>{<Q5 setScore={setScore} score={score} name={name} />}</div>

        <div> {<Final score={score} name={name} />} </div>
      )}
    </div>
  );
};

export default Q5;
