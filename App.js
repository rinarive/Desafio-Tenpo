import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Home from './Components/Home'
import ProgressBar from './Components/ProgressBar'




import Transaction from './Components/Transaction';
import Home from './Components/Home';


const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({    

    'Gotham-Bold' : require('./assets/Fonts/Gotham-Bold.ttf'),
    'Gotham-Book' : require('./assets/Fonts/Gotham-Book.ttf'),
    'Gotham-Medium' : require('./assets/Fonts/Gotham-Medium.ttf'),

  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Retiro de plata' }}
      />
      <Stack.Screen name="Transaction" component={Transaction} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
}







