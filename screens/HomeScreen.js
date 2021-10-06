import React from 'react'
import { StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={{
                    uri: "https://image.tmdb.org/t/p/original//keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg"
                }}
                style={{width:'100%',height:400,resizeMode:'cover'}}
            >
                <View style={{height:"100%",width:"100%",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",bottom:20}}>
                    <Text style={{fontSize:"20",color:"white"}}>Wonder Woman</Text>
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity style={{backgroundColor:"lightgray",padding:10,borderRadius:10}}><Text style={{color:'black'}}>Play</Text></TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"lightgray",padding:10,borderRadius:10}}><Text style={{color:'black'}}>Trailer</Text></TouchableOpacity>  
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color:"white"
      },
})
