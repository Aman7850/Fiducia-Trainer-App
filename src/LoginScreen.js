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


const LoginScreen = () => {
    const navigation = useNavigation();
    const [show, setShow] = useState(false);
    const [text, onChangeText] = useState("Useless Text");
    const [number, onChangeNumber] = useState(null);
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setvisible] = useState(false);


    const searchuser = async () => {
        console.log(username, password);
        setvisible(true);
        console.log('I am aman!');
        const urls = 'https://fiduciafit.azurewebsites.net/nghome/api/v1/login.php';
        console.log(urls,' aman!');
        const response = await fetch(urls,{
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      });
    
      console.log(response,'result!');
      const json12 = response.json();
      console.log(json12,'I am!');
        console.log(response, 'see the result');
        if (!username.trim()) {
            alert('Please Enter Username');
            return;
          }
          //Check for the Email TextInput
          if (!password.trim()) {
            alert('Please Enter Password');
            return;
          }
          //Checked Successfully
          //Do whatever you want
          alert('Login Successfull');
          navigation.navigate('OTP');
}

  return (
    <View style={styles.container}>
    <ImageBackground source={require('./background.png')} resizeMode="cover" style={styles.image}>
        <ScrollView>
        <View style = {{justifyContent: 'center', alignItems: 'center', marginTop: '30%'}}>
            <Image source={require('./logo1.png')} resizeMode="cover" style={styles.Logo1} />
            <Image source={require('./logo2.png')} resizeMode="cover" style={styles.Logo2} />
            <Image source={require('./logo3.png')} resizeMode="cover" style={styles.Logo3} />
            <Image source={require('./logo4.png')} resizeMode="cover" style={styles.Logo4} />
            <Image source={require('./logo.png')} resizeMode="cover" style={styles.tinyLogo} />
        </View>
        <View style={{marginTop: '30%', padding: 30}}>
                <Input
                    placeholder='Enter your Name'
                    paddingLeft={2}
                    color={'white'}
                    InputLeftElement={<Icon name={'person'}  size={20} ml="2" color="lightgrey" />}
                    InputRightElement={<Icon name={'check'}  size={20} ml="2" color="lightgrey" />}
                    underlineColorAndroid="transparent"
                    value = {username} onChangeText = {(text) => setUsername(text)}
                />

                <View style={{marginTop: 20}}>
                    <Input
                        placeholder='Enter your Password'
                        color={'white'}
                        InputLeftElement={<Icon name={'lock'}  size={20} ml={50} color="lightgrey" />}
                        InputRightElement={<Icon name={passwordVisible ? "visibility-off" : "visibility"} size={20} marginRight="10" color="lightgrey" onPress={() => setPasswordVisible(!passwordVisible)} />}
                        underlineColorAndroid="transparent"
                        secureTextEntry={passwordVisible}
                        value = {password} onChangeText = {(text) => setPassword(text)}
                    />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Checkbox my={2}>
                        <Text style={{color: 'white'}}>Remember me</Text>
                    </Checkbox>

                    <TouchableWithoutFeedback onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={{color: 'white', fontWeight: '500', opacity: 0.8}}>Forgot Password</Text>
                    </TouchableWithoutFeedback>
                </View>

                <View style={{ marginTop: 20}}>
                        <View style={{marginTop: 20}}>
                                <TouchableWithoutFeedback onPress={() => navigation.navigate('Dashboard')}>
                                    <Card style={{backgroundColor: '#00F2E0', paddingLeft: 55, paddingRight: 55, borderRadius: 18, elevation: 10}}>
                                        <Text style={{fontSize: 18, fontWeight: '600', color: 'white', textAlign: 'center'}}>LOGIN</Text>
                                    </Card>
                                </TouchableWithoutFeedback>
                        </View>

                        <View style={{alignItems: 'flex-end', marginTop: 5}}>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('SignupScreen')}>
                                <Text style={{color: 'white', fontWeight: '500', opacity: 0.8}}>Create Account</Text>
                            </TouchableWithoutFeedback>
                        </View>
                </View>
        </View> 
        
        </ScrollView>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0F0140',
    },
    tinyLogo: {
        width: 180,
        height: 150,
        alignSelf: 'center',
        marginTop: -100
    },
    Logo1: {
        width: 15,
        height: 15,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 60,
        marginLeft: -20
        
    },
    Logo2: {
        width: 55,
        height: 40,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: -10,
        
    },
    Logo3: {
        width: 40,
        height: 40,
        alignSelf: 'center',
        marginTop: -10,
        borderRadius: 10
        
    },
    Logo4: {
        width: 12,
        height: 18,
        alignSelf: 'center',
        borderRadius: 10
        
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
    
    
  });
export default LoginScreen;
