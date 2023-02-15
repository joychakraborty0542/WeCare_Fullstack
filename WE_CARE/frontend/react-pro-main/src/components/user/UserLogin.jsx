import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { loginUser } from '../../action';
//import {store} from '../../store';
import userImg from '../../images/woman.png'

function UserLogin(props) {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [post, setPost] = useState("");

    /* const userState = props.userState;
    console.log(props.userState, "123ffff"); */

    const navigate = useNavigate();

    const onFormSubmit = async (event) => {
        event.preventDefault();
        if (!userId) {
            alert("Enter Coach Id");
            return;
        }
        if (!password) {
            alert("Enter Password");
            return;
        }

        const user = { userId: userId, password: password };
        await axios.post("http://localhost:3000/users", user).then((response) => {
            setPost(response.data);
            //console.log("sss", post);
            if (response.data) {
                navigate('/userhome',
                    {
                        state: {
                            userType: 'user',
                            userId: response.data.userId
                        }
                    }
                );
            }
        });
        props.dispatch(loginUser(user));
    }

    return (
        <section className="wc-section">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="card card-column">
                            <div className='d-flex mx-auto gap-3 intro-text'>
                                <img src={userImg} className="card-img-top intro-photo" alt="..." />
                                <h2>Login As User</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">

                                    <div className="col-md-6 pb-4">
                                        <label className="form-label ">UserId</label>
                                        <input type="text" className="form-control"
                                            name="coachId"
                                            value={userId}
                                            onChange={(event) => setUserId(event.target.value)} />
                                    </div>

                                    <div className="col-md-6 pb-4">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control"
                                            name="password"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
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

const mapStateToProps = (state) => {
    //console.log(state,"map12");  
    return {        
      //userState: state.login,
      //isAuthenticated: state.login.isAuthenticated  
    }  
  }

export default connect(mapStateToProps)(UserLogin)