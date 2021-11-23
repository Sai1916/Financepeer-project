import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, TextInput, View, FlatList } from 'react-native'
import { API_KEY } from '../axios/requests'
import SearchItem from '../components/SearchItem'

const SearchScreen = () => {
    const [search,setSearch] = useState('')
    const [resultMovies,setResultMovies] = useState([])
    console.log(search)
    console.log(resultMovies)


    const API_HEADER = "https://api.themoviedb.org/3";

    const getMovieData = () => {
        return fetch(`${API_HEADER}/search/movie?api_key=${API_KEY}&query=${search}`)
            .then(res => res.json())
            .then(data => setResultMovies(data.results) )
    }

      useEffect(() => {
        getMovieData()
      },[search])

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{backgroundColor:"white",paddingHorizontal:10,paddingVertical:5,marginHorizontal:10,marginVertical:10,borderRadius:10}}>
                <TextInput placeholder="Search Movie" value={search} onChangeText={val => setSearch(val)} />
            </View>
            {resultMovies?.length > 0 ? (
                    <FlatList 
                        data={resultMovies}
                        renderItem={({item}) => item.title!=="UNdefined" ? (<SearchItem image={item?.poster_path} id={item.id} name={item.name || item.original_name || item.original_title}/>) : (<Text>No Results</Text>)}
                        keyExtractor={item => item.id.toString()}
                        numColumns={2}
                        contentContainerStyle={{alignItems: "center",marginVertical:10}}
                    />
                ) : (
                    <Text>No Results</Text>
                )
            }
        </SafeAreaView>
    )
}

export default SearchScreen