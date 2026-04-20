/* Function App 6 */



// Function 1
import React, { useState } from 'react'

export default function CounterApp() {

    const [count, setCount] = useState(0)

    const Increment = () => {
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 2)

        // prevCount => 0(initial state) + 1 = 1 
        // prevCount => 1(current state) + 1 = 2 
        // prevCount => 1(current state) + 2 = 4

        /* This is known as updater function */
    }
    const Decrement = () => {
        setCount(prevCount => prevCount - 1)
        setCount(prevCount => prevCount - 1)
        setCount(prevCount => prevCount - 2)
    }
    const Reset = () => {
        setCount(0)
    }
    return (
        <>
            <p>Count: {count}</p>
            <button className='btn btn-primary mx-2 my-2' onClick={Increment}>Increment</button>
            <button className='btn btn-primary mx-2 my-2' onClick={Decrement}>Decrement</button>
            <button className='btn btn-primary mx-2 my-2' onClick={Reset}>Reset</button>
        </>
    )
}



// ----------------------------------------------------------------------------



// Function 2 
function UpdateObject() {

    const [car, setCar] = useState({ year: 2025, make: "Tata", model: "Nexon" })

    function handleYearChange(event) {

        setCar(prevCar => ({ ...prevCar, year: event.target.value }))

        /* setCar({ ...car, year: 2025 })
           setCar({ year: 2025, make: "Tata", model: "Nexon" , year: 2025}) year: 2025 will override year: 2024
           Note that: ...car is a spread operator. */
    }
    function handleMakeChange(event) {
        // To write a javascript object with an updater function we use ({}) not simply {}
        setCar(c => ({ ...c, make: event.target.value }))
    }
    function handleModelChange(event) {
        setCar(c => ({ ...c, model: event.target.value }))
    }

    return (
        <>
            <h3>Cars</h3>
            <p className='my-2'>Your favorite car is: {car.year} {car.make} {car.model}</p>


            <input type="number" className=' form-control w-50 m-auto my-2' value={car.year} onChange={handleYearChange} />

            <input type="text" className=' form-control w-50 m-auto my-2' value={car.make} onChange={handleMakeChange} />

            <input type="text" className=' form-control w-50 m-auto my-2' value={car.model} onChange={handleModelChange} />

        </>
    )
}

export { UpdateObject }



// ----------------------------------------------------------------------------



// Function 3
function UpdateArray() {

    const [foods, setFoods] = useState(["Apple", "banana", "mango", "orange", "grapes"])

    const foodList = foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)

    function handleAddFood() {
        const newFood = document.querySelector(".foodInput").value
        document.querySelector(".foodInput").value = "" // After hitting the button foodInput value = ""
        setFoods([...foods, newFood])
    }
    function handleRemoveFood(index) {
        setFoods(foods.filter((element, i) => i !== index))
    }

    return (
        <>
            <h3>Foods</h3>
            <ul className="list-group">{foodList}</ul>

            <input type="text" className='foodInput form-control w-50 m-auto my-3' placeholder='Enter food name' />

            <button className='btn btn-primary my-2' onClick={handleAddFood}>Add</button>
        </>
    )
}

export { UpdateArray }



// ----------------------------------------------------------------------------



// Function 4
function UpdateArrayObject() {

    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    const carList = cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)

    function handleAddCar() {
        // setCars(prevCars => [...prevCars, carYear, carMake, carModel])
        const newCar = {year: carYear, make: carMake, model: carModel}
        setCars(prevCars => [...prevCars, newCar])

        // After Add button click -:
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }
    function handleRemoveCar(index) {
setCars(prevCars => prevCars.filter((element, i) => i !== index))
    }
    function handleYearChange(event) {
        setCarYear(event.target.value)
    }
    function handleMakeChange(event) {
        setCarMake(event.target.value)
    }
    function handleModelChange(event) {
        setCarModel(event.target.value)
    }
    return (
        <>
            <h3>Car list</h3>
            <ul className='my-2'>{carList}</ul>

            <input type="number" className='form-control w-50 m-auto my-2' value={carYear} onChange={handleYearChange} />

            <input type="text" className='form-control w-50 m-auto my-2' value={carMake} onChange={handleMakeChange} placeholder='Enter car make' />

            <input type="text" className='form-control w-50 m-auto my-2' value={carModel} onChange={handleModelChange} placeholder='Enter car model' />

            <button className='btn btn-primary my-2' onClick={handleAddCar}>Add car</button>
        </>
    )
}

export { UpdateArrayObject }