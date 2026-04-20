/* Function App 4 */



// Function 1
import React, { useState } from 'react'

export default function UseStates() {

    const [name, setName] = useState('Dev')
    const [age, setAge] = useState(17)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName('Dev codes')
    }

    const updateAge = () => {
        const newAge = age + 1;
        setAge(newAge);

        if (newAge >= 25 && newAge <= 50) {
            setIsEmployed(true);
        } else {
            setIsEmployed(false);
        }
    }


    return (
        <>
            <h2 className='my-4'>Use Sates</h2>
            <div>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            </div>
            <button className='mx-2' onClick={updateName}>Update Name</button>
            <button className='mx-2' onClick={updateAge}>Update age</button>
        </>
    )
}



// ----------------------------------------------------------------------------



// Function 2
function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div className='count-container'>
            <br></br>
            <h2>Counter App</h2>
            <p className='count-display'>{count}</p>
            <button className='btn btn-primary mx-2 my-2' onClick={increment}>Increment</button>
            <button className='btn btn-secondary mx-2 my-2' onClick={decrement}>Decrement</button>
            <button className='btn btn-danger mx-2 my-2' onClick={reset}>Reset</button>
        </div>
    );
}
export { Counter }