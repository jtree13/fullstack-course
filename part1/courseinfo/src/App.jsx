const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  //console.log(course.parts)

  return (
    <div>
      <Header course={course.name}/>
      <Content partsArray={course.parts}/>
      <Total partsArray={course.parts}/>
    </div>
  )
}

const Header = (course) => {
  return(
    <div>
      <h1>{course.course}</h1>
    </div>
  )
}

const Content = (courseParts) => {
  const [part1, part2, part3] = courseParts.partsArray
  return (
    <div>
      <Part name={part1.name}  count={part1.exercises}/>
      <Part name={part2.name}  count={part2.exercises}/>
      <Part name={part3.name}  count={part3.exercises}/>
    </div>
  )
}

const Part = (part) => {
  return (
    <div>
      <p>
        {part.name}  {part.count}
      </p>
    </div>
  )
}

const Total = (parts) => {
  const [part1, part2, part3] = parts.partsArray
  return (
    <div>
      <p>Number of Exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

export default App