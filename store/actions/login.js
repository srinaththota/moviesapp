const login=(username,password)=>{
    console.log(username,password)
    return dispatch=>{
    /*    console.log("here")
        fetch('http://192.168.1.6:3000/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                authKey:'123456789',
                password:'srinath'
            })
        }).then(res=>{
            console.log(res.ok)
            if(res.ok == true){
                dispatch({
                    type:'LOGIN',
                    payload:1234 //considersing we received payload
                })        
            }else{
            // currently i am excluding backend service to show the functionality    
            dispatch({
                type:'LOGIN',
                payload:1234 //considersing we received payload
            })
            }
        }).catch(err=>{
            console.log(err)

            // currently i am excluding backend service to show the functionality
            dispatch({
                type:'LOGIN',
                payload:1234 //considersing we received payload
            })
        })
      */
     if(username=="123456789"){
        dispatch({
            type:'LOGIN',
            payload:1234 //considersing we received payload
        })
    }
    }
}
      
export default login;