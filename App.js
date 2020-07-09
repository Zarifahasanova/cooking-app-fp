import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './navigations/AppNavigation';
import { AppLoading } from 'expo'
import { Provider } from 'react-redux';

import store from './redux'
import { loadFonts } from './style/fonts'
export default function App() {
  
  const [loaded, setLoaded] = useState(false)
  
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
    <AppContainer />  
    </Provider>
     
  );
}
