import React, {Component} from 'react';
import { variables } from './Variables';
import Card from './Components/Card';
import axios from 'axios';

export default class Business extends Component{
   
    constructor(props){
        super(props);

        this.state={
            entities: [],
            BusinessId: "",
            Name: "",
            Email: "",
            Address:"",
            State: "",
            City: "",
            Zip: "",
            Country: "",
            Mobile: "",
            Phone: "",
            ContactPerson: "",
            Logo: "",
            Balance: "",
        }
    }
    refreshList(){
        fetch(variables.API_Url)
        .then(res => res.json())
        .then(data =>{
            this.setState({entities:data})
        })
    }

    componentDidMount(){
        this.refreshList();
    }

    createClick(){
       const res = axios.post(variables.API_Url,{
            Email: this.state.Email,
                Name: this.state.Name,
                Street: this.state.Street,
                City: this.state.City,
                State: this.state.State,
                Zip: this.state.Zip,
                Country: this.State.Country,
                Mobile: this.state.Mobile,
                Phone: this.state.Phone,
                ContactPerson: this.state.ContactPerson,
                Logo: this.state.Logo,
                Status: 1,
                Balance: this.state.Balance,
                SMTPServer: '',
                SMTPPort: 1,
                SMTPUsername: '',
                SMTPPassword: ''
        });

        alert(res.data);
        
        
        // fetch(variables.API_Url,{
        //     method:'POST',
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify({
        //         Email: this.state.Email,
        //         Name: this.state.Name,
        //         Street: this.state.Street,
        //         City: this.state.City,
        //         State: this.state.State,
        //         Zip: this.state.Zip,
        //         Country: this.State.Country,
        //         Mobile: this.state.Mobile,
        //         Phone: this.state.Phone,
        //         ContactPerson: this.state.ContactPerson,
        //         Logo: this.state.Logo,
        //         Status: 1,
        //         Balance: this.state.Balance,
        //         SMTPServer: '',
        //         SMTPPort: 1,
        //         SMTPUsername: '',
        //         SMTPPassword: ''
        //     })
        // })
        // .then(res=>res.json())
        // .then((result)=>{
        //     alert(result);
        //     this.refreshList();
        // })
    }

    changeName = (e) => {
        this.setState({Name: e.target.value});
    }

    changeEmail = (e) => {
        this.setState({Email: e.target.value});
    }

    changeState = (e) =>{
        this.setState({State: e.target.value});
    }

    changeStreet = (e) =>{
        this.setState({Street: e.target.value});
    }
    changeCity = (e) =>{
        this.setState({City: e.target.value});
    }
    changeCountry = (e) =>{
        this.setState({Country: e.target.value});
    }
    changeZip = (e) =>{
        this.setState({Zip: e.target.value});
    }
    changeMobile = (e) =>{
        this.setState({Mobile: e.target.value});
    }

    changePhone = (e) =>{
        this.setState({Phone: e.target.value});
    }

    changeContactPerson = (e) =>{
        this.setState({ContactPerson: e.target.value});
    }

    changeBalance = (e) => {
        this.setState({Balance: e.target.value});
    }

    addClick(){
        this.setState({
            Name: "",
            Email: "",
            Street:"",
            State: "",
            City: "",
            Zip: "",
            Country: "",
            Mobile: "",
            Phone: "",
            ContactPerson: "",
            Logo: "",
            Balance: 0.00,
        });
    }
    
    render(){
        const {entities, Balance} = this.state;

        return(
            <div>
                <h2 className='Heading'> Business Entities</h2>
                <button type="button" className="btn btn-primary m-2 float-end" data-bs-toggle="modal" data-bs-target="#addModal" onClick={()=>this.addClick()}>
                Add Employee
                </button>
           
            
            <div className='d-flex justify-content-center m-3'>

             <div className="modal fade" id="addModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header">
                         <h5 className="modal-title">Add New Employee</h5>
                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            ></button>
                        </div>

                    <div className="modal-body">
                    <div className="input-group mb-3">
                      <span className="input-group-text">Name</span>
                         <input type="text" className="form-control" onChange={this.changeName}/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Email</span>
                         <input type="email" className="form-control" onChange={this.changeEmail}/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Address</span>

                         <input type="text" className="form-control" placeholder='Street' onChange={this.changeStreet}/>

                         <input type="text" className="form-control" placeholder='City' onChange={this.changeCity}/>

                         <input type="text" className="form-control" placeholder='State' onChange={this.changeState}/>
                         <input type="text" className="form-control" placeholder='Zip Code' onChange={this.changeZip}/>
                         <input type="text" className="form-control" placeholder='Country' onChange={this.changeCountry}/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Mobile</span>
                         <input type="text" className="form-control" onChange={this.changeMobile}/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Phone</span>
                         <input type="text" className="form-control" onChange={this.changePhone}/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Contact Person</span>
                         <input type="text" className="form-control" onChange={this.changeContactPerson}/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">Initial Balance</span>
                         <input type="text" className="form-control" onChange={this.changeBalance}/>
                    </div>
                    <div>
                    {Balance!==0?
                    <button type="button"
                        className="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#addModal"
                        onClick={()=>this.createClick()}
                        >Create</button>
                        :null}
                    </div>
                

                </div>
                </div>
        </div>
        </div>   
               
               <div className='d-flex justify-content-center m-3'>
               <p>{entities.map(res => {
                   <button type='button' className='btn btn-primary m-2 float-end' data-bs-toggle= "modal" data-bs-target= '#addModal' onClick={() => this.addClick()}>
                   Edit
                    </button>
                  return <Card BusinessId= {res.BusinessId} Email= {res.Email} Name= {res.Name} Address= {res.Address} State= {res.State} City= {res.City} Zip= {res.Zip} Country= {res.Country} Mobile= {res.Mobile} Phone= {res.Phone} ContactPerson= {res.ContactPerson} Logo= {res.Logo} Balance= {res.Balance}/>
               })}</p>
               </div>
               
               

            </div>

        </div>
        )
    }
}