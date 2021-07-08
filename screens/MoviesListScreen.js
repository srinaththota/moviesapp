import React from 'react'
import { View, Text, FlatList , StyleSheet } from 'react-native'
import ModelsData from '../data/dummy-data'
import { StarData } from '../data/dummy-data'
import ModelItem from '../components/ModelItem'

const CategoryMealScreen=({route,navigation})=>{
    
   const renderModelItem=(itemData)=>{
       return <ModelItem title={itemData.item.name} onSelectModel={()=>{
           navigation.navigate('Movie Detail Screen',{
               modelId:itemData.item.id
           })
       }} image={itemData.item.image}/>
   } 
const selectedId=route.params.categoryId;
 const selectedStar=ModelsData.find(item=>item.id===selectedId)
    console.log("selectedstar",selectedId)
 
 const displayModels = StarData.filter(star=>{
    return (star.categoryIds.indexOf(selectedId) >= 0)
    })
    
React.useEffect(()=>{
    navigation.setOptions({
        headerTitle:selectedStar.name,
        headerStyle:{
            backgroundColor:'red'
        }
    })
},[])

    return(
        
        <View style={styles.screen}>
          <FlatList data={displayModels} keyExtractor={(item,index)=>item.id} renderItem={renderModelItem}/>
        </View>
        
       
    )
}

export default CategoryMealScreen;

const styles=StyleSheet.create({
screen:{
    flex: 2,
    margin:15,
    height:150
}
})