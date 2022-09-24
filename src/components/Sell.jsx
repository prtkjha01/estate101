import React from 'react'

export default function Sell() {
    return (
        <div id='sell'>

            <div className=''
                style={{
                    backgroundImage: ` url('https://www.garaga.com/sites/default/files/styles/interchange/public/slides/2020-11/Princeton-10_9x7_ChocolateWalnut_8litePan.jpg?itok=PnTIKWlq')`,
                    textAlign: 'center',
                    height: '600px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                <h1 style={{
                    fontSize: '3.5rem',
                    paddingTop: '10rem',
                    color: '#fff'

                }}>Sell your house with us Today</h1>
            </div>
            <h2 className='my-5 text-center'>Enter the details below to get strated</h2>
            <div className="container">
                <form>
                    <div className='row container'>
                        <div className="mb-3 col-lg-4 col-md-6 col-sm-12">
                            <label for="fname" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="fname" />
                        </div>
                        <div className="mb-3 col-lg-4 col-md-6 col-sm-12">
                            <label for="mname" className="form-label">Middle Name</label>
                            <input type="text" className="form-control" id="mname" />
                        </div>
                        <div className="mb-3 col-lg-4 col-md-6 col-sm-12">
                            <label for="lname" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lname" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <label for="tel" className="form-label">Phone No.</label>
                            <input type="tel" className="form-control" id="phno" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                            <label for="email" className="form-label">email id</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3 form-check col-lg-11 col-md-6 col-sm-12">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Want to recieve updates on latest properties</label>
                        </div>
                        <div className="col-lg-1 col-md-6 col-sm-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}
