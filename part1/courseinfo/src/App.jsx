const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1}/>
      <Content part2={part2} exercises2={exercises2}/>
      <Content part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
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

const Content = (partInfo) => {
  return (
    <div>
      <Part name={partInfo.part1}  count={partInfo.exercises1}/>
      <Part name={partInfo.part2}  count={partInfo.exercises2}/>
      <Part name={partInfo.part3}  count={partInfo.exercises3}/>
    </div>
  )
}

const Part = (partInfo) => {
  return (
    <div>
      <p>
        {partInfo.name}  {partInfo.count}
      </p>
    </div>
  )
}

const Total = (exerciseCount) => {
  return (
    <div>
      <p>Number of Exercises {exerciseCount.exercises1 + exerciseCount.exercises2 + exerciseCount.exercises3}</p>
    </div>
  )
}

export default App