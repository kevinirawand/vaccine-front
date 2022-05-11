import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="main-content">
            <div className="home">
                <div className="container py-5">
                    <h1>Dashboard</h1>
                </div>
            </div>

            <div className="container">
                <h6 className="fw-bold">My Consultation</h6>
                <div className="card border-secondary rounded-0" style={{ maxWidth: "18rem" }}>
                    <div className="card-header">
                        <h6>Consultation</h6>
                    </div>
                    <div className="card-body">
                        <Link to='/consultation' style={{ textDecoration: "none" }}>+ Request Consultation</Link>
                    </div>
                </div>

                <div className="container py-5">
                    <h6 className="fw-bold">My Vaccinations</h6>
                    <div className="alert alert-warning py-2">
                        Your Consultation must be approved by doctor to get the vaccine
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card border-secondary rounded-0" style={{ maxWidth: "18rem" }}>
                                <div className="card-header">
                                    <h6 className="fw-bold">
                                        First Vaccination
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <Link to='/first-vaccination' style={{ textDecoration: "none" }}>+ Register Vaccination</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card border-secondary rounded-0" style={{ maxWidth: "18rem" }}>
                                <div className="card-header">
                                    <h6 className="fw-bold">
                                        Second Vaccination
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <Link to='/second-vaccination' style={{ textDecoration: "none" }}>+ Register Vaccination</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home