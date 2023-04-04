import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const Movie = ({ movie, navigation }) => {
    const date = new Date(movie.releaseDate);
    const formattedDate = date.toLocaleDateString('en-US', { 
        day: 'numeric',
        month: 'short',
        year: 'numeric' 
    });

    const goToDetails = () => {
        navigation.navigate('Detail', {
            title: movie.trackName,
            poster: movie.artworkUrl100,
            contentRating: movie.contentAdvisoryRating,
            descriptions: movie.longDescription,
            trailer: movie.previewUrl
        })
    }

    return (
        <SafeAreaView style={styles.movieList}>
            <View style={styles.coverArea}>
                <Image source={{uri: movie.artworkUrl100}} style={styles.cover}/> 
            </View>
            <View style={styles.movieInfo}>
                <Text style={[styles.info, styles.movieTitle]}>{movie.trackName}</Text>
                <Text style={[styles.info, styles.movieGenre]}>{movie.primaryGenreName}</Text>
                <Text style={[styles.info, styles.movieReleaseDate]}>Released on {formattedDate}</Text>
            </View>
            <TouchableOpacity style={styles.navigateSign} onPress={goToDetails}>
                <AntDesign name="rightcircleo" size={24} color="black" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    movieList: {
        flexDirection: 'row',
    },
    coverArea: {
        paddingLeft: 15
    },
    cover: {
        width: 90,
        height: 120,
        borderRadius: 2,
    },
    movieInfo: {
        paddingHorizontal: 5,
        width: '55%'
    },
    info: {
        color: 'black',
        padding: 2,
    },
    movieTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    movieGenre: {
        fontSize: 16
    },
    movieReleaseDate: {
        fontSize: 15
    },
    navigateSign: {
        alignSelf: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5
    }
})

export default Movie;
