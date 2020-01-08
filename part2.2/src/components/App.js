import React from 'react'


const App = ({ courseData }) => {
  
   const rows = () => 
    <div>
         {courseData.map((courseData) =>
           <div key={courseData.id}>
                 <h1 >{courseData.name}</h1>

                <ul>
                {courseData.parts.map((sub) =>  <li key={sub.id}> {sub.name} {sub.exercises} </li>)}
                </ul>

                <h5>
                     Total of {courseData.parts.reduce((sum, i) => (sum += i.exercises ), 0)} exercises
                </h5>
               
            </div> 
             ) }
      

  </div>
    
  return (
    <div>
        {rows()} 
     
    </div>
  )
}

export default App