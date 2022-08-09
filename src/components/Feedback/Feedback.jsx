/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import Notification from "./Statistics/Notofocation";
import Statistics from './Statistics/Statistics'
// import css from './Feedback.module.css'
import ButtonFeedBack from "./ButtonFeedBack/ButtonFeedBack";

const buttonName = ['Good', 'Neutral', 'Bad'];

const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0)
    

  const clickButtonFeedback = event => {
    let name = event.target.name.toLowerCase();

    switch (name) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };


    useEffect(() => {
        setTotal(good+bad+neutral)
}, [good, neutral, bad])

    return (
        <>
        <div>
                <ButtonFeedBack buttonName={buttonName} onClickButtonFeedback={clickButtonFeedback} />
        </div>
            <h2>Statistics</h2>
            {total === 0 ?
                <Notification message="There is no feedback" /> :
                <Statistics good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total} />}
        </>
    )
}
export default Feedback