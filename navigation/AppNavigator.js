import { Platform } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MovieCategories from '../screens/MovieCategories'
import MoviesListScreen from '../screens/MoviesListScreen'
import MovieDetailScreen from '../screens/MovieDetailScreen'
import UserScreen from '../user/UserScreen'
import Colors from '../constants/Colors'
import RegisterScreen from '../user/RegisterScreen'
const MyStack = createStackNavigator();

const AppNavigator=props=>{
    return(
        <NavigationContainer>
            <MyStack.Navigator initialRouteName="Login">
                <MyStack.Screen name="Login" component={UserScreen} />
                <MyStack.Screen name="Register" component={RegisterScreen} />
                <MyStack.Screen name='Categories' options={{
                    headerTitle:'Movies Categories',
                    headerStyle:{
                    backgroundColor:Platform.OS === 'android'?Colors.primaryColor:''
                    },
                    headerTintColor:Platform.OS==='android'?'white':Colors.primaryColor
                }} component={MovieCategories}/>
                <MyStack.Screen name='Movies List Screen' component={MoviesListScreen}/>
                <MyStack.Screen name='Movie Detail Screen' component={MovieDetailScreen}/>
            </MyStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;