import react from "react";
import {View, Text, Modal, SafeAreaView, Image, Button, TextInput, ScrollView} from 'react-native'

function CustomerDetailModal(){
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
                                   marginTop: 10,
                                   height: '100%',
                                   borderTopLeftRadius: 10,
                                   borderTopRightRadius: 10  
                              }}>
                                   <View style={{
                                        marginTop: 10,
                                        alignItems: 'center'
                                        }}>
                                        <Image source={require('./src/assets/Rectangletop.png')}/>
                                        <Text style={{
                                             paddingTop: 20,
                                             fontSize: 18,
                                             fontWeight: 'bold'
                                        }}>
                                        Add Product
                                        </Text>
                                        <View style={{
                                             alignItems: 'center',
                                             position: 'absolute',
                                             marginTop: 25,
                                             paddingLeft: 300
                                        }}>
                                             <Image source={require('./src/assets/Close.png')}/>
                                        </View>
                                        <View style={{
                                             marginTop: 20
                                        }}>
                                             <Image source={require('./src/assets/Line_7.png')}/>
                                        </View>
                                        
                                        
                                   </View>
                                   <ScrollView>
                                   <View>
                                        <Text style={{
                                             paddingTop: 20,
                                             paddingLeft: 15
                                        }}>
                                             Product Name
                                        </Text>
                                        <TextInput style={{
                                             height: 45,
                                             marginLeft: 15,
                                             marginTop: 5,
                                             marginRight: 15,
                                             borderWidth: 0.5,
                                             padding: 10,
                                        }}
                                             placeholder="Product Name"
                                        />
                                   </View>
                                   <View>
                                        <Text style={{
                                             paddingTop: 10,
                                             paddingLeft: 15
                                        }}>
                                             Liters
                                        </Text>
                                        <TextInput style={{
                                             height: 45,
                                             marginLeft: 15,
                                             marginTop: 5,
                                             marginRight: 15,
                                             borderWidth: 0.5,
                                             padding: 10,
                                        }}
                                             placeholder="Liters"
                                        />
                                   </View>
                                   <View>
                                        <Text style={{
                                             paddingTop: 10,
                                             paddingLeft: 15
                                        }}>
                                             Quantity
                                        </Text>
                                        <TextInput style={{
                                             height: 45,
                                             marginLeft: 15,
                                             marginTop: 5,
                                             marginRight: 15,
                                             borderWidth: 0.5,
                                             padding: 10,
                                        }}
                                             placeholder="Quantity"
                                        />
                                   </View>
                                   <View>
                                        <Text style={{
                                             paddingTop: 10,
                                             paddingLeft: 15
                                        }}>
                                             Price
                                        </Text>
                                        <TextInput style={{
                                             height: 45,
                                             marginLeft: 15,
                                             marginTop: 5,
                                             marginRight: 15,
                                             borderWidth: 0.5,
                                             padding: 10,
                                        }}
                                             placeholder="Price"
                                        />
                                   </View>
                                   <View>
                                        <Text style={{
                                             paddingTop: 10,
                                             paddingLeft: 15
                                        }}>
                                             Discount
                                        </Text>
                                        <TextInput style={{
                                             height: 45,
                                             marginLeft: 15,
                                             marginTop: 5,
                                             marginRight: 15,
                                             borderWidth: 0.5,
                                             padding: 10,
                                        }}
                                             placeholder="Discount"
                                        />
                                   </View>
                                   <View>
                                   <Text style={{
                                             paddingTop: 10,
                                             paddingLeft: 15
                                        }}>
                                             Product Image Upload
                                        </Text>
                                        <View style={{
                                             backgroundColor: '#ADD8E6',
                                             height: 150,
                                             marginLeft: 15,
                                             marginRight: 15,
                                             marginTop: 5,
                                             alignItems: 'center'
                                        }}>
                                             <View style={{
                                                  marginTop: 30
                                             }}>
                                                  <Image source={require('./src/assets/Group_9.png')}/>
                                             </View>

                                        </View>
                                   </View>
                                   <View>
                                        <Text style={{
                                             paddingTop: 10,
                                             paddingLeft: 15
                                        }}>
                                             Description
                                        </Text>
                                        <TextInput style={{
                                             height: 45,
                                             marginLeft: 15,
                                             marginTop: 5,
                                             marginRight: 15,
                                             borderWidth: 0.5,
                                             padding: 10,
                                        }}
                                             placeholder="Description"
                                        />
                                   </View>
                                   <View style={{
                                        marginTop: 20,
                                        marginLeft: 15,
                                        marginRight: 15,
                                        marginBottom: 30
                                   }}>
                                   <Button
                                        title="Done"
                                   />
                                   </View>
                                   </ScrollView>
                                   

                              </View>

                         </View>
                         
                    </Modal>

               </View>
          </SafeAreaView>
     )
}

export default CustomerDetailModal