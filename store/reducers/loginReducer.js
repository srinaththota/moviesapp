initialState={
    loginCheck:1
}
const loginReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN': console.log("in reducer ",action.payload) 
                        return{
                            ...state,
                            loginCheck:action.payload
                        }
    }
    return state;
}

export default loginReducer