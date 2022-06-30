import React from 'react'
import ReactDOM from 'react-dom/client'

const Content = ({parts, exercises}) => (
  <ul>
    {parts.map((part, index) => (
      <li>{part} {exercises[index]}</li>
    ))}
  </ul>
)

const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>

  )
}


const Total = ({exercises}) => {
  let TotalEx=0;
  {exercises.map(exercise => (
    TotalEx += exercise
  ))}
  return(
    <div>
      <p>Total exercises {TotalEx}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    'Fundamentals of React',
    'Using props to pass data',
    'State of a component',
  ]

  const exercises = [
    10,
    7,
    14,
  ]
/*   const part1= 'Fundamentals of React'
  const exercises1= 10
  const part2= 'Using props to pass data'
  const exercises2= 7
  const part3= 'State of a component'
  const exercises3= 14 */



/*   return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  ) */

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
