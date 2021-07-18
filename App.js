// import React from "react";
// import { Text, View, TextInput,StyleSheet} from "react-native";
import Routes from'./components/Routes'
// import Login from './components/Login'
// export default function App() {
//   return (
//   <View style={styles.container}>
//   <Login/>
//   </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#d1eff0",
//   },
// });
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{
      <Routes/>
      }</NavigationContainer>
  );
}