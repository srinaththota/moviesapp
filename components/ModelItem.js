import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

import styled, { withTheme } from 'styled-components/native'


const ModelItem=props=>{
    return(
        <View style={styles.modelItem}>
        <TouchableOpacity onPress={props.onSelectModel}>
        <View>
            <ImageBackground style={styles.imageStyle} source={props.image}>
            <View style={{...styles.modelRow,...styles.modelHeader}}>
            <Text style={styles.title}>{props.title}</Text>
            </View>
            </ImageBackground>
            <View>
            <Text>Description</Text>
            </View>
        </View>
        </TouchableOpacity>
        </View>
    )
}

export default ModelItem;

const styles=StyleSheet.create({
    modelRow:{
        flexDirection:'row'
    },
    modelItem:{
        height:280,
        width:'100%',
        backgroundColor:'white',
        paddingVertical: 20,
        borderRadius: 30,
        marginVertical: 30,
        overflow:'hidden'
        
    },
    modelHeader:{
        height:'80%'
    },
    modelDetail:{
        paddingHorizontal: 10,
        justifyContent:'space-between'
    },
    imageStyle:{
        width:'100%',
        height:'100%',
        resizeMode:"contain"
    },
    title:{
        flex:1,
        marginTop:95,
        color:'white',
        justifyContent:'center',
        alignItems:'center'
    }

})