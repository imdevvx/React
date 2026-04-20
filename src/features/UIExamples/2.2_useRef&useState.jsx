import React, { useState, useEffect, useRef } from 'react'

function UseStateExample() {

    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log("Component Rendered") // Perform this code every time the component "useStateExample" gets re-render. (Means console.log "Component Rendered" on every click)
    })

    function handleClick() {
        setNumber(n => n + 1) // updater function
    }
    return (
        <div className='mt-4' style={{ border: "2px solid black", padding: "15px"}}>
            <h3 className='my-4'>Using useState</h3>
            <p>component re-renders every time</p>
            <button onClick={handleClick}>Click me</button>
            <h4 className='mt-3'>Number: {number}</h4>
            <p>Check the console tab!! while clicking</p>
        </div>
    )
}

export { UseStateExample }


function UseRefExample() {
    const numberRef = useRef(0);     // stores value without causing re-render
    const [, forceUpdate] = useState({}); // to force UI update if needed

    useEffect(() => {
        console.log("Component Rendered");
    });

    function handleClick() {
        numberRef.current += 1;
        console.log("Ref value:", numberRef.current);

        // If you want to show the updated number in the UI:
        forceUpdate({}); // forces a re-render
    }

    return (
        <div className='mt-4' style={{ border: "2px solid black", padding: "15px" }}>
            <h3 className='my-4'>Using useRef</h3>
            <p>component doesn't re-renders every time</p>
            <button onClick={handleClick}>Click me</button>
            <h4 className='mt-3'>Number: {numberRef.current}</h4>
            <p>Check the console tab!! while clicking</p>
        </div>
    );
}

export { UseRefExample }
