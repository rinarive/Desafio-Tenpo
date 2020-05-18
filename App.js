import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Home from './Components/Home'
import ProgressBar from './Components/ProgressBar'




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
      <>
      <ProgressBar />  
      
      </>
    )
  }
}
