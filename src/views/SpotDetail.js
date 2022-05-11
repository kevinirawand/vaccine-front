import React from 'react'

export default function SpotDetail() {
    return (
        <div className="container m-5 p-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-8">
                    <p className="fs-1">Puskesmas Laweyan</p>
                </div>
                <div className="col-md-4">
                    <button type="submit" className="btn btn-primary">Register Now</button>
                </div>
            </div>

            <div className="row mb-3">
                <p className="fs-6">Jl. Gentan no.8</p>
            </div>


            <div className="row mb-2">
                <div className="col-md-3">
                    <p className="fs-6 fw-bold">Date: 20-06-2022</p>
                </div>
                <div className="col-md-3">
                    <p className="fs-6 fw-bold">Serve: 1 dose</p>
                </div>
                <div className="col-md-3">
                    <p className="fs-6 fw-bold">Capacity: 20</p>
                </div>
                <div className="col-md-3">
                    <p className="fs-6 fw-bold text-success">Vaccination Count: 15</p>
                </div>
            </div>

            <hr />

            <div className="row mt-5">
                <h1>Lorem, ipsum dolor.</h1>

                <article>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores hic molestias illum necessitatibus minima cum quasi et? Perferendis iusto sit minus natus quaerat dignissimos quod? Voluptatibus quasi perspiciatis deserunt exercitationem dicta sunt et impedit unde fugit. Illo, recusandae? Mollitia reprehenderit ipsam cumque ducimus exercitationem consequuntur adipisci atque quod illum quidem.</p>
                </article>

                <article>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores hic molestias illum necessitatibus minima cum quasi et? Perferendis iusto sit minus natus quaerat dignissimos quod? Voluptatibus quasi perspiciatis deserunt exercitationem dicta sunt et impedit unde fugit. Illo, recusandae? Mollitia reprehenderit ipsam cumque ducimus exercitationem consequuntur adipisci atque quod illum quidem.</p>
                </article>
            </div>


            {/* <ul className="container mb-5">
                <li>
                    <h4>Date: 26-01-2022</h4>
                </li>
                <li>
                    <h4>Address: Cek1</h4>
                </li>
                <li>
                    <h4>Serve: Cek1</h4>
                </li>
                <li>
                    <h4>Capacity: Cek1</h4>
                </li>
            </ul>

            <h4 className="text-success">Vaccination Count: 20</h4> */}

        </div>
    )
}
