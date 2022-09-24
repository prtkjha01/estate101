import React from 'react'


export default function PropertyItem(props) {

    let { city, state, address, price, imgNo } = props

    let rooms = 1 + Math.floor(Math.random() * 4)

    let text = 'Bedrooms'

    if (rooms < 2) text = 'Bedroom'

    return (
        <div className="card my-4" >
            <img src={`${process.env.PUBLIC_URL}/assets/i${imgNo}.avif`} height="200px" className="card-img-top px-3" alt="..." />
            <div className="card-body shadow">
                <h5 className="card-title">{city},{state}</h5>
                <p className="card-text">{address}</p>
                <p className="card-text">{rooms} {text}</p>
                <a href="/" className="btn btn-outline-primary">Buy @{price.slice(0, 4)}K</a>
            </div>
        </div>
    )
}
