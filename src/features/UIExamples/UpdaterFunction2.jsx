/*

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
            <h2 className='my-3'>Updating the state of an array of object</h2>
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

*/