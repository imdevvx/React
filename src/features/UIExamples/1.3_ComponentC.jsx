/* Function App 10 */



/* using useContext hook */
import { ComponentD } from './1.4_ComponentD'
import React, {useContext} from 'react'
import { UserContext } from './1.1_ComponentA'

function ComponentC() {

  const user = useContext(UserContext);

  return (
    <div className='component-box'>
      <h3>ComponentC</h3>
      <h4>{`Hello again ${user}`}</h4>
      <ComponentD/>
    </div>
  )
}

export {ComponentC}


/* using props not useContext hook */

// import React from 'react'
// import { ComponentD } from './17.4_ComponentD'

// function ComponentC(props) {
//   return (
//     <div className='component-box'>
//       <h3>ComponentC</h3>
//       <ComponentD user={props.user}/>
//     </div>
//   )
// }

// export {ComponentC}