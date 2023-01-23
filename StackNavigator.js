
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute, useNavigation, useRoute } from '@react-navigation/native';
import Home from './screens/Home'
import Chat from './screens/Chat'
import Profile from './screens/Profile';
import ChatNavigation from './navigation/ChatNavigation';




const Stack = createBottomTabNavigator();


const StackNavigator = () => {

  const navigation = useNavigation()
  
 
  return (

    
   
<Stack.Navigator 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        
        
        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor;
          let iconSize = 24
          
          if (route.name === 'Home') {

            iconName = focused
              ? 'home'
              : 'home-outline';
            iconColor = focused
              ? '#0078E9'
              : "grey"
          } else if (route.name === 'Profile') {

            iconName = focused ? 'person' : 'person-outline';
            iconColor = focused
              ? '#0078E9'
              : "grey"
          }
          else if (route.name === 'Chat') {

            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            iconColor = focused
              ? '#0078E9'
              : "grey"
          }
          else if (route.name === 'Login') {

            iconName = focused ? 'person' : 'person-outline';
            iconColor = focused
              ? '#0078E9'
              : "black"
          }
          else if (route.name === 'Signup') {

            iconName = focused ? 'person-add' : 'person-add-outline';
            iconColor = focused
              ? '#0078E9'
              : "black"
          }
          else if (route.name === 'Shorts') {
            iconSize = 28
            iconName = focused ? 'play-circle' : 'play-circle-outline';
            iconColor = focused
              ? '#FF7134'
              : "grey"
            
          }
          else if (route.name === 'Notifications') {
            
            iconName = focused ? 'notifications' : 'notifications-outline';
            iconColor = focused
              ? '#0078E9'
              : "grey"
          }
         

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
          ;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
           
          <Stack.Screen name="Home" component={Home}  />
          <Stack.Screen name="Chat" component={ChatNavigation} />
          <Stack.Screen name="Profile" component={Profile} />        
          </Stack.Navigator>
   
  )
}

export default StackNavigator