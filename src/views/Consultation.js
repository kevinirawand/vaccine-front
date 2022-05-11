import React from 'react'

export default function () {
    return (
        <div className="container p-5 m-5">
            <h1 className="mb-5">Request Consultation</h1>

            <form>
                <ul>
                    <li className="mb-3">
                        <label htmlFor="disease_history" className="d-block mb-3">Do you have Disease History?</label>
                        {/* <select name="disease_history" id="disease_history" className="w-25 form-select form-select-sm">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select> */}

                        <textarea className="p-2" name="disease_history" id="disease_history" placeholder="skip this input if you haven't disease history" cols="30" rows="10"></textarea>
                    </li>

                    <li className="mb-3">
                        <label htmlFor="curent_symptoms" className="d-block mb-3">Do you have symptoms now?</label>
                        <textarea name="curren_symptoms" className="p-2" placeholder="skip this input if you haven't symptoms" id="current_symptoms" cols="30" rows="10"></textarea>
                    </li>

                    <button type="submit" className="btn btn-submit btn-primary">Submit</button>
                </ul>
            </form>
        </div>
    )
}
