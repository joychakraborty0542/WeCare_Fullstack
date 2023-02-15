import React, { useEffect, useState } from 'react'
import {UserNavBar} from '../layout/NavBar'
import { useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios';
import { bookAppointment } from '../../action';
import coachImg from '../../images/coach.png'

function UserHome(props) {
  const {state} = useLocation()
  const [coachs, setCoachs] = useState([]);
  const [coachChosen,setCoachChosen] = useState(false);
  const [coachId,setcoachId] = useState(0);
  const [doa, setDoa] = useState("");
  const [slot, setSlot] = useState("");
  const [appointment, setAppointment] = useState({})
  const [bookApp, setBookApp] = useState(false);

  //console.log(state,"tre");

  const getAllUsers = () => {
    axios.get("http://localhost:3000/coachs").then((response) => {
     //console.log(response.data);
      if(response){
        setCoachs(response.data)
          console.log(response.data);
          //setRegister(false)
      }
  });
  }
  useEffect(()=>{
    getAllUsers()
  },[])

  const getAppointment = (id) => {    
    setCoachChosen(true);
    setcoachId(id);
  }

  const onAppointmentSubmit = async (event) => {
    event.preventDefault();
    
    const appointment = { slot:slot, doa:doa, coachId:coachId, userId:state.userId };
    console.log(appointment, "appointmentData");
    await axios.post("http://localhost:3000/booking", appointment).then((response) => {
            if(response){
                setAppointment(response.data)                
                setBookApp(true)
            }
      });
    props.dispatch(bookAppointment(appointment));
  }
  
  const resetPage = () => {
    setBookApp(false);
    setCoachChosen(false);
  } 
 // console.log('params',state.userType);

  if(bookApp){
    return(
      <>
      {state.userType == 'user' && <UserNavBar/>}
      <section className="wc-section">
        <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                  <div className="card card-column align-items-center">
                    <div className="card-body">
                      <h2>Your Appointment is scheduled successfully</h2>
                      <div className="col pt-5 d-flex justify-content-center">
                              <button type="button" className="btn btn-success btn-lg " onClick = {resetPage}>Go Back</button> 
                      </div>
                    </div>
                  </div>                
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  if(coachChosen) {
    return (
      <>
      {state.userType == 'user' && <UserNavBar/>}  
      <section className="wc-section">
      <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-8">
                  <div className="card card-column">
                      <div className='d-flex mx-auto gap-3 intro-text'>
                        <i className="fa-solid fa-calendar-days calendar"></i>
                          <h2>Proceed with you Appointment</h2>
                      </div>
                      <div className="card-body">
                          <div className="row justify-content-center">
                            <div className="col-md-10 pb-4">
                              <label className="form-label ">Date of Appointment</label>
                              <input type="date" className="form-control" 
                                  name="doa"
                                  value={doa}
                                  onChange={(event) => setDoa(event.target.value)} 
                                  /> 
                            </div> 

                            <div className="col-md-10 pb-4">
                              <label className="form-label ">Preferred Slot</label>
                              <div className='d-flex gap-3'>
                                  <input type="radio" className="form-check-input" 
                                      name="slot"
                                      value="9 AM to 10 AM"
                                      onChange={(event) => setSlot(event.target.value)}                                         
                                  />
                                  <label className="form-label">9 AM to 10 AM</label> 
                              
                                  <input type="radio" className="form-check-input" name="slot"
                                      value="10 AM to 11 AM"
                                      onChange={(event) => setSlot(event.target.value)} 
                                  />
                                  <label className="form-label ">10 AM to 11 AM</label>

                                  <input type="radio" className="form-check-input" name="slot"
                                      value="11 Am to 12 AM"
                                      onChange={(event) => setSlot(event.target.value)} 
                                  />
                                  <label className="form-label ">11 Am to 12 AM</label>

                                  <input type="radio" className="form-check-input" name="slot"
                                      value="2 PM to 3 PM"
                                      onChange={(event) => setSlot(event.target.value)} 
                                  />
                                  <label className="form-label ">2 PM to 3 PM</label>

                                  <input type="radio" className="form-check-input" name="slot"
                                      value="3 PM to 4 PM"
                                      onChange={(event) => setSlot(event.target.value)} 
                                  />
                                  <label className="form-label ">3 PM to 4 PM</label>

                                  <input type="radio" className="form-check-input" name="slot"
                                      value="4 Pm to 5 PM"
                                      onChange={(event) => setSlot(event.target.value)} 
                                  />
                                  <label className="form-label ">4 Pm to 5 PM</label>
                                </div>
                            </div> 
                              
                            <div className="col-md-10 pb-5 d-flex justify-content-center">
                              <button type="button" className="btn btn-success btn-lg w-50" onClick={(event) => onAppointmentSubmit(event)}>Confirm your Appointment</button> 
                            </div> 
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </section>
      </>
    )
  }
  return (
    <>
    {state.userType == 'user' && <UserNavBar/>}     
    <section className='wc-section '>        
    <div className="container">
      <div className="row justify-content-center gap-3">
        {
          coachs.map((coach, index) => (
            <div className="col-md-5" key={index}>                    
              <div className="card card-column-user d-flex flex-row gap-3">
                  <img src={coachImg} className="card-img-top photo" alt="..."/>
                  <div className="card-body body-text d-flex flex-column gap-3">  
                    <h3>{coach.name}</h3>
                    <h4>Coach Id: {coach.id}</h4>
                    <h5>Mobile No: {coach.phone}</h5>
                    <h5>Speciality: {coach.speciality}</h5>
                    <button type="button" className="btn btn-primary" onClick={ () => getAppointment(coach.id)}>Book an Appointment</button>
                  </div>
              </div>
            </div>
          ))
        }
                  
      </div>
    </div>
    </section>

    </>
  )

 
}

export default connect()(UserHome)