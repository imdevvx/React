/* Function App 4 */


import React, { useState } from 'react'

export default function OnChange() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }
    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }
    const handlePaymentChange = (e) => {
        setPayment(e.target.value)
    }
    const handleShippingChange = (e) => {
        setShipping(e.target.value)
    }

    return (
        <div>
            {/* Input */}
            <input type="text" className="form-control bg-white text-dark my-2" onChange={handleNameChange} value={name} placeholder="Enter your name" />
            <p>Name: {name}</p>

            <input type="text" className="form-control bg-white text-dark my-2" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>


            {/* textarea */}
            <textarea className="textarea form-control bg-white text-dark my-2" value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
            <p>Comment: {comment}</p>


            {/* select */}
            <select className="form-select form-select-lg mb-3" aria-label="Large select example" onChange={handlePaymentChange}>
                <option value="">Select Payment Method</option>
                <option value="Visa">Visa</option>
                <option value="Master Card">Master Card</option>
                <option value="Upi">Upi</option>
            </select>
            <p>Payment method: {payment}</p>

            <label>
                <input className="mx-4 my-2 form-check-input" type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange} />
                Pick up
            </label>

            <br />

            <label>
                <input className="mx-4 my-2 form-check-input" type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                Delivery
            </label>

            <p className='my-2'>Shipping: {shipping}</p>
        </div>
    )
}
