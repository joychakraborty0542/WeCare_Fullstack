import React, {useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from "react-router-dom";
import { registerUser } from '../../action';
import { UserNavBar } from '../layout/NavBar';
import userImg from '../../images/woman.png';

function UserRegistration(props) {


const [name, setName] = useState("");
const [password, setPassword] = useState("");
const [dob, setDob] = useState("");
const [gender, setGender] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [pincode, setPincode] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
const [country, setCountry] = useState("");
const [post, setPost] = useState({});
const [register, setRegister] = useState(true);

const onFormSubmit = async (event) => { 
    event.preventDefault();

    const user = {name:name, password:password, dob:dob, gender:gender, phone:phone, email:email, pincode:pincode, city:city, state:state, country:country}
    //await axios.post("http://localhost:8081/api/users", user).then((response) => {
    await axios.post("http://localhost:3000/users", user).then((response) => {
            if(response){
                setPost(response.data)                
                setRegister(false)
            }
      });
    props.dispatch(registerUser(user)); 
}

  return (
    <>
    {state.userType == 'user' && <UserNavBar/>}
    { register?
    <section className="wc-section">
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="card card-column"> 
                        <div className='d-flex mx-auto gap-3 intro-text'>
                            <img src={userImg} className="card-img-top intro-photo" alt="..." />  
                            <h2>User Profile</h2>    
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
                                    <label className="form-label">Mobile Number</label>
                                    <input type="text" className="form-control" 
                                        name="phone"
                                        value={phone}
                                        onChange={(event) => setPhone(event.target.value)}
                                        />
                                </div>
                                <div className="col-md-6 pb-4">
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control" 
                                        name="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
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
                                    <label className="form-label">Pincode</label>
                                    <input type="text" className="form-control" 
                                        name="pincode"
                                        value={pincode}
                                        onChange={(event) => setPincode(event.target.value)}
                                    />
                                </div>   

                                <div className="col-md-6 pb-4">
                                    <label className="form-label">City</label>
                                    <input type="text" className="form-control" 
                                        name="city"
                                        value={city}
                                        onChange={(event) => setCity(event.target.value)}
                                    />
                                </div> 
                                <div className="col-md-6 pb-4">
                                    <label className="form-label">State</label>
                                    <input type="text" className="form-control" 
                                        name="state"
                                        value={state}
                                        onChange={(event) => setState(event.target.value)}
                                    />
                                </div>
                                <div className="col-md-6 pb-4">
                                    <label className="form-label">Country</label>
                                    <input type="text" className="form-control" 
                                        name="country"
                                        value={country}
                                        onChange={(event) => setCountry(event.target.value)}
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
                    <img src={userImg} className="card-img-top photo-signup" alt="..." />
                    <h2>Account create successfully!</h2>
                    <h5>Your User Id is {post.id}</h5>
                    <Link className="btn btn-primary" to="/userlogin">Login Now</Link>
                </div>            
            </div>
        </div>
    </section>
    }
    </>
  )
}

export default connect()(UserRegistration)