import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

function ListEmployee() {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/update-employee/${id}`)
    }

    function removeEmployee(id) {
        console.log(id);

        deleteEmployee(id).then((response) => {
            getAllEmployees();

        }).catch(error => {
            console.error(error);
        })
    }


    // const dummyData = [
    //     {
    //         "id": 1,
    //         "firstName": "Anuradha",
    //         "lastName" : "Basnayake",
    //         "email": "anu99@gmail.com"
    //     },
    //     {
    //         "id": 2,
    //         "firstName": "Anuradha",
    //         "lastName" : "Basnayake",
    //         "email": "anu99@gmail.com"
    //     },
    //     {
    //         "id": 2,
    //         "firstName": "Anuradha",
    //         "lastName" : "Basnayake",
    //         "email": "anu99@gmail.com"
    //     },
    //     {
    //         "id": 4,
    //         "firstName": "Anuradha",
    //         "lastName" : "Basnayake",
    //         "email": "anu99@gmail.com"
    //     }
    // ]


  return (
    <div className='container'>
        <h2 className='text-center my-4'> List of Employees</h2>
        <button className='btn btn-warning my-3' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-dark table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td className=''>
                                <button className='btn btn-light' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger m-2' onClick={() => removeEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>)
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployee