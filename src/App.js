import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import Designs from './components/Designs'
import Tutorials from './components/Tutorials'
import Contact from './components/Contact'
import Gmail from './components/Gmail'
import Whatsapp from './components/Whatsapp'
import logo from './images/logo.jpg'
function App() 
{




  return (
    <div className='banner'>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-sm navbar-dark">
  <div className="container-fluid">
    <img className=" rounded-circle logoicon" src= {logo} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className="nav-link" aria-current="page" to=''>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to='designs'>Designs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to='tutorials'>Tutorials</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to='contact'>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      



      {/* CREATING ROUTES */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/designs" element={<Designs/>}/>
        <Route path="/tutorials" element={<Tutorials/>}/>
        <Route path="/contact" element={<Contact/>}> 

        {/* CHILDREN OF CONTACT ROUTE */}
        <Route path="gmail" element={<Gmail/>}/>
        <Route path="whatsapp" element={<Whatsapp/>}/>
        
        
        </Route>

      </Routes>

    </div>
    
  );  
}

export default App;
