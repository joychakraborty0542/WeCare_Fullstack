const initialState = {
    data:[]
}
const user = (state=initialState,action)=>{
    switch(action.type){
        case 'REGISTER_USER':
            return {
                data:[...state.data,action.payload]
            }  
      /*   case 'LOGIN_COACH':
            return {
                data:[...state.data,action.payload]
            } */      
        default:
            return state;
    }
}

export default user;