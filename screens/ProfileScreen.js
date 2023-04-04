import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FontAwesome style={styles.userProfile} name="user-circle" size={80} color="gray" />
            <Text style={styles.userName}>username</Text>
            <View style={styles.detail}>
                <Text style={styles.detailText}>Profile Details</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    userProfile: {
        paddingBottom: 10,
        alignSelf: 'center'
    },
    userName: {
        fontSize: 18,
        fontWeight: '600',
        paddingBottom: 10,
        alignSelf: 'center'
    },
    detail: {
        borderTopColor: '#ccc',
        borderTopWidth: 2,
        paddingVertical: 10
    },
    detailText: {
        fontSize: 15
    }
})

export default ProfileScreen;
