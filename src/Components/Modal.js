import React from "react";

function  Modal(props) {
    return(
        <div className="modal fade" id="addModal" tabIndex="-1" aria-hidden="true">
           <form onSubmit={props.Create}>
           <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header">
                         <h5 className="modal-title">{props.ModalTitle}</h5>
                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            ></button>
                        </div>

                    <div className="modal-body">
                    <div className="input-group mb-3">
                      <span className="input-group-text">Code</span>
                         <input type="text" className="form-control" required onChange={props.changeCode}/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Name</span>
                         <input type="text" className="form-control" required onChange={props.changeName}/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Email</span>
                         <input type="email" className="form-control" required onChange={props.changeEmail}/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Address</span>
                         <input type="text" className="form-control" required placeholder='Street' onChange={props.changeStreet}/>
                         <input type="text" className="form-control" required placeholder='City' onChange={props.changeCity}/>
                         <input type="text" className="form-control" required placeholder='State' onChange={props.changeState}/>
                         <input type="text" className="form-control" required placeholder='Zip Code' onChange={props.changeZip}/>
                         <input type="text" className="form-control" required placeholder='Country' onChange={props.changeCountry}/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Mobile</span>
                         <input type="text" className="form-control" required onChange={props.changeMobile}/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Phone</span>
                         <input type="text" className="form-control" required onChange={props.changePhone}/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Contact Person</span>
                         <input type="text" className="form-control" required onChange={props.changeContactPerson}/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Referred By</span>
                         <input type="text" className="form-control" required onChange={props.changeReferredBy}/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Initial Balance</span>
                         <input type="text" className="form-control" required onChange={props.changeBalance}/>
                    </div>
                    <div>
                    <button type="submit" className="btn btn-primary float-end">Create</button>
                    </div>
                </div>
            </div>
        </div>
           </form>        
    </div>   
    )
}

export default Modal;