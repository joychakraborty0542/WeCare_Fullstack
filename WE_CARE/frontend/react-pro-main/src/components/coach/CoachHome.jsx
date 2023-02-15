import React from 'react';
import {useLocation} from 'react-router-dom'
import { CoachNavBar, NavBar } from '../layout/NavBar';

function CoachHome() {
  const {state} = useLocation()
  return (
    <>
    {state.userType == 'coach' && <CoachNavBar/>}
    <div>Coach Home</div>
    </>
  )
}

export default CoachHome