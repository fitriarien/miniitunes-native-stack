import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import MovieNavigation from './navigation/MovieNavigation';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Movies' 
          component={MovieNavigation}
          options={{
            headerShown: false,
            tabBarIcon: () => <MaterialCommunityIcons name="movie-open" size={24} color="black" />
          }}
        />
        <Tab.Screen
          name='Profile' 
          component={ProfileScreen}
          options={{
            headerShown: true,
            tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
