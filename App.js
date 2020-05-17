import React from 'react';
import Home from './components/Home'

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';


export default function App() {


  const [fontsLoaded] = useFonts({    

    'Gotham-Bold' : require('./assets/Fonts/Gotham-Bold.ttf'),
    'Gotham-Book' : require('./assets/Fonts/Gotham-Book.ttf'),
    'Gotham-Medium' : require('./assets/Fonts/Gotham-Medium.ttf'),


  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return  (
      <Home />  
    )
  }
}