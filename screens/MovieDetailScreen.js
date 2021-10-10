import React from 'react'
import { View, Text, Image } from 'react-native'

const MovieDetailScreen = ({navigation,route}) => {

    const {name, poster, backdrop, genre, id, overview, popularity, date, rating} = route.params;

    const img_base_url="https://image.tmdb.org/t/p/original/";

    return (
        <View style={{marginHorizontal:10}}>
            <Image source={{uri: `${img_base_url}${backdrop}`}} style={{width:"100%",height:200,resizeMode:"cover"}}/>
            
        
        </View>
    )
}

export default MovieDetailScreen
