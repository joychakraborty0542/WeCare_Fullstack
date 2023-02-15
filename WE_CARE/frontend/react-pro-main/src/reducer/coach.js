const initialState = {
    data:[]
}
const coach = (state=initialState,action)=>{
    switch(action.type){
        case 'REGISTER_COACH':
            return {
                data:[...state.data,action.payload]
            }  
        case 'LOGIN_COACH':
            return {
                data:[...state.data,action.payload]
            }      
        default:
            return state;
    }
}

export default coach;