import React from 'react';

function Card(props){
    return (
        <div className='card'>
        <div className= 'card-body'>
        <div className='row'>
        <h4 className='table table-stripe'>Employee ID: {props.BusinessId}</h4>
            <h2 className='table table-stripe'>Employee Name: {props.Name}</h2>
            <p className='table table-stripe'>Email: {props.Email} Address: Street- {props.Street}, State- {props.State}, City- {props.City} PostCode- {props.Zip} Country- {props.Country}</p>
            <p className='table table-stripe'>Mobile: {props.Mobile} Phone: {props.Phone}  |   Contact Person: {props.ContactPerson}</p>
            <p className='table table-stripe'>Logo: {props.logo}</p>
            <p className='table table-stripe'>Balance: {props.Balance}</p>
        </div>
        </div>
      </div>
    )
}

export default Card;