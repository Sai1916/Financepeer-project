import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput,Alert } from 'react-native'
import { firebase } from '../firebase'

const LoginScreen = ({navigation}) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const Login = async() => {
            await firebase.auth().signInWithEmailAndPassword(email,password)
                .then(() => {
                    console.log('Login Successful',email,password);
                }).catch(error => 
                    Alert.alert(error.message)
                );
    }

    return (
        <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
            <View style={{flexDirection:'column',width:'100%',paddingHorizontal:20,backgroundColor:'transparent'}}>
                <TextInput placeholder="Email" required={true} value={email}  textContentType="emailAddress" onChangeText={(val) => setEmail(val)} style={{backgroundColor:"white",color:"black",height:40,marginVertical:10}} />
                <TextInput placeholder="Password" required={true} value={password}  textContentType="password" onChangeText={(val) => setPassword(val)} secureTextEntry={true} style={{backgroundColor:"white",color:"black",height:40,marginVertical:10}} />
                <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'space-between'}}>
                    <Text style={{color:'white'}}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                        <Text style={{color:'white'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={Login}
                    style={{padding:12,backgroundColor:'white',borderRadius:20,alignItems:'center',justifyContent:'center',marginHorizontal:60}}
                >
                    <Text style={{color: 'black',fontSize:22,fontWeight: 'bold'}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen
