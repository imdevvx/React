/* Function App 1 */


// Function 1
import PropTypes from 'prop-types'

export default function Student(props) {
    return (
        <>
            <div>
                <br />
                <h2>Student -:</h2>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Student: {props.isStudent ? "Yes" : "No"}</p>
                {/* If isStudent is true then Yes else No */}
            </div>
        </>
    )
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}



// ---------------------------------------------------------



// Function 2
function Employee({ name = "Guest", age = 0, isEmployee = false }) {
    return (
        <>
            <div>
                <h2>Employee -:</h2>
                <p>Name: {name}</p>
                <p>age: {age}</p>
                <p>Employee: {isEmployee == true ? "Yes" : "No"}</p>
            </div>
        </>
    )
}
export { Employee }