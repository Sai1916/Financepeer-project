import React from 'react'
import { ScrollView } from 'react-native';
import requests from '../axios/requests';
import Category from './Category';

const Movies = ({navigation}) => {
   
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {requests.map( ({title,url},index) => (
                <Category key={index} title={title} url={url} navigation={navigation}/>
            ))}
        </ScrollView>
    )
}

export default Movies
