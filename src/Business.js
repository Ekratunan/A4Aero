import React, {Component} from 'react';
import { variables } from './Variables';
import Card from './Components/Card';
import Modal from './Components/Modal';

export default class Business extends Component{
   
    constructor(props){
        super(props);

        this.state={
            entities: [],
            ModalTitle: "Create new Record",
            BusinessId: 0,
            Code: "1002",
            Email: "user@email.com",
            Name: "Full name",
            Street: "Street",
            City: "City",
            State: "State",
            Zip: "1001",
            Country: "Bangladesh",
            Mobile: "01776473886",
            Phone: "016274287",
            ContactPerson: "Rakib",
            ReferredBy: "Ahmed Sir",
            Logo: "Sample Logo",
            Status: 1,
            Balance: 0.00,
            SMTPServer: "",
            SMTPPort: 1211,
            SMTPUsername: "",
            SMTPPassword: "",
            Deleted: false,
            CreatedOnUtc: Date.now(),
            UpdatedOnUtc: Date.now(),
            Delete: (id) => this.deleteClick(id),
            Edit: () => this.updateClick(),
            Create: () => this.createClick(),
            Update: () => this.updateClick(),
            changeCode: this.changeCode,
            changeName: this.changeName,
            changeEmail: this.changeEmail,
            changeStreet: this.changeStreet,
            changeCity: this.changeCity,
            changeState: this.changeState,
            changeZip: this.changeZip,
            changeCountry: this.changeCountry,
            changeMobile: this.changeMobile,
            changePhone: this.changePhone,
            changeRefferedBy: this.changeReferredBy,
            changeContactPerson: this.changeContactPerson,
            changeBalance: this.changeBalance
        }
    }
    refreshList(){
        fetch(variables.API_Url)
        .then(res => res.json())
        .then(data =>{
            this.setState({entities:data})
        }, (error) => {
            console.log(error);
            alert('Counld not connect to the server');
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    createClick(e){
        e.preventDefault();
        if(window.confirm('Add this Record?')){
            fetch(variables.API_Url,{
                method:'POST',
                headers:{
                  'Accept':'application/json',
                  'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    Code: this.state.Code,
                    Email: this.state.Email,
                    Name: this.state.Name,
                    Street: this.state.Street,
                    City: this.state.City,
                    State: this.state.State,
                    Zip: this.state.Zip,
                    Country: this.state.Country,
                    Mobile: this.state.Mobile,
                    Phone: this.state.Phone,
                    ContactPerson: this.state.ContactPerson,
                    ReferredBy: this.state.ReferredBy,
                    Logo: this.state.Logo,
                    Status: this.state.Status,
                    Balance: this.state.Balance,
                    SMTPServer: this.state.SMTPServer,
                    SMTPPort: this.state.SMTPPort,
                    SMTPUsername: this.state.SMTPUsername,
                    SMTPPassword: this.state.SMTPPassword,
                    Deleted: this.state.Deleted,
                    CreatedOnUtc: this.state.CreatedOnUtc,
                    UpdatedOnUtc: this.state.UpdatedOnUtc
                })
            })
            .then(res => res.json())
            .then((res)=>{
                alert('Record Saved');
                console.log(res);
                this.refreshList();
            }, (err) => {
              console.log(err);
              alert("Could Not Save Record");
          });
        }
        this.refreshList();
      }

    updateClick(){
        fetch(variables.API_Url,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Code: this.state.Code,
                Email: this.state.Email,
                Name: this.state.Name,
                Street: this.state.Street,
                City: this.state.City,
                State: this.state.State,
                Zip: this.state.Zip,
                  Country: this.state.Country,
                  Mobile: this.state.Mobile,
                  Phone: this.state.Phone,
                  ContactPerson: this.state.ContactPerson,
                  ReferredBy: this.state.ReferredBy,
                  Logo: this.state.Logo,
                  Status: this.state.Status,
                  Balance: this.state.Balance,
                  SMTPServer: this.state.SMTPServer,
                  SMTPPort: this.state.SMTPPort,
                  SMTPUsername: this.state.SMTPUsername,
                  SMTPPassword: this.state.SMTPPassword,
                  Deleted: this.state.Deleted,
                  CreatedOnUtc: this.state.CreatedOnUtc,
                  UpdatedOnUtc: this.state.UpdatedOnUtc
                
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            console.log(error);
            alert('Failed to update');
        })
    }
    
    deleteClick = (id) => {
        if(window.confirm('Are you sure?')){
        fetch(variables.API_Url+id,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then((result)=>{
            console.log(result);
            alert('Successfully Deleted');
            this.refreshList();
        },(error)=>{
            console.log(error);
            alert('Failed');
        })
        }
        this.refreshList();
    }


    changeCode = (e) => {
        this.setState({Code: e.target.value});
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

    changeReferredBy = (e) =>{
        this.setState({ReferredBy: e.target.value});
    }

    changeStatus = (e) =>{
        this.setState({Status: e.target.value});
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

    setCheckBox = (e) => {
        if(e === 1){
            return true;
        }else if(e===0){
            return false;
        } 
    }

    addClick = (e) => {
        this.setState({
            ModalTitle: e.target.value,
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
            Balance: 0.00
        });
    }
    
    render(){
        const {entities, ModalTitle, changeRefferedBy} = this.state;

        return(
            <div>
                <div className='Header'>
                <h2 className='nav-brand'>Business Entities</h2>
                <button className="btn btn-danger m-2 float-end" data-bs-toggle="modal" data-bs-target="#addModal" onClick={() => this.state.addClick}>Add Employee</button>
                </div>
            <div className='d-flex justify-content-center m-3'>
                <Modal changeCode= {this.state.changeCode} changeName= {this.state.changeName} changeEmail= {this.state.changeEmail} changeStreet= {this.state.changeStreet} changeState= {this.state.changeState} changeCity= {this.state.changeCity} changeZip= {this.state.changeZip} changeCountry= {this.state.changeCountry} changeMobile= {this.state.changeMobile} changePhone= {this.state.changePhone} changeContactPerson= {this.state.changeContactPerson} changeRefferedBy= {changeRefferedBy} changeBalance= {this.state.changeBalance} Create= {() => this.createClick()} ModalTitle= {ModalTitle} Balance= {this.state.Balance} />
               <div className='d-flex justify-content-center m-3'>
               <p>{entities.map(res => {
                  return  <div>
                    <Card BusinessId= {res.BusinessId} Code={res.Code} Email= {res.Email} Name= {res.Name} Street= {res.Street} State= {res.State} City= {res.City} Zip= {res.Zip} Country= {res.Country} Mobile= {res.Mobile} Phone= {res.Phone} ContactPerson= {res.ContactPerson} ReferredBy= {res.ReferredBy} Status= {this.setCheckBox(res.Status)} Logo= {res.Logo} Balance= {res.Balance} Edit= {() => this.state.addClick("Edit Record")} Delete= {this.state.Delete}/>
                    </div>
               })}</p>
               </div>
            </div>
        </div>
        )
    }
}