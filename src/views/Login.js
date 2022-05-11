import React from 'react'

function Login() {
    return (
        <div className="container d-flex justify-content-center my-5 py-5 align-items-center">
            <form className="col-md-4">
                <div className="mb-3">
                    <label htmlFor="id_card_number" className="form-label">ID Card Number</label>
                    <input type="text" className="form-control" id="id_card_number" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login