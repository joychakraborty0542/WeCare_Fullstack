import coachImg from '../../images/coach.png'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import { registerCoach } from '../../action';

function CoachRegistration(props) {

const [name, setName] = useState("");
const [password, setPassword] = useState("");
const [dob, setDob] = useState("");
const [gender, setGender] = useState("");
const [phone, setPhone] = useState("");
const [speciality, setSpeciality] = useState("");
const [post, setPost] = useState({});
const [register, setRegister] = useState(true);


const onFormSubmit = async (event) => { 
    event.preventDefault();
    if (!name) {
        alert("Name cannot be empty");
        return;
    }
    if (!password) {
        alert("Password cannot be empty");
        return;
    }
    if (!dob) {
        alert("Date of Birth cannot be empty");
        return;
    }
    if (!phone) {
        alert("Phone number cannot be empty");
        return;
    }
    if (!speciality) {
        alert("speciality cannot be empty");
        return;
    }

    const coach = { name: name, password:password, dob:dob, gender:gender, phone:phone, speciality:speciality}   
    await axios.post("http://localhost:3000/coachs", coach).then((response) => {
            if(response){
                setPost(response.data)
                setRegister(false)
            }
      });
    props.dispatch(registerCoach(coach));       
}

  return (
    <>
    { register?
    <section className="wc-section">
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="card card-column"> 
                        <div className='d-flex mx-auto gap-3 intro-text'>
                            <img src={coachImg} className="card-img-top intro-photo" alt="..." />  
                            <h2>Life Coach Profile</h2>    
                        </div>                                    
                        <div className="card-body">
                            <div className="row">
                                
                                <div className="col-md-6 pb-4">
                                    <label className="form-label ">Name</label>
                                    <input type="text" className="form-control" 
                                        name="name"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)} />
                                </div>
                                
                                <div className="col-md-6">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" 
                                        name="password"
                                        value={password}
                                        onChange={(event) =>setPassword(event.target.value)}
                                        />
                                </div> 
                                <div className="col-md-6 pb-4">
                                    <label className="form-label ">Date of Birth</label>
                                    <input type="date" className="form-control" 
                                        name="dob"
                                        value={dob}
                                        onChange={(event) => setDob(event.target.value)}
                                        />
                                </div> 
                                <div className="col-md-6 pb-4">
                                    <label className="form-label ">Gender</label>
                                    <div className='d-flex gap-3'>
                                        <input type="radio" className="form-check-input" 
                                            name="gender"
                                            value="male"
                                            onChange={(event) => setGender(event.target.value)}                                         
                                        />
                                        <label className="form-label">Male</label> 
                                    
                                        <input type="radio" className="form-check-input" name="gender"
                                            value="female"
                                            onChange={(event) => setGender(event.target.value)} 
                                        />
                                        <label className="form-label ">Female</label>
                                    </div>
                                </div>   
                                <div className="col-md-6 pb-4">
                                    <label className="form-label">Mobile Number</label>
                                    <input type="text" className="form-control" 
                                        name="phone"
                                        value={phone}
                                        onChange={(event) => setPhone(event.target.value)}
                                        />
                                </div>
                                <div className="col-md-6 pb-4">
                                    <label className="form-label">Speciality</label>
                                    <input type="text" className="form-control" 
                                        name="speciality"
                                        value={speciality}
                                        onChange={(event) => setSpeciality(event.target.value)}
                                    />
                                </div>   
                                <div className="col pb-4 d-flex justify-content-center">
                                    <button type="button" className="btn btn-success btn-lg w-50" onClick={(event) => onFormSubmit(event)}>Register</button> 
                                </div>                                               
                            </div>  
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    :
     <section className='wc-section'>        
     <div className="container">
         <div className="row justify-content-center text-center">
             <div className="col-md-4 signup-text">
                 <img src={coachImg} className="card-img-top photo-signup" alt="..." />
                 <h2>You are a Coach now !</h2>
                 <h5>Your Coach Id is {post.id}</h5>
                 <Link className="btn btn-primary" to="/coachlogin">Login Now</Link>
             </div>            
         </div>
     </div>
 </section>
    }
    </>
  )
}

export default connect()(CoachRegistration)