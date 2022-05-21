import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { NativeBaseProvider, Text, Box, Card, Avatar, Progress, Divider, Flex, VStack, Modal, FormControl} from 'native-base';
import {  TextInput } from 'react-native-paper';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Dashboard = () => {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
    <LinearGradient colors={['#ccfcf9', '#ffff', '#ccfcf9', '#fff', '#ccfcf9', '#ffff',]} style={{padding: 10}}>
        <ScrollView>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center'}}>
                <TouchableWithoutFeedback onPress={() => setShowModal(true)}> 
                    <Icon name={'menu'}  size={32} ml="2" color="black" />
                </TouchableWithoutFeedback>
                <Image source={require('./black_fiducia.png')} resizeMode="cover" style={styles.tinyLogo} />
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Notification')}><Icon name={'notifications-active'}  size={30} ml="2" color="black" /></TouchableWithoutFeedback>
            </View>

            <View style={{padding: 15, marginTop: 10}}>
                <Card style={{backgroundColor: 'white', borderRadius: 15}}>
                    <View style={{flexDirection: 'row'}}>
                        <Avatar bg="green.500" source={{
                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }}/>
                        <View style={{flexDirection: 'column', marginLeft: 15}}>
                            <Text style={{fontWeight: '900', color: '#0F0140'}}>Hello C. ibrahem</Text>
                            <Text style={{fontSize: 12, color: '#7F8FA4'}}>Welcome back</Text>
                        </View>
                    </View>
                </Card>

                <View style={{ marginTop: 20}}>
                    <Card style={{backgroundColor: 'white', borderRadius: 15, alignItems: 'center', paddingLeft: 45, paddingRight: 45, paddingTop: 35, paddingBottom: 35}}>
                        <Icon name={'check-circle-outline'}  size={32} ml="5" color="#0C0032" />
                        <Text style={{fontSize: 20, fontWeight: '900', color: '#0F0140', marginTop: 10}}>Check-In</Text>
                    </Card>
                </View>

                <Text style={{fontWeight: '900', color: '#0F0140', marginTop: 15}}>Session Today</Text>

                <Card style={{backgroundColor: 'white', borderRadius: 15, marginTop: 10}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginBottom: 10}}>
                            <Text style={{fontSize: 22, fontWeight: '900', color: 'black'}}>3 </Text>
                            <Text style={{ fontSize: 12}}>Sessions left of </Text>
                            <Text style={{fontSize: 18, color: 'black'}}>6 </Text>
                            <Text style={{fontSize: 12}}>Sessions</Text>
                        </View>
                        <View style={{backgroundColor: '#00F2E0', borderRadius: 20, padding: 10}}>
                            <Icon name={'arrow-forward-ios'}  size={12} ml="2" color="black" />
                        </View>
                    </View>
                    <Progress w="300" shadow={2} value={50} mx="4" mt={2} />

                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginTop: 10}}>
                        <Text style={{fontWeight: '600', color: 'black'}}>Next Session </Text>
                        <Text style={{fontSize: 12}}>: 03-03-2022 at 13:30</Text>
                    </View>
                </Card>

                <Text style={{fontWeight: '900', color: '#0F0140', marginTop: 15}}>Next Appointment</Text>

                <Card style={{backgroundColor: 'white', borderRadius: 15, marginTop: 10, paddingBottom: 40}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{fontWeight: '900', color: '#0F0140', fontSize: 12}}>Customer Name: </Text>
                                <Text style={{fontSize: 10, color: '#7F8FA4'}}>Omar Mohsen</Text>
                            </View>

                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name={'location-on'}  size={15} ml="2" color="black" />
                                <Text style={{fontSize: 10}}>Studio 2, Zyed Branch</Text>
                            </View>
                        </View>

                        <View style={{backgroundColor: '#00F2E0', borderRadius: 15, padding: 5}}>
                            <Icon name={'arrow-forward-ios'}  size={12} ml="2" color="black" />
                        </View>
                    </View>

                    <Flex direction="row" h="58" p="4" justifyContent={'space-between'} >
                        <VStack style={{flexDirection: 'column', alignItems: 'center'}}>
                        <AnimatedCircularProgress
                            size={55}
                            width={5}
                            fill={20}
                            duration={500}
                            tintColor="#00F2E0"
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor="#E1F4FE" rotation={360} >
                                {
                                    (fill) => (
                                    <Text>
                                        02
                                    </Text>
                                    )
                                }
                            </AnimatedCircularProgress>
                            <Text style={{opacity: 0.5}}>Days</Text>
                            </VStack>
                        <Divider bg="#AEBBD3" thickness="2" mx="2" orientation="vertical" mt={3}/>
                            <VStack style={{flexDirection: 'column', alignItems: 'center'}}>
                                <AnimatedCircularProgress
                                    size={55}
                                    width={5}
                                    fill={50}
                                    duration={500}
                                    tintColor="#00F2E0"
                                    onAnimationComplete={() => console.log('onAnimationComplete')}
                                    backgroundColor="#E1F4FE" rotation={360}>
                                    {
                                        (fill) => (
                                        <Text>
                                            12
                                        </Text>
                                        )
                                    }
                                </AnimatedCircularProgress>
                                <Text style={{opacity: 0.5}}>Hours</Text>
                            </VStack>
                            
                        <Divider bg="#AEBBD3" thickness="2" mx="2" orientation="vertical" mt={3}/>
                            <VStack style={{flexDirection: 'column', alignItems: 'center'}}>
                                <AnimatedCircularProgress
                                    size={55}
                                    width={5}
                                    fill={80}
                                    duration={500}
                                    tintColor="#00F2E0"
                                    onAnimationComplete={() => console.log('onAnimationComplete')}
                                    backgroundColor="#E1F4FE" rotation={360}>
                                    {
                                        (fill) => (
                                        <Text>
                                            20
                                        </Text>
                                        )
                                    }
                                </AnimatedCircularProgress>
                                <Text style={{opacity: 0.5}}>Minutes</Text>
                            </VStack>
                    </Flex>
                </Card>

                <Card style={{backgroundColor: 'white', borderRadius: 15, marginTop: 10}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View>
                        <Text style={{fontSize: 21, fontWeight: '500', color: '#6F668C'}}>520</Text>
                        <Text style={{fontSize: 12, color: '#7F8FA4'}}>Active</Text>
                        <Text style={{fontSize: 10, color: '#7F8FA4'}}>Customer Count</Text>
                    </View>
                        <Divider bg="#AEBBD3" thickness="2" mx="2" orientation="vertical" />
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 21, fontWeight: '500', color: '#7F8FA4'}}>45%</Text>
                            <Image
                                style={styles.updown}
                                source={require('./increase.png')}
                            />
                        </View>
                        <Text style={{fontSize: 12, color: '#7F8FA4'}}>Avg Session</Text>
                        <Text style={{fontSize: 10, color: '#7F8FA4'}}>/per day</Text>
                    </View>
                        <Divider bg="#AEBBD3" thickness="2" mx="2" orientation="vertical" />
                    <View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            
                            <Image
                                style={styles.updown}
                                source={require('./star.png')}
                            />
                            <Image
                                style={styles.updown}
                                source={require('./star.png')}
                            />
                            <Image
                                style={styles.updown}
                                source={require('./star.png')}
                            />
                            <Image
                                style={styles.updown}
                                source={require('./star_transparent.png')}
                            />
                            <Image
                                style={styles.updown}
                                source={require('./star_transparent.png')}
                            />
                        </View>
                        <Text style={{fontSize: 12, color: '#7F8FA4'}}>Avg Ratingh</Text>
                        <Text style={{fontSize: 10, color: 'green'}}>Increased</Text>
                    </View>
                    </View>
                </Card>
            </View>

             <Modal animationIn="slideInLeft" transparent={true} visible={showModal} duration={500} isOpen={showModal} onClose={() => setShowModal(false)} style={{ marginLeft: -52}}>
                    <Modal.Content maxWidth="600px" maxHeight={850}>
                    <Modal.CloseButton />
                    <Modal.Header style={{backgroundColor: '#0F0140'}}>
                        <View style={{padding: 10}}>
                            <Avatar bg="green.500" source={require('./avatar.png')} size={70} />
                            <Text style={{fontSize: 18, color: '#fff', fontWeight: '800', marginTop: 5}}>C. Raouf Mohamed</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 12, color: '#fff', marginTop: 5}}>4.48</Text>
                                <Image
                                    style={styles.updown}
                                    source={require('./star.png')}
                                />
                                <Image
                                    style={styles.updown}
                                    source={require('./star.png')}
                                />
                                <Image
                                    style={styles.updown}
                                    source={require('./star.png')}
                                />
                                <Image
                                    style={styles.updown}
                                    source={require('./star_transparent.png')}
                                />
                                <Image
                                    style={styles.updown}
                                    source={require('./star_transparent.png')}
                                />
                            </View>
                        </View>
                        <Divider color={'grey'} mt={12} />
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                <Icon name={'edit'}  size={18} ml="2" color="white" />
                                <Text style={{color: 'white', fontSize: 15, marginLeft: 8}}>Edit Profile</Text>
                            </View>
                            <Icon name={'keyboard-arrow-right'}  size={25} ml="2" color="grey" />
                        </View>
                    </Modal.Header>
                    <Modal.Body>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name={'notifications-none'}  size={25} ml="2" color="#354052" />
                            <Text style={{color: '#354052', marginLeft: 10, fontSize: 15}}>Alerts</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <Icon name={'chat-bubble-outline'}  size={25} ml="2" color="#354052" />
                            <Text style={{color: '#354052', marginLeft: 10, fontSize: 15}}>Inbox</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <Icon name={'apartment'}  size={25} ml="2" color="#354052" />
                            <Text style={{color: '#354052', marginLeft: 10, fontSize: 15}}>Commision</Text>
                        </View>

                        
                    </Modal.Body>
                    <Modal.Footer style={{marginTop: 295}}>
                        
                        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
                            <Card style={{width: '100%', backgroundColor: 'white', elevation: 10}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Icon name={'logout'}  size={18} ml="2" color="tomato" />
                                        <Text style={{color: 'tomato', fontWeight: '600', marginLeft: 8}}>Logout</Text>
                                    </View>
                                    <Icon name={'keyboard-arrow-right'}  size={23} ml="2" color="grey" />
                                </View>
                            </Card>
                        </TouchableWithoutFeedback>
                        
                    </Modal.Footer>
                    </Modal.Content>
            </Modal>

            <View>
                <Image
                    style={styles.Icon}
                    source={require('./bottom.png')}
                />
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View>
                    <Image
                        style={styles.Icongrowth}
                        source={require('./growth.png')}
                    /> 
                </View>
                <View>
                    <Image
                        style={styles.dashboard}
                        source={require('./dashboard.png')}
                    /> 
                </View>
                <View>
                    <Image
                        style={styles.pakage}
                        source={require('./pakage.png')}
                    /> 
                </View>
                </View>
            </View>
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
    
    updown: {
        width: 10,
        height: 10,
        marginLeft: 5,
        marginTop: 8
    },
    Icongrowth: {
        width: 30,
        height: 30,
        marginTop: -45,
        
    },
    dashboard: {
        width: 60,
        height: 60,
        marginTop: -85,
    },
    pakage: {
        width: 30,
        height: 30,
        marginTop: -45,
    },
    Icon: {
        marginLeft: 9,
        marginTop: 20
    }
  });
export default Dashboard;
