import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  const good = () => {
    return props.good
  }

  const neutral = () => {
    return props.neutral
  }

  const bad = () => {
    return props.bad
  }


  const all = () => {
    return props.all
  }

  const avarage = () => {
    return (props.good - props.bad) / props.all
  }

  const positive = () => {
    return (props.good / props.all) * 100
  }


  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>

            <tr>
              <td>Good:</td>
              <td>{good()}</td>
            </tr>
            <tr>
              <td>Neutral:</td>
              <td>{neutral()}</td>
            </tr>
            <tr>
              <td>Bad:</td>
              <td>{bad()}</td>
            </tr>
            <tr>
              <td>All:</td>
              <td>{all()}</td>
            </tr>
            <tr>
              <td>Avarage:</td>
              <td>{avarage()}</td>
            </tr>
            <tr>
              <td>Positive:</td>
              <td>{positive()} %</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const goodFeedback = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const neutralFeedback = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)

  }

  const badFeedback = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (

    <div>
      <div>
        <div>
          <h1>Give feedback</h1>
        </div>
        <button onClick={goodFeedback}>
          Good
        </button>
        <button onClick={neutralFeedback}>
          Neutral
        </button>
        <button onClick={badFeedback}>
          Bad
        </button>
      </div>
      <Statistic good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)