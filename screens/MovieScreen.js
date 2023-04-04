import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Movie from '../components/MovieCard';

const MovieScreen = ({ navigation }) => {
    const [movies, setMovies] = useState([]);
    const term = 'marvel';
    const limit = 25;

    const fetchMovies = async () => {
        try {
            let { status, data } = await axios.get(`https://itunes.apple.com/search?term=${term}&limit=${limit}`);
            console.log(status);
            setMovies(data.results);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    // console.log(movies);
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {movies.map((movieItem) => (
                    <Movie key={movieItem.trackId} movie={movieItem} navigation={navigation}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})

export default MovieScreen;
