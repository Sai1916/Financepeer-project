import React from 'react'
import { View, Text } from 'react-native'
import {AntDesign} from 'react-native-vector-icons'

const DownloadsScreen = () => {
    return (
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <AntDesign name="download" size={60} color="lightgray"/>
            <Text style={{color:"lightgray",marginVertical:10,fontSize:20}}>No Downloads</Text>
        </View>
    )
}

export default DownloadsScreen
