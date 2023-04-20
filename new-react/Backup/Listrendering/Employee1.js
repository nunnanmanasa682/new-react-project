import React,{Component}  from 'react'
import Employees from './Data'
class Employee1 extends Component {
  render() {
    return (
        <div className="container">
       <h1>Employee Data</h1>
        <pre>{JSON.stringify(Employees)}</pre>
        <div className="row">
        <div className="col-md-10">
        <table className="table table-hover">
        <thead className="bg-primary text=white">
              <tr>
                    <th>id</th>
                   <th>first_Name</th>
                    <th>last_Name</th>
                    <th>email</th>
                   <th>gender</th>
                   <th>iP_address</th>
              </tr>
            </thead>
            <tbody>
{
  Employee1.map((Employees) => {
    return <tr>
        <td>{Employee1.id}</td>
        <td>{Employee1.first_name}</td>
        <td>{Employee1.last_name}</td>
        <td>{Employee1.email}</td>
        <td>{Employee1.gender}</td>
        <td>{Employee1.ip_address}</td>
    </tr>
})
}
          </tbody>
          </table>
        </div>
      </div>
    </div>
    
    ) 
    
  }
}

export default Employee1