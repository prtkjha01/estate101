import React from "react";
import logo from "../brandlogo.png";
export default function Navbar() {
    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg fixed-top "
                style={{
                    backgroundColor: '#bdeff9'

                }}
            >
                <div className="container-fluid">
                    <a className="navbar-brand ml-5" href="/">
                        <img width="100" height="50" className="d-inline-block align-top " src={logo} alt="estate101" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="/navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-center"
                        style={{ paddingRight: "120px" }}
                        id="navbarNav"
                    >
                        <ul className="navbar-nav ">
                            <li className="nav-item px-3">
                                <a className="nav-link   fw-bold" aria-current="page" href="/">
                                    Buy
                                </a>
                            </li>
                            <li className="nav-item px-3 ">
                                <a className="nav-link  fw-bold" href="/sell">
                                    Sell
                                </a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link  fw-bold" href="/">
                                    Rent
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ml-5">
                    <a className="navbar-brand" href="/"><img width="100" height="50" className="d-inline-block align-top " src={logo} alt="estate101" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" style={{ paddingRight: "120px" }} id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Buy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sell">Sell</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Rent</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
