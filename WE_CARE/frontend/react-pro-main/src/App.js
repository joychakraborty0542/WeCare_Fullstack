import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/style.css';
import NavBar from './components/layout/NavBar';
import FooterBar from './components/layout/FooterBar';
import Home from './components/home/Home';
import CoachRegistration from './components/coach/CoachRegistration';
import CoachLogin from './components/coach/CoachLogin';
import CoachHome from './components/coach/CoachHome';
import UserRegistration from './components/user/UserRegistration';
import UserLogin from './components/user/UserLogin';
import UserHome from './components/user/UserHome';
import View from './components/user/View';

function App() {
  return (
    <Router>
      <div>        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/coachsignup" element={<CoachRegistration/>} />
          <Route exact path="/coachlogin" element={<CoachLogin/>} />
          <Route exact path="/coachhome" element={<CoachHome/>} />
          <Route exact path="/usersignup" element={<UserRegistration/>} />
          <Route exact path="/userlogin" element={<UserLogin/>} />
          <Route exact path="/userhome" element={<UserHome/>} />  
          <Route exact path="/userviewprofile" element={<View/>} />  
                
        </Routes>
        <FooterBar/>
      </div>

    </Router>
  );
}

export default App;
