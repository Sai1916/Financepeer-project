import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'

const Category = (props) => {
    const [movies,setMovies] = useState([]);

    const API_HEADER = "https://api.themoviedb.org/3";

    const img_base_url="https://image.tmdb.org/t/p/original/";

    const navigation = useNavigation();

    const getMovieData = async () => {
        
        return await fetch(`${API_HEADER}${props.url}`)
            .then(res => res.json())
            .then(data => setMovies(data.results) )
    }

      useEffect(() => {
        getMovieData()
      },[])

    console.log(props.title)
    console.log(movies)

    return (
        <View style={{marginHorizontal:5,marginVertical:10}}>
            <Text style={{color:"white",fontSize:20,fontWeight:"bold",marginVertical:5}}>{props.title}</Text>
            <ScrollView horizontal showHorizontalScrollIndicator={false}>
                {movies && movies.map((movie,index) => (
                    <TouchableOpacity key={index} style={{marginHorizontal:5}} onPress={() => navigation.push('MovieDetailScreen',{
                        name: movie.title || movie.original_title || movie.original_name,
                        poster: movie.poster_path,
                        backdrop: movie.backdrop_path,
                        genre: movie.genre_ids,
                        id: movie.id,
                        overview: movie.overview,
                        popularity: movie.popularity,
                        date: movie.release_date,
                        rating: movie.vote_average,
                    })}>
                        <Image source={{uri: `${img_base_url}${movie.poster_path}`}} style={{width:100,height:140,borderRadius:10}}/>
                    </TouchableOpacity>
                ))}   
            </ScrollView>
        </View>
    )
}

export default Category
