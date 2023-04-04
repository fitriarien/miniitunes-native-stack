import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieScreen from '../screens/MovieScreen';
import MovieDetail from '../screens/MovieDetail';

const Stack = createNativeStackNavigator();

const MovieNavigation = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name='Movie' component={MovieScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Detail' component={MovieDetail}/>
        </Stack.Navigator>
    );
}

export default MovieNavigation;
