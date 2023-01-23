import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Chat from '../screens/Chat';
import Message from '../components/Message'
const ChatNavigation = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation()
    const route = useRoute()
    
     useEffect(() => {
            const routeName = getFocusedRouteNameFromRoute(route);
            if("Message".includes(getFocusedRouteNameFromRoute(route))){
              navigation.setOptions({tabBarStyle: {display: 'none'}});
             } else {
             navigation.setOptions({tabBarStyle: {display: 'flex'}});
            }
        }, [navigation, route]);
    return (
      
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Message" component={Message}  />
            
    </Stack.Navigator>
  )
}

export default ChatNavigation