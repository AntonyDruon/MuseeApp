import { StyleSheet, Text, View, FlatList,TouchableHighlight,Image } from 'react-native'
import React, { useEffect,useState } from 'react'

const GestionOeuvre = () => {

    const [resultats , setResultats] = useState([]);

useEffect(function(){
  fetch("http://10.0.2.2:4003/all")
  .then(reponse => reponse.json())
 
  .then(oeuvre => setResultats(oeuvre));
  
  
}, [])

  return (
    <View style={{backgroundColor : "#B4B8C5", marginBottom : 5,marginTop : 5}}>
        
            <View style={{ width : "45%"}}>
                <Text style={{color : "#a4243b", fontWeight :"bold"}}>Gestion des Oeuvres : </Text>
            </View>
           
                <TouchableHighlight style={{backgroundColor : "green", borderRadius : 15, width : "40%",alignSelf : "flex-end",justifyContent : "center", alignItems : "center",marginRight : 5,height : 39}}>
                    <Text style={{ fontWeight :"bold",color  :"white"}}>Ajouter</Text>
                </TouchableHighlight>
           
      
        
          <View style={{ height : 300}}>
          
            <FlatList data={resultats} renderItem={({item}) => 
            
              <View style={styles.placementOeuvre}>
                <TouchableHighlight>
                  <Image source={{uri : item.image}} style={styles.image} />
                </TouchableHighlight>
                <View style={{justifyContent:"center",marginLeft : 5 ,width : "30%"}}>
                  <Text style={{fontSize : 20, fontWeight : "bold",color : "#a4243b"}}>{item.nom}</Text>
                </View>
                <TouchableHighlight style={{marginLeft : 5 ,width : "22%",justifyContent :"center", alignItems : "center", backgroundColor : "red"}}>
                  <Text style={{fontSize : 25, fontWeight : "bold",color : "#a4243b"}}>X</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{marginLeft : 5 ,width : "20%",justifyContent :"center", alignItems : "center", backgroundColor : "yellow"}}>
                  <Text style={{fontSize : 15, fontWeight : "bold",color : "#a4243b"}}>Modifier</Text>
                </TouchableHighlight>
                
                
              </View>
              
            }/>
          
          </View>
        
    </View>
  )
}

export default GestionOeuvre

const styles = StyleSheet.create({
    placementOeuvre : {
        flexDirection : "row",
        marginLeft : 10,
        marginRight : 10,
        marginTop : 5,
        borderWidth : 0.4,
        
      },
    
      image : {
        backgroundColor : "white",
        width : 100,
        height : 50
    
      }
    })
