import React from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

function ProfileSettings(props) {
    return (
        <ScrollView style={{flex: 1, backgroundColor: "#FFF",}}>
            <View style={{alignItems: "center"}}>
                <View style={{
                    height: 104, 
                    width: 104, 
                    borderRadius: 52, 
                    borderWidth: 5, 
                    borderColor: "#C4C4C4", 
                    overflow: "hidden",
                    marginBottom: 10
                }}>
                    <Image 
                        source={require("../../../../assets/customers/customer-profile-pic.jpg")} 
                        style={{
                            width: "100%", 
                            height: "100%", 
                            resizeMode: "cover",
                        }} 
                        />
                </View>
                <Text 
                    style={{
                        fontFamily: "Manrope_600SemiBold",
                        fontSize: 16,
                        color: "#21334F"
                    }}>Abimbola Thomas</Text>
                <Text 
                    style={{
                        fontFamily: "Manrope_300Light",
                        fontSize: 12,
                        color: "#21334F"
                    }}>abimbolathomas@gmail.com</Text>
            </View>
            <View style={{
                flex: 1,
                padding: 10,
            }}>
                <View style={{ marginTop: 10 }}>
                    <Text
                    style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        marginVertical: 5,
                        color: "#21334F"
                    }}
                    > Email </Text>
                    <TextInput
                    placeholder="Email"
                    color="#21334F"
                    value="abimbolathomas@gmail.com"
                    style={{
                        height: 48,
                        borderWidth: 0.5,
                        borderColor: "#21334F33",
                        backgroundColor: "#21334F0A",
                        padding: 10,
                        fontFamily: "Manrope_400Regular",
                    }}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text
                    style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        marginVertical: 5,
                        color: "#21334F"
                    }}
                    > Username </Text>
                    <TextInput
                    placeholder="Username"
                    color="#21334F"
                    value="Bola Thomas"
                    style={{
                        height: 48,
                        borderWidth: 0.5,
                        borderColor: "#21334F33",
                        backgroundColor: "#21334F0A",
                        padding: 10,
                        fontFamily: "Manrope_400Regular",
                    }}
                    />
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        marginVertical: 5
                        }}>Password</Text>
                    
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        height: 48,
                        borderWidth: 0.5,
                        borderColor: "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        backgroundColor: "#21334F0A"
                    }}>
                        <TextInput 
                        secureTextEntry
                        placeholder='Password'
                        value='1234'
                        underlineColorAndroid="transparent"
                        style={{
                            flex: 1,
                            fontFamily: "Manrope_400Regular"
                        }}/>
                        <Entypo name="eye-with-line" size={20} color="black" />
                    </View>
                    </View>
                <View style={{ marginTop: 10 }}>
                    <Text
                    style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        marginVertical: 5,
                        color: "#21334F"
                    }}
                    > Phone Number </Text>
                    <TextInput
                    keyboardType="numeric"
                    placeholder="Phone Number"
                    color="#21334F"
                    value="08134786354"
                    style={{
                        height: 48,
                        borderWidth: 0.5,
                        borderColor: "#21334F33",
                        backgroundColor: "#21334F0A",
                        padding: 10,
                        fontFamily: "Manrope_400Regular",
                    }}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text
                    style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        marginVertical: 5,
                        color: "#21334F"
                    }}
                    > Address </Text>
                    <TextInput
                    keyboardType="numeric"
                    placeholder="Address"
                    color="#21334F"
                    value="44, Alidada street, Okota, Lagos"
                    style={{
                        height: 48,
                        borderWidth: 0.5,
                        borderColor: "#21334F33",
                        backgroundColor: "#21334F0A",
                        padding: 10,
                        fontFamily: "Manrope_400Regular",
                    }}
                    />
                </View>
                <TouchableHighlight style={{marginTop: 20}} underlayColor="#114E93" onPress={() => {
                    
                }} >
                <View style={{
                    backgroundColor: "#147DF5",
                    height: 48,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Text style={{color: "#FFF", fontFamily: "Manrope_700Bold"}}>Done</Text>
                </View>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}

export default ProfileSettings;