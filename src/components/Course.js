import React from 'react'

const Course = ({courses}) => {
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
  }

export default Course