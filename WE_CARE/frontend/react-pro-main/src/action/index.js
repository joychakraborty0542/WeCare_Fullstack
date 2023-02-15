const REGISTER_COACH = 'REGISTER_COACH';
const LOGIN_COACH = 'LOGIN_COACH';

const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';

const BOOKING_APPOINTMENT = 'BOOKING_APPOINTMENT';

export const registerCoach = (data) => ({
  type: REGISTER_COACH,
  payload: data
})

export const loginCoach = (data) => ({
  type: LOGIN_COACH,
  payload: data
})

export const registerUser = (data) => ({
  type: REGISTER_USER,
  payload: data
})

export const loginUser = (data) => ({
  type: LOGIN_USER,
  payload: data
})

export const bookAppointment = (data) => ({
  type: BOOKING_APPOINTMENT,
  payload: data
})