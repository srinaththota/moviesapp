import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, TextInput, Button, Text, StyleSheet } from 'react-native'
import register from '../store/actions/register'
const RegisterScreen=(props)=>{
    const [username,setUsername]=useState('')
    const [password,SetPassword]=useState('')
    const [confirmPassword,SetConfirmPassword]=useState('')
    const token=useSelector(state=>state.login.loginCheck)
    const dispatch = useDispatch()
    const RegisterFunc=()=>{
        dispatch(register(username,password,confirmPassword))
        props.navigation.navigate('Login')
    }
  
    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <TextInput style={styles.number} 
            placeholder="Mobile Number or Email Id"  
            onChangeText={username=>setUsername(username)}
            value={username}/>
            <TextInput style={styles.number} 
            placeholder="password"  
            onChangeText={password=>SetPassword(password)}
            value={password}/>
            <TextInput style={styles.number} 
            placeholder="password"  
            onChangeText={confirmPassword=>SetConfirmPassword(confirmPassword)}
            value={confirmPassword}/>
            <View style={styles.buttonContainer}>
            
            <Button title="Register" onPress={RegisterFunc} />
            
            </View>
           </View>
           </View>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        
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
        alignItems:'center',
        justifyContent:'center',
        padding:10
    },
    inputContainer:{
        marginTop:60
    },    
  
  });
