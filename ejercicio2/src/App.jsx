import { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  const [totalCounter, setCounter] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)
  const incrementCounter = () => setCounter(totalCounter + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() =>{
        incrementGood();
        incrementCounter();
      }}>
        Good
      </button>
      <button onClick={() => {
        incrementNeutral();
        incrementCounter();
      }}>
        Neutral
      </button>
      <button onClick={() => {
        incrementBad();
        incrementCounter();
      }}>
        Bad
      </button>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {totalCounter}</div>
      <div>average {(good-bad)/totalCounter}</div>
      <div>positive {(good/totalCounter)*100} %</div>
    </div>
  )


}

export default App
