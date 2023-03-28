import react from "react";
import {View, Text, Modal, SafeAreaView, Image, Button} from 'react-native'

function ReminderSent(){
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
                                   marginTop: 150,
                                   height: '80%',
                                   borderTopLeftRadius: 10,
                                   borderTopRightRadius: 10  
                              }}>
                                   <View style={{
                                        marginTop: 10,
                                        alignItems: 'center'
                                        }}>
                                        <Image source={require('./src/assets/Rectangletop.png')}/>
                                   </View>

                                   <View style={{
                                        marginTop: 140,
                                        alignItems: 'center'
                                        }}>
                                        <Image source={require('./src/assets/tickgood.png')}/>
                                        <Text style={{
                                             marginTop: 20
                                        }}>Reminder sent successfully</Text>
                                        <Text style={{
                                             textAlign: 'center',
                                             padding: 20
                                        }}>You've successfully sent a reminder to <Text style={{fontWeight: 'bold'}}>Pearl Somto</Text> he will get a notification to place order</Text>

                                        
                                   </View>
                                   <View style={{
                                        marginStart: 20,
                                        marginEnd: 20,
                                        height: 200
                                   }}>
                                   <Button
                                        style={{
                                        innerWidth: '100%'
                                        }}
                                        title="Back Home"/>
                                   </View>
                                   

                              </View>

                         </View>
                         
                    </Modal>

               </View>
          </SafeAreaView>
     )
}

export default ReminderSent