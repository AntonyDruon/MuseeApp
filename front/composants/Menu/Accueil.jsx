import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'

import React, { useContext } from 'react'
import  ListeMusee  from '../ListeMusee';
import { ProfilContext } from '../Contexts/ProfilContexts';

const Accueil = () => {
    
  return (
   
      <View style={styles.container}>
        <View style={{  width : "100%", height : 200, justifyContent : "center", alignItems:"center"}}>
            <Image style={{width : 250, height : 250}}source={require("../../assets/LogoMusee.png")} />
        </View>
        <View>
            <Text style={{alignSelf : "center", marginTop : 15, marginBottom : 15, fontSize : 20,fontWeight : "bold", color : "#a4243b"}}>Bienvenue dans le musée de la console!</Text>
            <Text style={{marginLeft : 8}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates quos eius, 
              sit fugiat doloribus iusto. Optio et fugiat sapiente modi, reprehenderit vel dolor sequi.</Text>
        </View>
        <ListeMusee/>
        
        
        
      </View>
   
  )
}

export default Accueil

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebeb',
       
        // alignItems: 'center',
        // justifyContent: 'center',
      },
})