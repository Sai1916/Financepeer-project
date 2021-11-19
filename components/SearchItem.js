import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const SearchItem = ({image,name}) => {

    const img_base_url="https://image.tmdb.org/t/p/original/";

    return (
        <TouchableOpacity style={{width:130,height:220,alignItems:"center",justifyContent:"center",marginHorizontal:20}}>
            <Image source={{uri:`${img_base_url}${image}`}} style={{width:120,height:140,resizeMode:'cover',borderRadius:20}}/>
            <Text style={{color: 'white',marginVertical:10}}>{name}</Text>
        </TouchableOpacity>
    )
}

export default SearchItem
