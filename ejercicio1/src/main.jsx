import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = 'Half Stack application development'

  const courseInfo= [
    {key: 'fundamentals', part: 'Fundamentals of React', exercises: 10},
    {key: 'props', part: 'Using props to pass data', exercises: 7},
    {key: 'state', part: 'State of a component', exercises: 14},
    {key: 'fetch', part: 'Fetching resources from an A', exercises: 9}
  ]
  
  //Mi intento de resolverlo
/*   const parts = [
    'Fundamentals of React',
    'Using props to pass data',
    'State of a component',
  ]

  const exercises = [
    10,
    7,
    14,
  ] */

  //El ejercicio original
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
      <Content courseInfo={courseInfo}/>
      <Total courseInfo={courseInfo} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
