import { StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native'
import React, {useEffect, useState} from 'react'
import { FlatList } from 'react-native'
import { OeuvreContext } from './Contexts/OeuvreContext'

const ListeMusee = (navigate) => {


  const [recherche , setRecherche] = useState("")
  const [resultats , setResultats] = useState([]);

useEffect(function(){
  fetch("http://10.0.2.2:4003/all")
  .then(reponse => reponse.json())
  .then(oeuvre => setResultats(oeuvre));
  
}, [])

  return (
    <View>
      <View style={{ height : 50, justifyContent : "center", width : "95%", alignSelf : "center"}}>
            <Text style={{color : "#a4243b"}}>Liste des consoles dans le musée: </Text>
      </View>
        
          <View style={{marginBottom : 100, height : 400}}>
          
            <FlatList data={resultats} renderItem={({item}) => 
            
              <View style={styles.placementOeuvre}>
                <TouchableHighlight>
                  <Image source={{uri : item.image}} style={styles.image} />
                </TouchableHighlight>
                <View style={{justifyContent:"center",alignItems:"center",width : 200}}>
                  <Text style={{fontSize : 20, fontWeight : "bold",color : "#a4243b"}}>{item.nom}</Text>
                </View>
              </View>
              
            }/>
          
          </View>
        
    </View>
  )
}

export default ListeMusee

const styles = StyleSheet.create({
  
  placementOeuvre : {
    flexDirection : "row",
    marginLeft : 10,
    marginRight : 10,
    marginTop : 15,
    borderWidth : 0.3
  },

  image : {
    backgroundColor : "white",
    width : 200,
    height : 150

  }
})