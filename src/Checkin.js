import React from 'react'
import { StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

const Checkin = () => {
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0F0140'}}>
        <Image source={require('./logo.png')} resizeMode="cover" style={styles.tinyLogo} />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3f3f6',
      
    },
    tinyLogo: {
      width: 180,
      height: 150,
      marginTop: -100
  },
  Icon: {
    width: 35,
    height: 35
  }
  });
export default Checkin;
