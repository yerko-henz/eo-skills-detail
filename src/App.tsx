import React, { useState } from 'react'
import './App.css'

import { skills } from './data/EO4/landsknecht'

function App() {
   const [currentClass, setCurrentClass] = useState('')
   const [openSection, setOpenSection] = useState(false)
   const [openSkill, setOpenSkill] = useState('')
   return (
      <>
         <h1>Etrian Oddyssey Skills detail</h1>
         {currentClass === '' && (
            <>
               <div
                  className="box"
                  onClick={() => setCurrentClass('landsknecht')}
               >
                  <h2>Landsknecht</h2>
               </div>
            </>
         )}
         {currentClass === 'landsknecht' && (
            <>
               {skills.map((skillCat: any) => (
                  <>
                     <div
                        class="box"
                        onClick={() => setOpenSection(!openSection)} 
                     >
                        <p>{skillCat.name}</p>
                     </div>
                     {openSection && (
                        <>
                           {skillCat.skills.map((skill) => (
                              <>
                                <div class="box" onClick={()=> setOpenSkill(skill.name_en)}>
                                  <p>{skill.name_en}</p>
                                </div>
                                {openSkill === skill.name_en && (
                                  <div class="box">
                                  <p>{skill.description}</p>
                                </div>
                                )}
                              </>
                            ))}
                        </>
                      )}
                  </>
                ))}
            </>
         )}
      </>
   )
}

export default App
