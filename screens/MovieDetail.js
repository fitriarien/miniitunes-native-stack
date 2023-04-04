import React, { useRef, useState, useEffect } from 'react';
import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video, ResizeMode } from 'expo-av';
import { Octicons } from '@expo/vector-icons';

const MovieDetail = ({ navigation, route }) => {
    const { title, poster, contentRating, descriptions, trailer } = route.params;
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [isMuted, setIsMuted] = useState(false);

    const toggleMute = async () => {
        const newIsMuted = !isMuted;
        await video.current.setIsMutedAsync(newIsMuted);
        setIsMuted(newIsMuted);
    };

    // console.log(status);

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            video.current.pauseAsync();
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.movie}>
                <View style={styles.coverArea}>
                    <Image source={{uri: poster}} style={styles.cover}/>
                </View>
                <View style={styles.movieInfo}>
                    <Text style={[styles.info, styles.movieTitle]}>{title}</Text>
                    <Text style={styles.movieRating}>{contentRating}</Text>
                </View>
            </View>
            <View style={styles.trailer}>
                <View style={styles.trailerHeader}>
                    <Text style={styles.movieDetailTitle}>Watch Trailer</Text>
                    <View style={styles.icon}>
                        <TouchableOpacity style={styles.muteIcon} onPress={toggleMute}>
                            {isMuted ?
                                <Octicons name="mute" size={24} color="black" /> :
                                <Octicons name="unmute" size={24} color="black" />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <Video
                    ref={video}
                    style={styles.video}
                    source={{uri: trailer}}
                    useNativeControls={true}
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping={false}
                    onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                />
            </View>
            <View>
                <Text style={styles.movieDetailTitle}>Synopsis</Text>
                <Text style={styles.movieDesc}>{descriptions}</Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    movie: {
        flexDirection: 'row',
        marginBottom: 5
    },
    coverArea: {
        paddingLeft: 20,
        paddingRight: 10,
        paddingVertical: 5
    },
    cover: {
        width: 90,
        height: 135,
        borderRadius: 2,
    },
    movieInfo: {
        padding: 2,
        width: '55%'
    },
    info: {
        color: 'black',
        padding: 3,
    },
    movieTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 7,
    },
    movieRating: {
        fontSize: 15,
        fontWeight: '500',
        paddingVertical: 3,
        borderRadius: 3,
        backgroundColor: '#fff',
        color: '#000',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#ccc',
        textAlign: 'center',
        width: 70,
    },
    trailerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    movieDetailTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    video: {
        width: "100%",
        height: 180,
        marginVertical: 10
    },
    icon: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    movieDesc: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        textAlign: 'justify',
    }
})

export default MovieDetail;
