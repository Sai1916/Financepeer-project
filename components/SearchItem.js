import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SearchItem = ({image,name,id}) => {

    const navigation = useNavigation();

    const img_base_url="https://image.tmdb.org/t/p/original/";

    return (
        <TouchableOpacity 
            style={{
                width:140,
                alignItems:"center",
                justifyContent:"space-around",
                marginHorizontal:15,
                marginVertical:10,
                borderRadius:20,
                paddingHorizontal:10
            }}
            onPress={() => navigation.navigate("MovieDetail",{name: name,id: id})}
        >
            <Image source={{uri:`${img_base_url}${image}`}} style={{width:140,height:160,resizeMode:'contain',borderRadius:20}}/>
            <Text style={{color: 'white',paddingVertical:3}}>{name}</Text>
        </TouchableOpacity>
    )
}

export default SearchItem
