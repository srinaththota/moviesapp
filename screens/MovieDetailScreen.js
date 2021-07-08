import React from 'react'
import { View, Text, StyleSheet  , Image, Button } from 'react-native'
import { StarData } from '../data/dummy-data'
import { Video, AVPlaybackStatus } from 'expo-av';


const MovieDetailScreen=({route,navigation})=>{
    const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
    const selectedId=route.params.modelId;
    
    const movieSelected=StarData.find(item=>item.id == selectedId)
    
    return(
        
        <View style={styles.screen}>
            <Button title="Categories" onPress={()=>{navigation.navigate('Categories')}}/>
         <Video
        ref={video}
        style={styles.video}
        source={{
          uri: movieSelected.trailer,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
        </View>
        </View>
        

    )
}

export default MovieDetailScreen;

const styles=StyleSheet.create({
screen:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
imageStyle:{
        height:500,
        width:'96%',
        backgroundColor:'white',
        paddingVertical: 20,
        borderRadius: 30,
        marginVertical: 30,
        
        overflow:'hidden'
},
textStyle:{
    fontSize:22,
    color:'black'
},
video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

})