import React from 'react';
import {  View,StyleSheet,TouchableOpacity,Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class  WriteStory extends React.Component {
render(){
return(
  <View style={styles.container}>
  <View>
    <TextInput
    placeholder="Story Title"
    style={styles.inputBox}
    ></TextInput>
  </View>
 <View>
     <TextInput
     placeholder="Author"
     style={styles.inputBox}
     ></TextInput>
 </View>
 <View>
     <TextInput
     placeholder="write your story "
     style={styles.storyBox}
     ></TextInput>
 </View>
 <TouchableOpacity   style={[styles.button, { backgroundColor: 'green' }]}>
<Text>submit</Text>
 </TouchableOpacity>
  </View>
)}}

  const styles = StyleSheet.create({
    inputBox: {
      marginTop: 0,
      marginBottom:80,
      width: '190%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
    storyBox: {
        marginTop: 20,
        width: '200%',
        alignSelf: 'center',
        height: 100,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
      },
    button: {
      marginTop: 40,
      marginLeft: 60,
      borderWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      width: 200,
      height: 30,
      background: 'blue',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        marginTop: 20,
        marginLeft: 30,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 30,
        background: 'blue',
      },
  });