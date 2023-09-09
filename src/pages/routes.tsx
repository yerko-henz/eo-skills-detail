import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Character from './Character'
import Main, { classes } from './Main'
import Header from './Header'

import { landsknecht } from '../data/EO4/landsknecht'
import { nightseeker } from '../data/EO4/nightseeker'

const App = () => (
   <>
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Main />} />
            {classes.map((_class) => (
               <Route
                  path={`/${_class}`}
                  element={<Character skills={landsknecht} />}
                  key={_class}
               />
            ))}
         </Routes>
      </Router>
   </>
)

export default App
