import React from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

function ReferSettings(props) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#FFF"
        }}>
            <View style={{
                paddingHorizontal: 20,
                borderBottomWidth: 6,
                borderBottomColor: "#00000005",
                paddingBottom: 20
            }}>
                <View style={{
                    width: "100%",
                    height: 189
                }}>
                    <Image source={require("../../../../assets/gift.png")} style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "cover"
                    }}/>
                </View>
                <View>
                    <Text style={{
                        fontFamily: "Manrope_700Bold",
                        fontSize: 24,
                        color: "#21334F",
                        paddingVertical: 20
                    }}>Refer your friends & earn cash back</Text>
                    <Text style={{
                        fontFamily: "Manrope_300Light",
                        fontSize: 14,
                        color: "#21334F"
                    }}>
                        Invite your friends to join Aqua and get N500 cashback 
                        for each friend that joins using your referral code.
                    </Text>
                </View>
            </View>
            <View style={{
                flex: 1,
                paddingHorizontal: 20,
                paddingTop: 20,
            }}>
                <Text style={{
                    fontFamily: "Manrope_300Light",
                    fontSize: 14,
                    color: "#21334F"
                }}>My Referrals</Text>
                <View style={{
                    flex: 1,
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image source={require("../../../../assets/no_referrers.png")} />
                    </View>
                    <TouchableHighlight style={{marginVertical: 20}} underlayColor="#114E93" onPress={() => {
                    
                    }} >
                        <View style={{
                            backgroundColor: "#147DF5",
                            height: 48,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Feather name="share" size={24} color="#FFF" />
                            <Text style={{color: "#FFF", fontFamily: "Manrope_700Bold", marginLeft: 10}}>Invite more friends</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

export default ReferSettings;