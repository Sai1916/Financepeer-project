import React, { useState } from 'react'
import { Text, SafeAreaView, TextInput, View } from 'react-native'

const SearchScreen = () => {
    const [search,setSearch] = useState('')

    

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{backgroundColor:"white",paddingHorizontal:10,paddingVertical:5,marginHorizontal:10,marginVertical:10,borderRadius:10}}>
                <TextInput placeholder="Search Movie" value={search} onChangeText={(e) => setSearch(e)}/>
            </View>
        </SafeAreaView>
    )
}
console.log(search)

export default SearchScreen

