import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function SecondVaccination() {
    const [fields, setField] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/v1/spots/');
        const data = await response.json();

        console.log(data)
        setField(data.spots);
    }

    return (
        <div className="container p-5 m-5">
            <h1 className="mb-5">Second Vaccination</h1>

            <table className="table table-secondary table-striped">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Serve</th>
                        <th>Capacity</th>
                        <th>Avaible Vaccines</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(fields)}
                    {fields.map((field, index) => {
                        return (
                            <tr key={field.id}>
                                <td>{index + 1}</td>
                                <td>{field.name}</td>
                                <td>{field.address}</td>
                                <td>{field.serve}</td>
                                <td>{field.capacity}</td>
                                <td>
                                    <ul>

                                    </ul>
                                </td>
                                <td>
                                    <Link to="/spot/1" className="btn btn-primary">Visit Place</Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
