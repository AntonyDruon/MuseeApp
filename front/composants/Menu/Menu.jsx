import { StyleSheet, Text, View,Image, } from 'react-native'
import React , { useContext } from 'react'
import Accueil from './Accueil';
import Profil from './Profil'
import Connexion from './Connexion';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfilContexts } from '../Contexts/ProfilContexts';

const menu = createBottomTabNavigator()

const Menu = () => {
    const { profil, JWT } = useContext(ProfilContexts);
  return (
    
       <NavigationContainer>
            <menu.Navigator screenOptions={{
              tabBarActiveBackgroundColor : "#A4243B",
              headerShown: false,
              tabBarShowLabel : false
              
          
            }}>
            <menu.Screen name="home" component={Accueil} 
            options={{
              tabBarIcon : function(){
                return <MaterialCommunityIcons name="home" color="black" size={40} />
              }
            }} />
            
          
            { JWT.length > 0
            ?
            <menu.Screen name="Profil" component={ Profil } options={{
            tabBarIcon : function(){
              return <MaterialCommunityIcons name="account" color="black" size={40} />
            }
          }}/>
            :
            <menu.Screen name="connexion-menu" component={ Connexion } options={{
              tabBarIcon : function(){
                return <MaterialCommunityIcons name="lock-open" color="black" size={40} />
              },
              title : "gestion de votre profil"
            
            }}/>
        }
            
          </menu.Navigator>
      </NavigationContainer>
   
  )
}

export default Menu

const styles = StyleSheet.create({})