import { FontDisplay } from 'expo-font'
import React from 'react'
import { View , Text, StyleSheet, TouchableOpacity , Image } from 'react-native'

const CategoryGridTile = props=>{
    
    return(
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
            <View style={{...styles.container,...{backgroundColor:props.color}}}>
                <Text style={styles.textStyle}>{props.title}</Text>
                <Image source={props.image} style={{...styles.imageStyle}}/>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryGridTile

const styles=StyleSheet.create({
    appContainer:{
        flex: 1,
        alignItems:'center'
    },
    gridItem:{
        flex: 1,
        height:150,
        margin: 20
      },
      container:{
          flex:1,
          borderRadius:10,
          justifyContent:'center',
          alignItems:'center',
      },
      textStyle:{
          fontSize:22,
          marginTop:100
      },
      imageStyle:{
          height:120,
          width:120
      },
      stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
      },



})