import { useState, useEffect } from "react";
import Notification from "./Statistics/Notofocation";
import Statistics from './Statistics/Statistics'
import css from './Feedback.module.css'

const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        setTotal(good+bad+neutral)
}, [good, neutral, bad])

    return (
        <>
        <div>
            <button className={css} type="button" onClick={() => setGood(good + 1)}>Good</button>
            <button className={css} type="button" onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button className={css} type="button" onClick={() => setBad(bad + 1)}>bad</button>
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
