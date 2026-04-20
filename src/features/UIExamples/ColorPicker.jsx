/* Function App 5 */

import React, { useState } from 'react'

export default function ColorPicker() {

    const [color, setColor] = useState("")
    const [copiedColor, setCopiedColor] = useState("")

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(color)
        setCopiedColor(color)
        console.log("Copied to clipboard", color)
    }

    return (
        <div className='color-picker-container'>

            {/* color-display */}
            <div className="color-display" style={{
                backgroundColor: color,
                height: "8rem",
                width: "15rem",
                border: "1px solid",
                borderRadius: ".5rem",
                marginBottom: "1rem",
                marginTop: "1rem",
            }}></div>

            {/* selcted-color */}
            <p>Selected color: {color}</p>

            {/* color-picker */}
            <div className='d-flex flex-column align-items-center'>
                <label className="form-label my-2">Select color</label>
                <input type="color" className="form-control form-control-color my-2" value={color} onChange={handleColorChange}
                    style={{ margin: "auto" }} />
            </div>

            {/* copy-color-button */}
            <button className='btn btn-primary my-2' onClick={handleCopyClick}>Copy color code</button>

            {/* copied-color-display */}
            <input type="text" className='form-control my-2 p-2' placeholder={copiedColor ? `Copied color code: ${copiedColor}` : ""} readOnly />
        </div>
    )
}
