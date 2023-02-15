import React, { useState } from 'react'
import coachImg from '../../images/coach.png'
import { connect } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { loginCoach } from '../../action';

function CoachLogin(props) {

const navigate = useNavigate();   

const [coachId, setCoachId] = useState("");
const [password, setPassword] = useState("");
const [post, setPost] = useState("");

const onFormSubmit = async (event) => { 
    event.preventDefault();
    if (!coachId) {
        alert("Enter Coach Id");
        return;
    }
    if (!password) {
        alert("Enter Password");
        return;
    }

    const coach = {coachId:coachId, password:password};
    await axios.post("http://localhost:3000/users", coach).then((response) => {
        setPost(response.data);
        console.log("sss", response.data);
        if(response.data){
            navigate('/coachhome',{
                state:{
                    userType: 'coach',
                    coachId: response.data.coachId
                }
            });
        }
    });
    props.dispatch(loginCoach(coach)); 
}

  return (
    <section className="wc-section">
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="card card-column"> 
                        <div className='d-flex mx-auto gap-3 intro-text'>
                            <img src={coachImg} className="card-img-top intro-photo" alt="..." />  
                            <h2>Login As Life Coach</h2>    
                        </div>                                    
                        <div className="card-body">
                            <div className="row">
                                
                                <div className="col-md-6 pb-4">
                                    <label className="form-label ">CoachId</label>
                                    <input type="text" className="form-control" 
                                        name="coachId"
                                        value={coachId}
                                        onChange={(event) => setCoachId(event.target.value)} />
                                </div>
                                
                                <div className="col-md-6 pb-4">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" 
                                        name="password"
                                        value={password}
                                        onChange={(event) =>setPassword(event.target.value)}
                                        />
                                </div>     

                                <div className="col pb-4 d-flex justify-content-center">
                                    <button type="button" className="btn btn-primary btn-lg w-50" onClick={(event) => onFormSubmit(event)} >Login</button> 
                                </div>                                                                           
                            </div>                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default connect()(CoachLogin);