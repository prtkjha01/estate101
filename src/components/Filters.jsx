import React from 'react'

export default function Filters(props) {

    return (
        <div>
            <h1 style={{
                textAlign: 'center',
                margin: '3rem '
            }}
            >Find Your Dream Place Now</h1>
            <div className='row'
                style={{
                    margin: '1rem',
                    padding: '1rem 10rem '
                }}
            >
                <div className="col-lg-4 " style={{ padding: '0 1rem' }}>
                    <select className="form-control" defaultValue={'DEFAULT'} aria-label="Default select example">
                        <option value="DEFAULT" selected>Filter by Price range</option>
                        <option value="1">$100K - $300K</option>
                        <option value="2">$300k - $600K</option>
                        <option value="3">$600K - $1M</option>
                    </select>
                </div>
                <div className="col-lg-4 " style={{ padding: '0 1rem' }}>
                    <select className="form-control" defaultValue={'DEFAULT'} aria-label="Default select example">
                        <option value="DEFAULT" selected>Filter by Location</option>
                        <option value="1">Texas</option>
                        <option value="2">New York</option>
                        <option value="3">California</option>
                    </select>
                </div>
                <div className="col-lg-4 " style={{ padding: '0 1rem' }}>
                    <select className="form-control" defaultValue={'DEFAULT'} aria-label="Default select example">
                        <option value="DEFAULT" selected>Filter by No. of Bedrooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                    </select>
                </div>


            </div>
        </div>
    )
}
