import Home from './Home';
import Business from './Business';
import {BrowserRouter, Route, NavLink, Routes} from 'react-router-dom';


function App() {
    return(
        
        <div className='App container'>
            <BrowserRouter>
            <h4 className='d-flex justify-content-center m-3'>
               Welcome to A4 Aero
            </h4>

            <nav className='navbar navbar-expand-sm navbar-dark' id='navbar-custom'>
                <ul className='navbar-nav'>
                    <li>
                        <NavLink className= "btn btn-light btn-outline-primary" to= "/">Home</NavLink>
                        <NavLink className= "btn btn-light btn-outline-primary" to= "/business">Business</NavLink>
                    </li>
                </ul>

            </nav>

            <Routes>
                <Route path= '/' element= {<Home/>}/>
                <Route path= '/business' element= {<Business/>}/>
            </Routes>
            </BrowserRouter>
        </div>
        
        
    )
    // // const res = [];
    // // axios.get(variables.API_Url)
    // // .then(
    // //     Data.map((res) => <Card BusinessId = {res.BusinessId} Email= {res.Email} Name= {res.Name} Address= {res.Address} State= {res.State} City= {res.City} Zip= {res.Zip} Country= {res.Country} Mobile= {res.Mobile} Phone= {res.Phone} ContactPerson= {res.ContactPerson} Logo= {res.Logo} Balance= {res.Balance} />
    // // )
}


export default App;
