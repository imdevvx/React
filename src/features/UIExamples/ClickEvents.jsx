/* Function App 3 */


// Function 1 
function Click_Event() {

    let count = 0;

    const handleClick = (name) => {

        if (count >= 3) {
            alert(`${name} stop clicking me`)
            return
        }
        count++
        alert(`You clicked me ${count} times`)
    }

    return (<button className='btn btn-primary mx-2 my-3' onClick={() => handleClick("Dev")}>click me</button>)
}

export default Click_Event



// ----------------------------------------------------------------------------



// Function 2
function Click_Event2() {

    const handleClick = (e) => { e.target.textContent = "OUCH! 🤕" }

    return (<button className='btn btn-primary mx-2 my-3' onClick={(e) => handleClick(e)}>Dont click me 🥹</button>)
}

export { Click_Event2 }



// ----------------------------------------------------------------------------



// Function 3
function ClickProfilePicture() {

    const imageUrl = 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png'

    const handleClick = (e) => {
        console.log(e)
        e.target.style.outline = "2px solid black"
        e.target.style.outlineOffset = "0.2rem"
        e.target.style.boxShadow = "none"
        e.target.style.transition = "all .1s ease-in"
    }

    return (
        <>
            <br />
            <div className="card">
                <h4>Click on Github img</h4>
                <img className="card-image" onClick={(e) => { handleClick(e) }} src={imageUrl} alt="React logo" />
            </div>
        </>

    )
}

export { ClickProfilePicture }