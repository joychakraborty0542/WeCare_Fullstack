import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

function View(props) {


/* const getAllUsers = () => {
    axios.get("http://localhost:3000/coachs").then((response) => {
        console.log(response.data);
        if(response){
        setCoachs(response.data)
            console.log(response.data);
            //setRegister(false)
        }
    });
} */

  return (
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
                    <button type="button" className="btn btn-primary">Book an Appointment</button>
                  </div>
              </div>
            </div>
          ))
        }
                  
      </div>
    </div>
    </section>
  )
}

export default connect()(View)
