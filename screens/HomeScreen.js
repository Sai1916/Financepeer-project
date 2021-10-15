import React from 'react'
import { StyleSheet, Text, View,ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Movies from '../components/Movies'

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ImageBackground  
                    source={{
                        uri: "https://image.tmdb.org/t/p/original/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg"
                    }}
                    style={{width:'100%',height:300,resizeMode:'cover'}}
                    >
                    <View style={{height:"100%",width:"100%",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",bottom:20}}>
                        <Text style={{fontSize:30,color:"white",marginVertical:20}}>Wonder Woman</Text> 
                        <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:60}}>
                            <TouchableOpacity activeOpacity={0.5} style={{backgroundColor:"black",padding:10,borderRadius:10}}><Text style={{fontSize:16,color:'white'}}>PLAY</Text></TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5} style={{backgroundColor:"black",padding:10,borderRadius:10}}><Text style={{fontSize:16,color:'white'}}>TRAILER</Text></TouchableOpacity>  
                        </View>
                    </View>
                </ImageBackground>
                <Movies navigation={navigation}/>
            </ScrollView>
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
