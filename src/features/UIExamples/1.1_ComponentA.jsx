/* Function App 10 */



/* using useContext hook */
import React, { useState, createContext } from 'react'
import { ComponentB } from './1.2_ComponentB'

export const UserContext = createContext();

function ComponentA() {

  const [user, setUser] = useState("syncdecodes");
  return (
    <div className='component-box'>
      <h3>ComponentA</h3>
      <h4>{`Hello ${user}`}</h4>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>

    </div>
  )
}

export { ComponentA }


/* using props not useContext hook */

// function ComponentA() {

//   const [user, setUser] = useState("syncdecodes");
//   return (
//     <div className='component-box'>
//       <h3>ComponentA</h3>
//       <h4>{`Hello ${user}`}</h4>
//       <ComponentB user={user}/>
//     </div>
//   )
// }

// export {ComponentA}