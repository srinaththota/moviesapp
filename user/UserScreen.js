import React, { useEffect } from 'react'
import { Button, Text, View, StyleSheet, TextInput} from 'react-native'
import  login  from '../store/actions/login'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
const UserScreen=(props)=>{
    const [username,setUsername]=useState('')
    const [password,SetPassword]=useState('')
    const [error,setError]=useState('')
const token=useSelector(state=>state.login.loginCheck)


const dispatch = useDispatch()

    const loginFunc=(e)=>{
     //   e.preventDefault();
        dispatch(login(username,password))
        if(token == 1234){
            props.navigation.navigate('Categories')
        }else{
            setError("Wrong credentials")
        }
        setUsername('')
    }

    const RegisterFunc=()=>{
        props.navigation.navigate('Register')
    }
    return(
        <View style={styles.container}>
            <View>
                <Text>{error}</Text>
            </View>
               
            <TextInput style={styles.number} 
            placeholder="Mobile Number or Email Id"  
            onChangeText={username=>setUsername(username)}
            value={username}/>
            <TextInput style={styles.number} 
            placeholder="password"  
            onChangeText={(event)=>{SetPassword(event.target.value)}}
            value={password}/>
            <View style={styles.buttonContainer}>
                <View>
            <Button title="Login" onPress={loginFunc} />
            </View>
            <View>
            <Button title="Register" onPress={RegisterFunc} />
            </View>
            </View>
           </View>
           
    )
}

export default UserScreen;
const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    number:{
        fontSize:22,
        color:'black',
        borderWidth: 1,
        width:300,
        maxWidth: '80%',
        paddingVertical:10,
        borderColor:'white',
        borderBottomColor: 'black'
    
    },
    buttonContainer:{
        marginTop: 25,
        width:'80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10
    },
    
    buttonStyle:{

    }
  });
