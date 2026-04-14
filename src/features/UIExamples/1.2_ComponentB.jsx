/* Function App 10 */



/* using useContext hook */
import { ComponentC } from './1.3_ComponentC'
import React, {useContext} from 'react'
import { UserContext } from './1.1_ComponentA'

function ComponentB() {

  const user = useContext(UserContext);

  return (
    <div className='component-box'>
      <h3>ComponentB</h3>
      <h4>{`Hey ${user}`}</h4>
      <ComponentC/>
    </div>
  )
}

export {ComponentB}


/* using props not useContext hook */

// import React from 'react'
// import { ComponentC } from './17.3_ComponentC'

// function ComponentB(props) {
//   return (
//     <div className='component-box'>
//       <h3>ComponentB</h3>
//       <ComponentC user={props.user}/>
//     </div>
//   )
// }

// export {ComponentB}