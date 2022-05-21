import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { NativeBaseProvider, Text, Box, Card, Input, Checkbox} from 'native-base';
import {  TextInput } from 'react-native-paper';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field';

const OTP = () => {
    const navigation = useNavigation();

    const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.container}>
    <LinearGradient colors={['#ccfcf9', '#ffff', '#ccfcf9', '#ccfcf9', '#ccfcf9', '#ffff',]} style={{padding: 10}}>
    <TouchableOpacity onPress={() => navigation.pop()} style={{padding: 20}}>
            <Icon name={'arrow-back-ios'}  size={32} ml="2" color="black" />
        </TouchableOpacity>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 23, fontWeight: '900', color: 'black', textAlign: 'center', marginTop: '10%'}}>Verify Account</Text>
        <Text style={{color: 'black', width: '60%', fontWeight: '400', textAlign: 'center', marginTop: 30}}>Enter your verification code below to confirm your email</Text>

        <View style={{marginTop: 20}}>
          <AnimatedCircularProgress
              size={85}
              width={7}
              fill={80}
              duration={500}
              tintColor="#00F2E0"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#E1F4FE" rotation={360}>
                {
                  (fill) => (
                    <Text style={{opacity: 0.5}}>
                      00:30
                    </Text>
                  )
                }
            </AnimatedCircularProgress>
          </View>
          
      </View>

    <CodeField
    ref={ref}
    {...props}
    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
    value={value}
    onChangeText={setValue}
    cellCount={CELL_COUNT}
    rootStyle={styles.codeFieldRoot}
    keyboardType="number-pad"
    textContentType="oneTimeCode"
    renderCell={({index, symbol, isFocused}) => (
      <View style={{padding:10}}>
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </Text>
      </View>
    )}
  />
      <View style={{marginLeft: 30}}>
        <TouchableWithoutFeedback>
          <Text style={{color: 'tomato', fontWeight: '600'}}>Resend OTP</Text>
        </TouchableWithoutFeedback>
      </View>

      <Text style={{fontSize: 23, color: 'red', fontWeight: '900', textAlign: 'center', marginTop: '10%'}}>Work in progress</Text>

      <TouchableWithoutFeedback onPress={() => navigation.navigate('LoginScreen')} >
          <Card style={{backgroundColor: '#35F2E0', marginTop: 100, marginBottom: '21%', paddingBottom: 17, paddingTop: 17, paddingLeft: 40, paddingRight: 40, width: '90%', alignSelf: 'center', borderRadius: 15}}>
              <Text style={{fontSize: 16, fontWeight: '500', color: 'black', textAlign: 'center'}}>Done</Text>
          </Card>
      </TouchableWithoutFeedback>
      </LinearGradient>
    </View>
  )
}
const CELL_COUNT = 5;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E1F4FE',
      
      
    },
    root: {flex: 1, padding: 10},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 60},
  cell: {
    width: 50,
    height: 70,
    lineHeight: 60,
    fontSize: 24,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'white',
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white'
  },
  focusCell: {
    borderColor: '#000',
   
  },
  });
export default OTP;