import React from 'react';

function Card(props){
    return (
        <div className='card'>
        <div className= 'card-body'>
        <div className='row'>
        <h4 className='table table-striped'>Employee ID: {props.BusinessId}</h4>
            <h2 className='table table-striped'>Employee Name: {props.Name}</h2>
           <p className='table table-striped'></p>
           <table className="table">
                <tbody>
                    <tr>
                        <th>Email</th>
                        <td>{props.Email}</td>
                        <th>Mobile Number</th>
                        <td>{props.Mobile}</td>
                        <th>Phone Number</th>
                        <td>{props.Phone}</td>
                    </tr>
                    <tr>
                    <th>Address</th>
                    <td colSpan='5'>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <th>Street<br/></th>
                                        <th>State</th>
                                        <th>City</th>
                                        <th>Country</th>
                                        <th>Zip Code</th>
                                    </tr>
                                    <tr>
                                        <td>{props.Street}</td>
                                        <td>{props.State}</td>
                                        <td>{props.City} </td>
                                        <td>{props.Country}</td>
                                        <td>{props.Zip}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <th>Contact Person</th>
                        <td>{props.ContactPerson}</td>
                        <th>Logo Signature</th>
                        <td>{props.Logo}</td>
                        <th>Referred By</th>
                        <td>{props.ReferredBy}</td>
                    </tr>
                    <tr>
                        <th>Balance</th>
                        <td><i>{props.Balance}</i></td>
                        <th>Code</th>
                        <td>{props.Code}</td>
                    </tr>
                </tbody>
            </table>
        </div>
            <button type="button" className="btn btn-danger m-2 float-end" data-bs-target="#addModal" data-bs-toggle="modal"  onClick={() => props.Edit}>Edit</button>
            <button type="button" className="btn btn-danger m-2 float-end"  onClick={() => props.Delete(props.BusinessId)}>Delete</button>
        </div>
      </div>
    )
}

export default Card;