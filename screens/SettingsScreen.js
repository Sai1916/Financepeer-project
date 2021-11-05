import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Alert } from 'react-native'
// import {useUpdateTheme} from '../context/ThemeProvider'
import {MaterialIcons} from 'react-native-vector-icons'
import {firebase} from '../firebase'

const SettingsScreen = () => {

    const data =[
        {
            "text":"View Profile"
        },
        {
            "text":"Change Password"
        },
        {
            "text":"Switch Account"
        },
        {
            "text":"Delete Account"
        },
        {
            "text":"Support and Help"
        },
        {
            "text":"Logout"
        },
    ];

    const signOutHandle = (text) => {
        try{
            if(text === "Logout"){
                firebase.auth().signOut();
            }
            else{
                Alert.alert(text);
            }
        }
        catch (error) {
            Alert.alert(error.message)
        }
    }    

    return (
        <View style={styles.container}>
            {data.map((val,index) => (
                <View key={index} style={{borderBottomWidth:0.3,borderBottomColor:"lightgray",padding:10}}>
                    <TouchableOpacity onPress={() => signOutHandle(val.text)} style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <Text style={{color:"white",fontSize:18}}>{val.text}</Text>
                        <MaterialIcons name="arrow-forward-ios" size={18} color="white" />
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
})
