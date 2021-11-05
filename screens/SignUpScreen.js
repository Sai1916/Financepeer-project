import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput,Alert } from 'react-native'
import { firebase,db } from '../firebase'

const SignUpScreen = ({navigation}) => {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const SignUp = async() => {
            const authUser = await firebase.auth().createUserWithEmailAndPassword(email,password)
            console.log('Account creation Successful',email,password,username);

            db.collection("users").add({
                userId: authUser.user?.uid,
                username: username,
                email: authUser.user?.email,
            })
    }

    return (
        <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
            <TextInput placeholder="Username" required={true} value={username} textContentType="username" onChangeText={(val) => setUsername(val)} style={{backgroundColor:"lightgray",color:"black",height:40,width:"90%",marginHorizontal:20,marginVertical:10}} />
            <TextInput placeholder="Email" required={true} value={email} textContentType="emailAddress" onChangeText={(val) => setEmail(val)} style={{backgroundColor:"lightgray",color:"black",height:40,width:"90%",marginHorizontal:20,marginVertical:10}} />
            <TextInput placeholder="Password" required={true} value={password} textContentType="password" onChangeText={(val) => setPassword(val)} secureTextEntry={true} style={{backgroundColor:"lightgray",color:"black",height:40,width:"90%",marginHorizontal:20,marginVertical:10}} />
            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'space-between'}}>
                <Text style={{color:'white'}}>Already had an account?</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{color:'white'}}>Login</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                onPress={SignUp}
                style={{padding:12,backgroundColor:'white',borderRadius:20}}
            >
                <Text style={{color: 'black',fontSize:22,fontWeight: 'bold'}}>SignUp</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUpScreen
