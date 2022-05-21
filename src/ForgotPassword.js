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

const ForgotPassword = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.pop()} style={{padding: 20, marginLeft: '-85%'}}>
            <Icon name={'arrow-back-ios'}  size={32} ml="2" color="black" />
        </TouchableOpacity>
        <View style={{width: '60%',  justifyContent: 'center', marginTop: '5%'}}>
            <Text style={{fontSize: 22, color: '#0F0140', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Montserrat'}}>Forget your password</Text>
            <Text style={{fontSize: 13, textAlign: 'center', marginTop: 5, color: '#7F8FA4', opacity: 0.7}}>Enter your registered email below to receive password reset instruction</Text>
        </View>

        <View style={{marginTop: '20%'}}>
            <Image
                style={styles.tinyLogo}
                source={require('./forgot_image.png')}
            />
        </View>

        <View style={{marginTop: '10%'}}>
            <Input
                placeholder='Email'
                variant="rounded"
                paddingLeft={2}
                w="80%"
                maxWidth="330px"
                color={'black'}
                InputLeftElement={<Icon name={'email'}  size={20} color="#00F2E0" />}
                underlineColorAndroid="transparent"
                value = {email} onChangeText = {(text) => setEmail(text)}
            />

            <View style={{marginTop: 20}}>
                <TouchableWithoutFeedback onPress={() => console.log('Reset')}>
                    <Card style={{backgroundColor: '#0F0140', width: 318, borderRadius: 15, elevation: 10}}>
                        <Text style={{fontSize: 13, color: 'white', textAlign: 'center'}}>RESET</Text>
                    </Card>
                </TouchableWithoutFeedback>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
                <Text style={{fontSize: 13, opacity: 0.5}}>Remember your Password? </Text>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Text style={{fontSize: 12, fontWeight: '500', color: '#FEB25B', opacity: 0.7}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F7F7F7'
    },
    tinyLogo: {
        width: 200,
        height: 250,
        alignSelf: 'center',
        borderRadius: 10,

        
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
    
    
  });
export default ForgotPassword;
