import React from 'react'
import './AddEmployee.css'
import axios from 'axios'

const AddEmployee = () =>{
    const handleSubmit = async (e) => {
        e.preventDefault();
        // axios.post("http://localhost:8080/api/employees", Employee)
    }

    return (
        <div id='bg'>
            <form className='col-5' onSubmit={handleSubmit}>
                <div className='form-group mt-3 mb-2' align="center">
                    <h2 id='heading'>Add Employee</h2>
                </div>
                <div className='form-group'>
                    <label className='form-label '>Name</label>
                    <input type='text' className='form-control' placeholder='Name'></input>
                </div>
            
                <div className='form-group'>
                    <label className='form-label  mt-2'>Gender</label>
                    &nbsp; &nbsp;
                    <div className="form-check form-check-inline">
                        <input className="form-check-input ms-3" type="radio" name="gender" value="Male" />
                        <label className="form-check-label ms-2" for="inlineRadio1">Male</label>
                    </div>
                    &nbsp;
                    <div className="form-check form-check-inline">
                        <input className="form-check-input ms-3" type="radio" name="gender" value="Female" />
                        <label className="form-check-label ms-2" for="inlineRadio2">Female</label>
                    </div>
                </div>

                <div className='form-group'>
                    <label className='form-label '>Age</label>
                    <input type='number' className='form-control ' placeholder='Age'></input>
                </div>

                <div className='form-group'>
                    <label className='form-label '>Salary</label>
                    <input type='digit' className='form-control' placeholder='Salary'></input>
                </div>

                <div className='form-group'>
                    <label className='form-label '>Email</label>
                    <input type='email' className='form-control' placeholder='Email'></input>
                </div>

                <div className='form-group'>
                    <label className='form-label '>Date of Joining</label>
                    <input type='date' className='form-control '></input>
                </div>

                <div className='form-group'>
                    <label className='form-label '>Mobile Number</label>
                    <input type='digit' className='form-control' placeholder='Phone'></input>
                </div>
                <br />
                <p id='btn'>
                <button  className="btn btn-primary" type="submit">Add Employee</button>
                </p>
            </form>
        </div>
    )
}
export default AddEmployee;
