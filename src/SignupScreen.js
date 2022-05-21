import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import { NativeBaseProvider, Text, Box, Card, Input, Checkbox, Select, service, Radio, CheckIcon, HStack, useContrastText, Button} from 'native-base';
import {  TextInput } from 'react-native-paper';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import LinearGradient from 'react-native-linear-gradient';

const SignupScreen = () => {
    const navigation = useNavigation();
    const [show, setShow] = useState(false);
    const [text, onChangeText] = useState("Useless Text");
    const [number, onChangeNumber] = useState(null);
    let [date, setDate] = useState("");
    let [month, setMonth] = useState("");
    let [year, setYear] = useState("");
    const bgDark = "#00F2E0";
    const bgLight = "gray.50";
    const colorContrastDark = useContrastText(bgDark);
    const colorContrastLight = useContrastText(bgLight);
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [first_name, setFirst_Name] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [visible, setvisible] = useState(false);

    const searchuser = async () => {
        console.log(username, password, cpassword, first_name, last_name, email, phone, date, month, year, gender);
        setvisible(true);
        console.log('I am aman!');
        const urls = 'https://fiduciafit.azurewebsites.net/nghome/api/v1/registration.php';
        console.log(urls,' aman!');
        const response = await fetch(urls,{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          params: {
            
                username: username,
                password: password,
                cpassword: cpassword,
                first_name: first_name,
                last_name: last_name,
                email: email,
                phone: phone,
                date: date,
                month: month,
                year: year,
                gender: gender,
                

          },
        }),
      });
    
      console.log(response,'result!');
      const json12 = response.json();
      console.log(json12,'I am!');
        console.log(response, 'see the result');
        if (!first_name.trim()) {
            alert('Please Enter First Name');
            return;
          }
          //Check for the Email TextInput
          if (!last_name.trim()) {
            alert('Please Enter Last Name');
            return;
          }
          if (!password.trim()) {
            alert('Please Enter Password');
            return;
          }
          if (!password.trim() !== !cpassword.trim()) {
            alert('Password and Confirm Password did not match...');
            return;
          }
          if (!email.trim()) {
            alert('Please Enter your Email ID');
            return;
          }
          if (!phone.trim()) {
            alert('Please Enter your Phone Number');
            return;
          }
          if (!date.trim()) {
            alert('Please select date');
            return;
          }
          if (!month.trim()) {
            alert('Please select month');
            return;
          }
          if (!year.trim()) {
            alert('Please select year');
            return;
          }
          
          //Checked Successfully
          //Do whatever you want
          alert('Account created successfully');
          navigation.navigate('OTP')
}

  return (
    <View style={styles.container}>
        <LinearGradient colors={['#ccfcf9', '#ffff', '#ccfcf9', '#fff', '#ccfcf9', '#ffff',]} style={{padding: 20}}>
        <ScrollView>
        <View style = {{ flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.pop()} style={{padding: 20}}>
                <Icon name={'arrow-back-ios'}  size={20} ml="2" color="black" opacity={0.7} />
            </TouchableOpacity>
            <Image source={require('./black_fiducia.png')} resizeMode="cover" style={styles.tinyLogo} />
        </View>
            <Card style={{borderRadius: 25, padding: 25, backgroundColor: 'white', marginTop: 30}}>
                <Text style={{fontSize: 21, fontWeight: '900', color: 'black', marginTop: 10}}>Create Account</Text>
                    <View style={{marginTop: 15}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Input
                            placeholder='First Name'
                            variant="rounded"
                            paddingLeft={2}
                            w="45%"
                            maxWidth="200px"
                            color={'black'}
                            InputLeftElement={<Icon name={'person'}  size={20} ml="2" color="#00F2E0" />}
                            underlineColorAndroid="transparent"
                            value = {first_name} onChangeText = {(text) => setFirst_Name(text)}
                        />

                        <Input
                            placeholder='Last Name'
                            variant="rounded"
                            w="45%"
                            maxWidth="200px"
                            paddingLeft={2}
                            color={'black'}
                            underlineColorAndroid="transparent"
                            value = {last_name} onChangeText = {(text) => setLast_Name(text)}
                        />
                        </View>

                    <View style={{marginTop: 20}}>
                        <Input
                            placeholder='Enter your Password'
                            variant="rounded"
                            paddingLeft={2}
                            color={'black'}
                            InputLeftElement={<Icon name={'lock'}  size={20} ml="2" color="#00F2E0" />}
                            InputRightElement={<Icon name={passwordVisible ? "visibility-off" : "visibility"} size={25} ml="2" color="black" onPress={() => setPasswordVisible(!passwordVisible)} />}
                            underlineColorAndroid="transparent"
                            secureTextEntry={passwordVisible}
                            value = {password} onChangeText = {(text) => setPassword(text)}
                        />
                    </View>

                    <View style={{marginTop: 20}}>
                        <Input
                            placeholder='Confirm Password'
                            variant="rounded"
                            paddingLeft={2}
                            color={'black'}
                            InputLeftElement={<Icon name={'lock'}  size={20} ml="2" color="#00F2E0" />}
                            InputRightElement={<Icon name={passwordVisible ? "visibility-off" : "visibility"} size={25} ml="2" color="black" onPress={() => setPasswordVisible(!passwordVisible)} />}
                            underlineColorAndroid="transparent"
                            secureTextEntry={passwordVisible}
                            value = {cpassword} onChangeText = {(text) => setCpassword(text)}
                        />
                    </View>

                    <View style={{marginTop: 20}}>
                            <Input
                                placeholder='Enter your Email ID'
                                variant="rounded"
                                paddingLeft={2}
                                color={'black'}
                                InputLeftElement={<Icon name={'email'}  size={20} ml="2" color="#00F2E0" />}
                                underlineColorAndroid="transparent"
                                value = {email} onChangeText = {(text) => setEmail(text)}
                            />
                    </View>

                    <View style={{marginTop: 20}}>
                            <Input
                                placeholder='Enter your Phone'
                                variant="rounded"
                                paddingLeft={2}
                                color={'black'}
                                keyboardType="numeric"
                                InputLeftElement={<Icon name={'phone'}  size={20} ml="2" color="#00F2E0" />}
                                underlineColorAndroid="transparent"
                                value = {phone} onChangeText = {(text) => setPhone(text)}
                            />
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                    <View>
                        <Text>Date of Birth</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <Select shadow={2} selectedValue={service} minWidth="65" accessibilityLabel="Choose Service" placeholder="D" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} _light={{
                                bg: "coolGray.100"
                            }} _dark={{
                                bg: "coolGray.800"
                            }} value = {date} onValueChange={itemValue => setDate(itemValue)}>
                                <Select.Item shadow={2} label="1" value="1" />
                                <Select.Item shadow={2} label="2" value="2" />
                                <Select.Item shadow={2} label="3" value="3" />
                                <Select.Item shadow={2} label="4" value="4" />
                                <Select.Item shadow={2} label="5" value="5" />
                                <Select.Item shadow={2} label="6" value="6" />
                                <Select.Item shadow={2} label="7" value="7" />
                                <Select.Item shadow={2} label="8" value="8" />
                                <Select.Item shadow={2} label="9" value="9" />
                                <Select.Item shadow={2} label="10" value="10" />
                                <Select.Item shadow={2} label="11" value="11" />
                                <Select.Item shadow={2} label="12" value="12" />
                                <Select.Item shadow={2} label="13" value="13" />
                                <Select.Item shadow={2} label="14" value="14" />
                                <Select.Item shadow={2} label="15" value="15" />
                                <Select.Item shadow={2} label="16" value="16" />
                                <Select.Item shadow={2} label="17" value="17" />
                                <Select.Item shadow={2} label="18" value="18" />
                                <Select.Item shadow={2} label="19" value="19" />
                                <Select.Item shadow={2} label="20" value="20" />
                                <Select.Item shadow={2} label="21" value="21" />
                                <Select.Item shadow={2} label="22" value="22" />
                                <Select.Item shadow={2} label="23" value="23" />
                                <Select.Item shadow={2} label="24" value="24" />
                                <Select.Item shadow={2} label="25" value="25" />
                                <Select.Item shadow={2} label="26" value="26" />
                                <Select.Item shadow={2} label="27" value="27" />
                                <Select.Item shadow={2} label="28" value="28" />
                                <Select.Item shadow={2} label="29" value="29" />
                                <Select.Item shadow={2} label="30" value="30" />
                                <Select.Item shadow={2} label="31" value="31" />
                                </Select>

                                <Select shadow={2} selectedValue={service} minWidth="75" accessibilityLabel="Choose Service" ml={1} placeholder="M" _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />
                                }} _light={{
                                    bg: "coolGray.100"
                                }} _dark={{
                                    bg: "coolGray.800"
                                }} value = {month} onValueChange={itemValue => setMonth(itemValue)}>
                                    <Select.Item shadow={2} label="Jan" value="Jan" />
                                    <Select.Item shadow={2} label="Feb" value="Feb" />
                                    <Select.Item shadow={2} label="Mar" value="Mar" />
                                    <Select.Item shadow={2} label="April" value="April" />
                                    <Select.Item shadow={2} label="May" value="May" />
                                    <Select.Item shadow={2} label="Jun" value="Jun" />
                                    <Select.Item shadow={2} label="Jul" value="Jul" />
                                    <Select.Item shadow={2} label="Aug" value="Aug" />
                                    <Select.Item shadow={2} label="Sep" value="Sep" />
                                    <Select.Item shadow={2} label="Oct" value="Oct" />
                                    <Select.Item shadow={2} label="Nov" value="Nov" />
                                    <Select.Item shadow={2} label="Dec" value="Dec" />
                                    
                                    </Select>

                                    <Select shadow={2} selectedValue={service} minWidth="79" accessibilityLabel="Choose Service" ml={1} placeholder="Y" _selectedItem={{
                                        bg: "teal.600",
                                        endIcon: <CheckIcon size="5" />
                                    }} _light={{
                                        bg: "coolGray.100"
                                    }} _dark={{
                                        bg: "coolGray.800"
                                    }} value = {year} onValueChange={itemValue => setYear(itemValue)}>
                                        <Select.Item shadow={2} label="1990" value="1990" />
                                        <Select.Item shadow={2} label="1991" value="1991" />
                                        <Select.Item shadow={2} label="1992" value="1992" />
                                        <Select.Item shadow={2} label="1993" value="1993" />
                                        <Select.Item shadow={2} label="1994" value="1994" />
                                    </Select>
                        </View>
                    </View>

                    <View style={{marginLeft: 8}}>
                        <Text style={{marginLeft: 20}}>Gender</Text>
                            <Radio.Group>
                                    <HStack space="2" value = {gender} onValueChange={itemValue => setGender(itemValue)}>
                                    <Radio value="2" colorScheme="#00F2E0" size="md" my={1}>
                                        M
                                    </Radio>
                                    <Radio value="3" colorScheme="#00F2E0" size="md" my={1}>
                                        F
                                    </Radio>
                                    </HStack>
                            </Radio.Group>
                    </View>
                </View>

                <Checkbox my={2} color={'black'} mt={5}>
                    <View style={{flexDirection: 'row'}}>
                        <Text>I Agree </Text>
                        <Text style={{textDecorationLine: 'underline'}}>Terms and condition</Text>
                    </View>
                </Checkbox>
                <View style={{marginTop: 20, paddingBottom: 100}}>
                    <TouchableWithoutFeedback onPress={searchuser}>
                    <Card style={{backgroundColor: '#00F2E0', padding: 10, borderRadius: 15}}>
                        <Text style={{fontSize: 18, fontWeight: '400', color: 'white', textAlign: 'center'}}>Create Account</Text>
                    </Card>
                    </TouchableWithoutFeedback>
                </View>
            </Card>
        </ScrollView>
        </LinearGradient>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    tinyLogo: {
        width: 200,
        height: 35,
        alignSelf: 'center',
        
        borderRadius: 10
        
    },
    SecondContainer: {
        flex: 2,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: 'white',
        maxHeight: '80%',
        padding: 20,
        marginTop: 20
    }
    
  });
export default SignupScreen;
