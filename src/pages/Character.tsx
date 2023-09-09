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
         {skills.map((skillCategory, index) => (
            <React.Fragment key={index}>
               <div
                  className="box"
                  onClick={() => {
                     setOpenSection(!openSection)
                     setOpenSkill('')
                  }}
               >
                  <p>{skillCategory.name_en}</p>
               </div>
               {openSection && (
                  <>
                     {skillCategory.skills.map((skill) => (
                        <React.Fragment key={skill.name_en}>
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
                        </React.Fragment>
                     ))}
                  </>
               )}
            </React.Fragment>
         ))}
      </>
   )
}

export default Character
