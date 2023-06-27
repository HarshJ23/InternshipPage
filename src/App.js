// import './App.css';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';

import Navbar from './Components/Header' ;
import Home from './Pages/Home';
import AdminAuth from './Pages/AdminAuth';
import AddListing from './Pages/AddListing';
import Login from './Pages/Login';
import { Toaster } from 'react-hot-toast';
// import Profile from './Pages/AdminPage'
import AdminPage from './Pages/AdminPage';
import PrivateRoute from './Components/PrivateRoute';


function App() {
  return (
    <>
    <Router>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/adminreg" element={<AdminAuth/>}/>
       <Route path="/adminlogin" element={<Login/>}/>

       <Route path="/addlisting" element={<PrivateRoute/>}>
      <Route path="/addlisting" element={<AddListing/>}/>
       </Route>

        <Route path="/adminprofile" element={<PrivateRoute/>}>
      <Route path="/adminprofile" element={<AdminPage/>}/>
       </Route>

      </Routes>
    </Router>
    <Toaster />
   </>
  );
}

export default App;
