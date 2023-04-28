import { StyleSheet, Text, View , TouchableHighlight, Image, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProfilContexts } from "../Contexts/ProfilContexts"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import GestionOeuvre from '../GestionOeuvre';
import GestionUsers from '../GestionUsers';
const Profil = ({navigation}) => {
    const {profil,logout,JWT} = useContext(ProfilContexts)

    function deconnexion(){
        logout()
        navigation.navigate("home")
      }
  return (
    <View style={styles.container}>
      
      
          <View style={{ width : "100%"}}>
                    <Image style={{width : 250, height : 200, alignSelf : "center"}}source={require("../../assets/LogoMusee.png")} />
                </View>
          
          <View style={styles.placementTitre} >
              <Text style={styles.titre}>Bienvenue</Text>
          </View>
          
            <GestionOeuvre/>
            <GestionUsers/>
          
          
          {/** https://pictogrammers.com/library/mdi/ */}
        
          <TouchableHighlight onPress={() => deconnexion()} style={styles.touchable} activeOpacity={0.6} underlayColor="#9c92a3">
                    <Text style={styles.text2}>Deconnexion</Text>
            </TouchableHighlight>
        
    </View>
  )
}

export default Profil

const styles = StyleSheet.create({
    container : {
        
        // flexDirection : "row",
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: '#ebebeb',
        flex : 1
    },
    titre : {
      // marginTop : 25,
        fontSize : 30,
       
    },
    placementTitre : {
      width : "100%",
      height : 50,
      justifyContent : "center",
      alignItems : "center"
    },
    touchable: {
      height: 39,
      width: 150,
      borderRadius: 15,
      
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: '#a4243b',
      elevation : 2,
      
    },
text2: {
  color: "#ebebeb",
  fontWeight : "bold",
  alignSelf : "center"
}
})