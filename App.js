import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
   <NavigationContainer>
    <StackNavigator/>
   </NavigationContainer>

  );
}


