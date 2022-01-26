import Home from './Home';
import Business from './Business';
import {BrowserRouter, Route, NavLink, Routes} from 'react-router-dom';


function App() {
    return(
        
        <div className='App container'>
            <BrowserRouter>
                <nav class="navbar navbar-expand-lg navbar-light bg-light" id= 'navig'>
                    <h5 class="navbar-brand">A4 Aero</h5>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <NavLink className= "nav-link" to= "/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className= "nav-link" to= "/business">Business</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            
            
            
            {/* <nav className='navbar navbar-expand-lg navbar-light bg-light' id='navbar-custom'>
            <h1 className='navbar-brand'>A4 Aero</h1>
                <ul className='navbar-nav'>
                    <li>
                        <NavLink className= "nav-item" to= "/">Home</NavLink>
                        <NavLink className= "nav-item" to= "/business">Business</NavLink>
                    </li>
                </ul>

            </nav> */}

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
