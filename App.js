import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './navigations/AppNavigation';
import { AppLoading } from 'expo'
import { Provider } from 'react-redux';
<<<<<<< HEAD

import store from './redux'
import { loadFonts } from './style/fonts'
export default function App() {
  
  const [loaded, setLoaded] = useState(false)
  
=======
import store from './redux'
import { loadFonts } from './style/fonts'
export default function App() {

  const [loaded, setLoaded] = useState(false)

>>>>>>> 7a6ed498a0b81bf904c19d664cbc073b777228c7
  if (!loaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => {setLoaded(true)}}
        onError={() => {console.log('Font loading error')}}
      />
    )
  }
  return (
    <Provider store={store}>
<<<<<<< HEAD
    <AppContainer />  
    </Provider>
     
=======

     <AppContainer />
    </Provider> 
>>>>>>> 7a6ed498a0b81bf904c19d664cbc073b777228c7
  );
}
