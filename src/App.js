import React from 'react'
import Course from './components/Course'
/*const Course = ({courses}) => {
  return(
    <div>
      <h1>{courses[0].name}</h1>
      {courses[0].parts.map(x => <p key = {x.id}>{x.name} {x.exercises} </p>)}
      <h3>Total of {courses[0].parts.reduce((a,b) => a + b.exercises, 0)} exercises</h3>
      <h2>{courses[1].name}</h2>
      {courses[1].parts.map(x => <p key = {x.id}>{x.name} {x.exercises} </p>)}
      <h3>Total of {courses[1].parts.reduce((a,b) => a + b.exercises, 0)} exercises</h3>
    </div>
  )
}*/

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        },
        {
          name: 'RETARD',
          exercises: 10,
          id: 3
        }
      ]
    }
  ]


    return <Course courses={courses} />
 
}

export default App