import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  StyleSheet, StatusBar
} from "react-native";
export default function Login() {
  return(
<View style={styles.container}>
  
<TextInput style={styles.title} >Login</TextInput>
<StatusBar backgroundColor="#18c9bb" barStyle="light-content"></StatusBar>
<TextInput style={styles.inputBox} placeholder="Email" placeholderTextColor="#a3f0ea"></TextInput>
<TextInput style={styles.inputBox} placeholder="Password" placeholderTextColor="#a3f0ea"
secureTextEntry={true}></TextInput>
<TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}> Signup</Text></TouchableOpacity>
    <View style={styles.loginText}>
    <Text style={styles.signinText}>Already have an account? </Text>
    <Text style={styles.signinButton}>Log in</Text>
</View>
</View>



  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "#d1eff0",
    marginTop:290
  },
  title:{
      fontSize:30,
      fontWeight:'bold'
  },
  inputBox:{
      width:300,
      backgroundColor:'#ffffff',
      paddingVertical:10,
      borderRadius:20,
      fontSize:16,
      marginVertical:10,
      paddingHorizontal:16 
  },
  buttonText:{
    fontSize:16,
    color:"#435453"
    
  },
  button:{
    width:300,
    backgroundColor:'#18c9bb',
    padding:10,
    borderRadius:20,
    alignItems:'center',
    marginVertical:10,
    paddingVertical:14,
    
  },
  loginText:{
      flexGrow:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      marginBottom:190
  },
  signinButton:{
      fontSize:15,
      fontWeight:'500'
  }


});



