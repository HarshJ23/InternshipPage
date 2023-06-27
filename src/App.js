// import './App.css';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';

import Navbar from './Components/Header' ;
import Home from './Pages/Home';
import AdminAuth from './Pages/AdminAuth';
import AddListing from './Pages/AddListing';

function App() {
  return (
    <>
    <Router>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/adminlog" element={<AdminAuth/>}/>
       <Route path="/addlisting" element={<AddListing/>}/>
      </Routes>
    </Router>
   </>
  );
}

export default App;
