import React from "react";

export default function Banner() {
    return (
        <div >
            <div className="row"
                style={{


                }}
            >
                <div className="col-lg-7">
                    <h1
                        style={{
                            color: '#00cddb',
                            margin: '15rem 2rem',
                            textAlign: 'center'
                        }}
                    >The one and only place to Buy/ Sell properties at the price you Deserve</h1>
                </div>
                <div className="col-lg-5">
                    <img height='400px'
                        width='400px'
                        // className="img-fluid text-end"
                        src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="img"

                        style={{
                            display: "flex",
                            border: '5px solid blue',
                            borderColor: '#0069cc',
                            position: 'relative',
                            left: '5rem',
                            margin: '15rem 0rem 3rem 3rem ',
                            borderRadius: '100px 0 100px 0',

                        }}
                    />
                </div>
            </div>


        </div>
    );
}
