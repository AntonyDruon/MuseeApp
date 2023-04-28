import { StyleSheet, Text, View , TextInput , Button,TouchableHighlight, Image } from 'react-native'
import React , {useState, useContext} from 'react'
import { ProfilContexts } from '../Contexts/ProfilContexts';


 
  const Connexion = ({navigation}) => {
 
    const { login , logout, setJWT, JWT } = useContext(ProfilContexts);
  
    const [email , setEmail] = useState("toto@gmail.com")
    const [password , setPassword] = useState("Paris12345")
    const [message , setMessage] = useState("")
  
     function authentification(){
      const identifiants = {
        email : email ,
        password : password

      }
      fetch("http://10.0.2.2:4003/login", {method : "post", body : JSON.stringify(identifiants), headers : {"content-type" : "application/json"}})
      .then(reponse=>reponse.json())
      .then(data=>{
        // console.log(data)
        // const verif = login(identifiants)
        const verif = data.token ? true : false
        //console.log(profil)
        if(verif){ // si je n'ai pas de message = "" => je peux vider le formulaire
          // vider le formulaire et le message et redirection avec la page de connexion
          setEmail("")
          setPassword("")
          setMessage("")
          setJWT(data.token)
          navigation.navigate("home")
        }else {
          // sinon j'affiche un message 
          setMessage("identifiants invalides")
        }
      })
      //console.log(identifiants)
     
    }
  
    return (
      <View style={styles.container}>
        { JWT.length > 0
          ? 
           <Button  onPress={() => logout()} title="deconnexion" />
          : 
          <View>
            <View style={{ width : "100%"}}>
                <Image style={{width : 250, height : 200, alignSelf : "center"}}source={require("../../assets/LogoMusee.png")} />
            </View>
              
               
              <View style={{flexDirection : "row", justifyContent : "center", marginBottom : 15}}>
                <Text style={{marginLeft : 5}}>Vous voulez voir vos consoles favorites?</Text>
                <Text style={{marginLeft : 5,textDecorationLine: 'underline', color : "#a4243b", fontWeight :"bold"}}>Connectez-vous</Text>
              </View>
                
              <View>
                <TextInput placeholder='email' style={styles.input} onChangeText={(text) => setEmail(text)} value={email}/>
                <TextInput placeholder='password' style={styles.input} onChangeText={(text) => setPassword(text)} value={password} />
                <TouchableHighlight onPress={() => authentification()} style={styles.touchable} activeOpacity={0.6} underlayColor="#9c92a3">
                  <Text style={styles.text2}>Connexion</Text>
                </TouchableHighlight>
                {message.length > 0  && <Text style={styles.alert}>{message}</Text>}
              </View>

              <View style={{flexDirection : "row", justifyContent : "center", marginTop : 15}}>
                <Text style={{marginLeft : 5}}>Tu n'as pas de compte?</Text>
                <Text style={{marginLeft : 5,textDecorationLine: 'underline', color : "#a4243b", fontWeight :"bold"}}>Inscription</Text>
              </View>
             

              
              
            
          </View>
            
        }
      </View>
    )
  }
  export default Connexion



const styles = StyleSheet.create({
    input : {
        
        padding : 10 ,
        borderColor : "#a4243b",
        backgroundColor : "white",
        marginBottom : 10,
        borderRadius : 15,
        width : "80%",
        alignSelf : "center",
        elevation : 3,
    },
    container : {
        flex : 1,
        // justifyContent : "center",
        backgroundColor: '#ebebeb',
    },
    touchable: {
            height: 39,
            width: 150,
            borderRadius: 15,
            marginTop : 15,
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