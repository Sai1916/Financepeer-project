import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {useUpdateTheme} from '../context/ThemeProvider'

const SettingsScreen = () => {

    // const toggleTheme= useUpdateTheme()

    const [text,setText] = useState('Light Mode');


    return (
        <View style={styles.container}>
            <TouchableOpacity 
                // onPress={() => toggleTheme}
                style={{backgroundColor:"skyblue",margin:10,padding:10,borderRadius:20}}
            >
                <Text style={{color:"white"}}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
})
