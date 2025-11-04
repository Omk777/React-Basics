/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import './App.css';
import Cond from './cond';
import Home from './pages/home';
import Login from './pages/login';

function App() {

  const isAuth=false;

  const iLogin=true;

  if(isAuth){
    return <Login/>
  }

  const myList=['item1','item2','item3']
  const skills = [
  { id: 1, skillName: "HTML" },
  { id: 2, skillName: "CSS" },
  { id: 3, skillName: "JavaScript" },
  { id: 4, skillName: "TypeScript" },
  { id: 5, skillName: "React" },
  { id: 6, skillName: "Angular" },
  { id: 7, skillName: "Node.js" },
  { id: 8, skillName: "Express.js" },
  { id: 9, skillName: "MongoDB" },
  { id: 10, skillName: "Git & GitHub" },
];


  return (
    
    <>
    <ul>
      {
       myList.map((li,index)=>{
        return <li key={index}>{li}</li>
       })
      }
    </ul>

    <ul>
      {
        myList.map((li,index)=>{
          return <li key={index}>{li}</li>
        })
      }
    </ul>

    <ul>
      {
        skills.map((skill,id)=>{
          return <li key={id}>{skill.id} {skill.skillName}</li>
        })
      }
    </ul>

    <ul>
      {
        skills.filter(skill=>
          skill.skillName==='Git & GitHub'
          
        )
        .map(skill=>{
          return <li key={skill.id}>
            {skill.skillName}
          </li>
        })
        
      }
      
    </ul>

    <Home/>

    <Cond/>

    <div>
      {
      iLogin? <Home/> :<Login/>
    }
    </div>
    </>
  );
}

export default App;
