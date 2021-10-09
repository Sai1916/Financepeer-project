import React from 'react'
import { ScrollView } from 'react-native';
import requests from '../axios/requests';
import Category from './Category';

const Movies = () => {
   
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {requests.map( ({title,url},index) => (
                <Category key={index} title={title} url={url}/>
            ))}
        </ScrollView>
    )
}

export default Movies
