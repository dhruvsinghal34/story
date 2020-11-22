import React from 'react';
import { View,StyleSheet,Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReadStory from './screen/ReadStoryScreen'
import WriteStory from './screen/WriteStoryScreen'
import AppHeader from './components/AppHeader'

export default function App() {
  return (
    <View style={styles.container}>
    <AppHeader/>
    <AppContainer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }});

  const TabNavigator = createBottomTabNavigator({
  ReadStoryScreen:{screen:ReadStory},
  WriteStoryScreen:{screen:WriteStory}
},
{
  defaultNavigationOptions:({navigation})=>({
  tabBarIcon:()=>{
    const routeName=navigation.state.routeName;
    if(routeName=== "ReadStoryScreen"){
     return (
     <Image source={
       require("./images/read.png")
     }
     style={{width:30,
            height:40}}
       ></Image>
   )}
    else if (routeName==="WriteStoryScreen"){
      return(
        <Image source={
         require(
           "./images/write.png"
         )}
        style={{width:40, height:40}} ></Image>
      )}}})});
const AppContainer = createAppContainer(TabNavigator);