import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Header from './Header'

export const classes: string[] = [
   'Landsknecht',
   'Nightseeker',
   'Fortress',
   'Sniper',
   'Medic',
   'Runemaster',
   'Dancer',
   'Arcanist',
   'Bushi',
   'Imperial',
]

function Main() {
   return (
      <>
         {classes.map((_class) => (
            <div className="box" onClick={() => null}>
               <h2>
                  <Link to={`/${_class.toLocaleLowerCase()}`}>{_class}</Link>
               </h2>
            </div>
         ))}
      </>
   )
}

export default Main
