const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => 
  <>
    {parts.map((value,index) => 
        <Part part={value} key={index}/>
      )}
  </>

const Course = ({ course }) => {
    return (
        <>
        <Header course={course.name}/>
        <Content parts={course.parts} />
        <Total sum={course.parts.reduce((total,value) => (total + value.exercises) , 0)} />
        </>
    )
}  

export default Course