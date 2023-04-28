import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React , { useContext } from 'react'


import { ProfilContextsProvider } from './composants/Contexts/ProfilContexts';
import Accueil from './composants/Menu/Accueil';
import Menu from './composants/Menu/Menu';

import { ProfilContexts } from './composants/Contexts/ProfilContexts';




export default function App() {

  
  
  
  return (
    <View style={styles.container}>
     <ProfilContextsProvider>
        <Menu/>
        <StatusBar style="auto" />
      </ProfilContextsProvider>
    </View>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    marginTop : 50
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
