import react from "react";
import {View, Text, Modal, SafeAreaView, Image, Button} from 'react-native'

function AddReminder(){
     return(
          <SafeAreaView>
               <View style={{
                    flex: 1,
                    marginTop: 100
               }}>
                    <Text style={{
                         fontSize: 40,
                         color: '#000'
                    }}>
                         Modal Screen for Reminder Sent
                    </Text>
                    <Modal 
                    transparent={true}
                    Visible={true}>
                         <View style={{
                              backgroundColor: '#000000aa',
                              flex: 1
                         }}>
                              <View style={{
                                   backgroundColor: '#fff',
                                   marginTop: 110,
                                   height: '83%',
                                   borderTopLeftRadius: 10,
                                   borderTopRightRadius: 10  
                              }}>
                                   <View style={{
                                        marginTop: 10,
                                        alignItems: 'center'
                                        }}>
                                        <Image source={require('./src/assets/Rectangletop.png')}/>
                                        <Text style={{
                                             paddingTop: 20
                                        }}>
                                        Profile Details
                                        </Text>
                                        {/* <View style={{
                                             MarginTop: 10,
                                             position: 'absolute',
                                             alignItems: 'flex-start'
                                        }}>
                                        <Image style={{
                                             
                                        }} source={require('./src/assets/xbutton.png')}/>
                                        </View> */}
                                        <View style={{
                                             paddingTop: 20,
                                             // width: '50%'
                                        }}>
                                        <Image source={require('./src/assets/Line_7.png')}/>
                                        </View>

                                        
                                   </View>
                                   <View style={{
                                             paddingTop: 20,
                                             paddingLeft: 20
                                        }}>
                                        <Image source={require('./src/assets/Ellipse_9.png')}/>
                                        <Text style={{
                                             position: 'absolute',
                                             marginStart: 110,
                                             fontWeight: 'bold',
                                             fontSize: 18,
                                             paddingTop: 30
                                        }}>
                                             Pearl Somoto
                                        </Text>
                                        <Text style={{
                                             position: 'absolute',
                                             marginStart: 110,
                                             fontSize: 18,
                                             paddingTop: 50
                                        }}>
                                             Egbeda, Lagos
                                        </Text>
                                   </View>

                                   <View style={{
                                        paddingLeft: 20,
                                        paddingTop: 25
                                   }}>
                                        <Text style={{
                                             fontSize: 15
                                        }}>More Info</Text>
                                        <View style={{
                                             paddingTop: 18
                                             }}>
                                             <Image source={require('./src/assets/ep_location.png')}/>
                                             <Text style={{
                                                  position: 'absolute',
                                                  fontSize: 19,
                                                  paddingLeft: 40,
                                                  paddingTop: 15
                                             }}>34, Arinza street, Magodo, Phase 2, Lagos</Text>
                                        </View>
                                        <View style={{
                                             paddingTop: 18
                                             }}>
                                             <Image source={require('./src/assets/clarity_mobile-phone-line.png')}/>
                                             <Text style={{
                                                  position: 'absolute',
                                                  fontSize: 19,
                                                  paddingLeft: 40,
                                                  paddingTop: 18
                                             }}>07045763344</Text>
                                        </View>
                                        <View style={{
                                             paddingTop: 18
                                             }}>
                                             <Image source={require('./src/assets/carbon_email.png')}/>
                                             <Text style={{
                                                  position: 'absolute',
                                                  fontSize: 19,
                                                  paddingLeft: 40,
                                                  paddingTop: 15
                                             }}>EmekaChukwuEbuka@gmail.com</Text>
                                        </View>
                                        <View style={{
                                             paddingTop: 18
                                             }}>
                                             <Image source={require('./src/assets/bar.png')}/>
                                             <Text style={{
                                                  position: 'absolute',
                                                  fontSize: 19,
                                                  paddingLeft: 40,
                                                  paddingTop: 15
                                             }}>Consumpution Level (65.89%)</Text>
                                        </View>
                                        <View style={{
                                             paddingTop: 18,
                                             paddingLeft: 8
                                             }}>
                                             <Image source={require('./src/assets/bottles.png')}/>
                                             <Text style={{
                                                  position: 'absolute',
                                                  fontSize: 19,
                                                  paddingLeft: 40,
                                                  paddingTop: 15
                                             }}>Total bottles bought (78)</Text>
                                        </View>
                                        <View style={{
                                             paddingTop: 18,
                                             paddingLeft: 8
                                             }}>
                                             <Image source={require('./src/assets/bottles.png')}/>
                                             <Text style={{
                                                  position: 'absolute',
                                                  fontSize: 19,
                                                  paddingLeft: 40,
                                                  paddingTop: 15
                                             }}>Total bottles remaining (4)</Text>
                                        </View>
                                        <View style={{
                                             marginTop: 20,
                                        marginEnd: 15,
                                        height: 200
                                   }}>
                                   <Button
                                        style={{
                                        innerWidth: '100%'
                                        }}
                                        title="Set Reminder"
                                        color="#147DF5">
                                             {/* <Image style={{
                                             position: 'absolute'
                                        }} source={require('./src/assets/bottles.png')}/> */}
                                        </Button>
                                        
                                   </View>
                                   </View>
                                   
                                   

                              </View>

                         </View>
                         
                    </Modal>

               </View>
          </SafeAreaView>
     )
}

export default AddReminder