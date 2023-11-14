/* eslint-disable react/prop-types */
import Todo from './Todo';
import './App.css';
import Actor from './Actor';
import Singer from './SInger';

function App() {
  const actors=['sakib', 'raj','rubel','jasim'];
  const singers = [
    {id:1, name:'mostafiz', age: 54},
    {id:2, name:'eva', age: 44},
    {id:3, name:'Shuvo', age: 34},
    {id: 4, name:'pritom', age: 25}
    ]
 

  return (
    <>
      {
        singers.map(singer=> <Singer singer={singer} ></Singer>)
      }
      <Actor name={"bapparaj"}></Actor>
      {
        actors.map(actor=><Actor name={actor}></Actor>)
      }

      <Device name="laptop" price="15000"></Device>
      <Device name="mobile"  price="20000"></Device>

      <Student grade="7" score="34" isDone="true"></Student>
      <Student grade="6" score="59" isDone="false"></Student>
      <Student grade="8" score="3j9" isDone="true"></Student>
      <Todo name="learn react" time="34"></Todo>
    </>
  )
}

function Device(props){

  return(
    <h1>
      device name is : {props.name} 
       <br></br> price: {props.price}
    </h1>
  )
}


function Student({grade=1, score=0}){
  const style1 = {
    border: '2px solid red',
    color:'blue',
    borderRadius: '30px'
  }

 return(
  <div>
  <h1 style={style1}>this is student</h1>
  <p>class: {grade}</p>
  <p>score: {score}</p>
</div>
 )
}

export default App
