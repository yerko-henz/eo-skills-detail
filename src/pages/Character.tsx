import React, { useState } from 'react'
import '../App.css'
import { characterSkills } from '../data/types'
import Header from './Header'

const Character: React.FC<{ skills: characterSkills[] }> = ({ skills }) => {
   const [openSection, setOpenSection] = useState(false)
   const [openSkill, setOpenSkill] = useState('')

   console.log('skills', skills)

   // if (loading) return <div>Loading...</div>

   return (
      <>
         {skills.map((skillCat) => (
            <>
               <div
                  className="box"
                  onClick={() => {
                     setOpenSection(!openSection)
                     setOpenSkill('')
                  }}
               >
                  <p>{skillCat.name_en}</p>
               </div>
               {openSection && (
                  <>
                     {skillCat.skills.map((skill) => (
                        <>
                           <div
                              className="box"
                              onClick={() => setOpenSkill(skill.name_en)}
                           >
                              <p>{skill.name_en}</p>
                           </div>
                           {openSkill === skill.name_en && (
                              <div className="box">
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
   )
}

export default Character
