import React from 'react'
import { Link } from 'react-router-dom'

export default function FirstVaccination() {
    return (
        <div className="container p-5 m-5">
            <h1 className="mb-5">First Vaccination</h1>

            <table className="table table-secondary table-striped">
                <thead>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Serve</th>
                    <th>Capacity</th>
                    <th>Avaible Vaccines</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Cek1</td>
                        <td>Cek1</td>
                        <td>Cek1</td>
                        <td>Cek1</td>
                        <td>
                            <ul>
                                <li>cek1</li>
                                <li>cek</li>
                                <li>cek</li>
                            </ul>
                        </td>
                        <td>
                            <Link to="/spot/1" className="btn btn-primary">Visit Place</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Cek1</td>
                        <td>Cek1</td>
                        <td>Cek1</td>
                        <td>Cek1</td>
                        <td>
                            <ul>
                                <li>cek1</li>
                                <li>cek</li>
                                <li>cek</li>
                            </ul>
                        </td>
                        <td>
                            <Link to="/spot/1" className="btn btn-primary">Visit Place</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
