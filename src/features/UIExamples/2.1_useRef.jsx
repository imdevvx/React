/* Function App 11 */



// Function 1
// using useRef insted of useState 

import React, { useState, useEffect, useRef } from 'react'
import { useEffectEvent } from 'react';

export default function UseRef() {

    // const ref = useRef(0);
    // const ref2 = useRef("Pizza")
    // console.log(ref)
    // console.log(ref2)

    // useEffect(()=> {
    //     console.log("Component Rendered")
    // })

    // function handleClick(){
    //     ref.current = ref.current + 1
    //     ref2.current = "Burger"
    //     console.log(ref)
    //     console.log(ref2)
    //     console.log(ref.current)
    //     // note that ref.current is a property for current value 
    // }

    //   return (
    //     <div>
    //         <h3>Function1</h3>
    //       <button onClick={handleClick}>Click me!</button>
    //     </div>
    //   )
}



// ----------------------------------------------------------------------------



// Function 2

function UseRef2() {

    const inputRef = useRef(null);

    useEffect(() => {
        // After the component renders console this -:
        console.log("Component Rendered")
        console.log(inputRef)

    })

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow"
        // inputRef.current : this is specifically targeting the input element
    }
    return (
        <>

            <h3 style={{
                marginTop: "2rem"
            }}>Function2</h3>

            <div style={{
                display: "flex",
                flexDirection: "Column",
                gap: "1rem"
            }}>

                <button onClick={handleClick}>Click me to focus input</button>
                <input ref={inputRef} className='form-control' />
            </div>
            {/* The ref attribute of an html element is a special attribute used to create refferences to elements */}

        </>
    )
}

export { UseRef2 }



// ----------------------------------------------------------------------------



// Function 3

/*

// using useState instead of useRef

import React, {useState, useEffect, useRef} from 'react'

export default function UseRef() {

const [number, setNumber] = useState(0)

useEffect(()=> {
    console.log("Component Rendered") // Perform this code every time the component "UseRef" gets re-render. (Mens console.log "Component Rendered" on every click)
})

function handleClick(){
    setNumber(n => n + 1)
}
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <h3>Number: {number}</h3>
    </div>
  )
}

*/

