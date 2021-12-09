import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const Category = (props) => {
  const [movies, setMovies] = useState([]);

  const API_HEADER = "https://api.themoviedb.org/3";

  const img_base_url = "https://image.tmdb.org/t/p/original/";

  const { title, url, navigation } = props;

  const getMoviesData = () => {
    return fetch(`${API_HEADER}${url}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          marginVertical: 5,
        }}
      >
        {title}
      </Text>
      <ScrollView horizontal showHorizontalScrollIndicator={false}>
        {movies &&
          movies.map((movie, index) => (
            <TouchableOpacity
              key={index}
              style={{ marginHorizontal: 5 }}
              onPress={() =>
                navigation.push("MovieDetailScreen", {
                  name:
                    movie.title || movie.original_title || movie.original_name,
                  id: movie.id,
                })
              }
            >
              <Image
                source={{ uri: `${img_base_url}${movie.poster_path}` }}
                style={{ width: 100, height: 140, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default Category;
