import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { NativeBaseProvider, Text, Box, useTheme } from 'native-base';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Input} from 'react-native-elements';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword';
import OTP from './OTP';
import Checkin from './Checkin';
import Packages from './Packages';

// function MyTabs() {
//   return (
//     <Tab.Navigator screenOptions={{ 
//       headerShown: false,
//       tabBarIndicatorStyle: {backgroundColor: '#1ffc05',},
//       swipeEnabled: (false), 
//       tabBarActiveTintColor: 'white',
//       tabBarInactiveTintColor: 'lightgrey',
//       tabBarStyle: { backgroundColor: '#503feb', height:60, opacity: 0.9}, 
//       tabBarLabelStyle: { fontSize: 12, fontWeight:'bold', letterSpacing: 1}, 
//       gestureEnabled: false,
//       }}  initialRouteName={'Dashboard'} >
      
//       <Tab.Screen name="Checkin" component={Checkin}  options={{tabBarIcon: ({ color }) => (
//         <Icon name={'format-indent-increase'}  size={25} ml="2" color="white" />
//       ),}}/>
//       <Tab.Screen name="Dashboard" component={Dashboard}  options={{tabBarIcon: ({ color }) => (
//         <Image
//           style={styles.Icon}
//           source={require('./dashboard.png')}
//         />
//       ),}}/>
//       <Tab.Screen name="Packages" component={Packages}  options={{tabBarIcon: ({ color }) => (
//         <Icon name={'shopping-cart'}  size={30} ml="2" color="white" />
//       ),}}/>
//     </Tab.Navigator>
//   );
// }

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  

  
  useEffect(() => {
    setTimeout(async() => {
      setIsLoading(false);
      
    }, 2000);
  }, []);

  if(isLoading){
    return(
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0F0140'}}>
        <Image source={require('./logo.png')} resizeMode="cover" style={styles.tinyLogo} />
      </View>
    )
    }
    return(
      
        <NavigationContainer independent={true}>
        
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'LoginScreen'}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="OTP" component={OTP} />
            </Stack.Navigator>
        
      </NavigationContainer>
     
     
    )
}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


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

export default App;