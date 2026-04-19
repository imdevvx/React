/* Function App 2 */ 


// Function 1
function List() {

    const fruits = [{ id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 185 },
    { id: 3, name: "kiwi", calories: 127 },
    { id: 4, name: "orange", calories: 75 },
    { id: 5, name: "grapes", calories: 98 }];


    // sort() -:

    // fruits.sort((a, b)=> a.name.localeCompare(b.name)) // ALPHABETICAL
    // fruits.sort((a, b)=> b.name.localeCompare(a.name)) // REVERSE ALPHABETICAL
    // fruits.sort((a, b)=> a.calories - b.calories) // NUMERIC
    // (fruits.sort((a, b)=> a.calories - b.calories)).reverse() // REVERSE NUMERIC


    // filter() -:

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)


    // map() -:

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}, Calories: {fruit.calories}</li>)

    const listItem1 = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}, Calories: {lowCalFruit.calories}</li>)
    const listItem2 = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name}, Calories: {highCalFruit.calories}</li>)


    return (
        <>
            <ul>
                <h2>Fruits</h2>
                {listItems}
                <br />

                <h3>Low calorie fruits</h3>
                {listItem1}
                <br />

                <h3>High calorie fruits</h3>
                {listItem2}
            </ul>
        </>

    )
}



// ----------------------------------------------------------------------------



// Function 2
import PropTypes from "prop-types";

function List2({ items = [], heading = "Null" }) {
    const itemList = items
    const listItems = itemList.map(item => <li key={item.id}>{item.name}, Calories: {item.calories}</li>)

    return (
        <>
            <h2>{heading}</h2>
            {listItems}
            <br />
        </>
    )
}
List2.propTypes = {

    heading: PropTypes.string,

    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number }))
}

export { List, List2 }