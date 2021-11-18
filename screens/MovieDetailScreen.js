import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import {MaterialIcons,MaterialCommunityIcons} from 'react-native-vector-icons'
import YoutubePlayer from "react-native-youtube-iframe";

const MovieDetailScreen = ({navigation,route}) => {

    const {name, id} = route.params;

    const [movie,setMovie] = useState({})
    const [video,setVideo] = useState({})
    const [playTrailer,setPlayTrailer] = useState(false)

    const API_HEADER = "https://api.themoviedb.org/3";
    const API_KEY = "796582a8773b51fe608b5f4f0eef6d20";

    const getMovieData = () => {
        return fetch(`${API_HEADER}/movie/${id}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }

    const getMovieVideoData = () => {
        return fetch(`${API_HEADER}/movie/${id}/videos?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setVideo(data?.results[0]?.key))
    }
     
    useEffect(() => {
        getMovieData();
        getMovieVideoData();
    },[])

    const playTrailerHandler = () => {
        setPlayTrailer(!playTrailer);
    }
    
    const {genres,spoken_languages} = movie

    console.log(movie)
    console.log(video)
    const img_base_url="https://image.tmdb.org/t/p/original/";

    return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{position:"absolute",marginTop:40,zIndex:100,marginLeft:20}}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                </TouchableOpacity>
                { playTrailer ? (
                    <View style={{marginTop:40}}>
                        <YoutubePlayer
                            videoId={video}
                            play={true}
                            height={200}
                        />
                    </View>
                    ) :
                    (
                        <View style={{position:"relative"}}>
                            <Image source={{uri: `${img_base_url}${movie.backdrop_path}`}} style={{width:"100%",height:240,resizeMode:"cover"}}/>
                            <Text style={{fontSize:24,fontWeight:"bold",color:"white",position:"absolute",bottom:10,marginHorizontal:14}}>{name}</Text>
                        </View>
                    )
                }
                <View style={{marginHorizontal:10,marginVertical:6}}>
                    <View style={{flexWrap:"wrap",flexDirection:"row"}}>
                        {!!movie.tagline && (
                            <Text style={{color:"lightgray",fontSize:18,marginHorizontal:2}}>{movie.tagline}</Text>
                        )}
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-around",marginVertical:10}}>
                        <TouchableOpacity style={{padding:6,backgroundColor:"#c5e3e3",borderRadius:10,flexDirection:"row",alignItems:"center"}} onPress={playTrailerHandler}>
                            <MaterialCommunityIcons name="movie-filter" size={28} color="black"/>
                            <Text style={{color:"black",fontSize:18,marginHorizontal:4,fontWeight:"bold"}}>{playTrailer ? "Stop Trailer" : "Play Trailer"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:6,backgroundColor:"#c5e3e3",borderRadius:10,flexDirection:"row",alignItems:"center"}}>
                            <MaterialCommunityIcons name="movie-open-outline" size={28} color="black"/>
                            <Text style={{color:"black",fontSize:18,marginHorizontal:4,fontWeight:"bold"}}>Watch Movie</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{color:"#acadad",fontSize:18}}>{movie.release_date}{'     '}{movie.status}</Text>
                    <ScrollView horizontal style={{flexDirection:"row"}}>
                        <Text style={{color:"white",fontSize:18}}>Genre:</Text>
                        {genres?.map((genre,index) => (
                            <Text key={index} style={{color:"#acadad",fontSize:18,marginHorizontal:5}}>{genre.name}</Text>
                            ))}
                    </ScrollView>
                    <ScrollView horizontal style={{flexDirection:"row"}}>
                        <Text style={{color:"white",fontSize:16}}>Languages:</Text>
                        {spoken_languages?.map((lang,index) => (
                            <Text key={index} style={{color:"#acadad",fontSize:16,marginHorizontal:5}}>{lang.english_name}</Text>
                            ))}
                    </ScrollView>
                    <View style={{flexDirection:"column"}}>
                        <Text style={{color:"white",fontSize:18}}>Overview:</Text>
                        <Text style={{color:"#acadad",fontSize:18}}>{movie.overview}</Text>
                    </View>
                    <Text style={{color:"white",fontSize:16}}>Vote Average: {movie.vote_average}</Text>
                    <Text style={{color:"white",fontSize:16}}>Duration: {movie.runtime}min</Text>
                </View>
            </ScrollView>
    )
}

export default MovieDetailScreen
