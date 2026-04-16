/* Function App 10 */



/* using useContext hook */
import React, {useContext} from 'react'
import { UserContext } from './1.1_ComponentA'

function ComponentD() {

  const user = useContext(UserContext)
  return (
    <div className='component-box'>
      <h3>ComponentD</h3>
      <h4>{`See you ${user}`}</h4>
    </div>
  )
}

export {ComponentD}


/* using props not useContext hook */

// import React from 'react'

// function ComponentD(props) {
//   return (
//     <div className='component-box'>
//       <h3>ComponentD</h3>
//       <h4>{`See you ${props.user}`}</h4>
//     </div>
//   )
// }

// export {ComponentD}

// Note: This is also known as props drilling 