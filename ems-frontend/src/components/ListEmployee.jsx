import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService'

function ListEmployee() {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })

    }, [])

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
        <table className='table table-dark table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
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
                        </tr>)
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployee