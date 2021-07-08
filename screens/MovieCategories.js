import React from 'react'
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import ModelsData from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
const CategoriesScreen=props=>{

    const renderGridItem=(itemData)=>{
      return <CategoryGridTile title={itemData.item.name}
      color={itemData.item.color}
      onSelect={
        ()=>{
          props.navigation.navigate('Movies List Screen',{
            categoryId:itemData.item.id
          })
        }
      }/>
      
    }
    return(
      <FlatList keyExtractor={(item,index)=>{
        return item.id
      }} data={ModelsData} renderItem={renderGridItem}  numColumns={2} />
      
    )
}


export default CategoriesScreen;

const styles=StyleSheet.create({
screen:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
}
})