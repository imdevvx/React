/* Function App 8 */



// Function 1
import React, { useEffect, useState } from 'react';

export default function UseEffect() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")

    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count, color])
    // any time one of the value ([count or color] changes perform this code - document.title = `Count: ${count} ${color}`)

    function handleIncrementClick() {
        setCount(c => c + 1)
    }
    function handleDecrementClick() {
        setCount(c => c - 1)
    }
    function handleResetClick() {
        setCount(0)
    }
    function handleChangeColorClick() {
        setColor(c => c === "green" ? "red" : "green")
    }
    return (
        <>
            <p style={{ color: color }}>{count}</p>
            <button className='btn btn-primary mx-2 my-2' onClick={handleIncrementClick}>+</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleDecrementClick}>-</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleResetClick}>Reset</button>
            <br />
            <button onClick={handleChangeColorClick}>Change color</button>

        </>
    )
}



// ----------------------------------------------------------------------------



// Function 2
function Window() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", hadleResize)
        console.log("Event listener added")

        return () => {
            window.addEventListener("resize", hadleResize)
            console.log("Event listener removed")
        }
    }, [])

    useEffect(() => {
        document.title = `Size ${width} x ${height}`
    }, [width, height])

    function hadleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    return (
        <>
            <p className='my-2'>Width of the window: {width}px</p>
            <p>Height of the window: {height}px</p>

        </>
    )
}

export { Window }
