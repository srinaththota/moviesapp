import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import AppNavigator from './navigation/AppNavigator';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import loginReducer from './store/reducers/loginReducer';
import ReduxThunk from 'redux-thunk'
const rootReducer=combineReducers({
  login:loginReducer
})
const store=createStore(rootReducer, applyMiddleware(ReduxThunk));


export default function App() {

  return (
    <Provider store={store}>
    <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
