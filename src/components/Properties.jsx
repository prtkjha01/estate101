import React from 'react'
import { houseData } from './PropertyData.jsx'
import PropertyItem from './PropertyItem'

export default function Properties() {
    let start = 0, end = 9



    return (

        // Displaying some real estate here
        <div>
            <div className="row" style={{ padding: '2rem 10rem' }}>
                { }
                {
                    houseData.slice(start, end).map((element, index) => {

                        return (
                            <div className="col-lg-4" key={index}>
                                <PropertyItem
                                    city={element.city}
                                    state={element.state}
                                    address={element.address}
                                    price={element.price}
                                    imgNo={index + 1}
                                />
                            </div>)
                    })}

            </div>

        </div>
    )

}
