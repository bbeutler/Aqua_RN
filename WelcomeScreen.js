import React from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function WelcomeScreen({ navigation }) {
    return (
        <View style={{flex: 1}}>
            <ImageBackground resizeMode='cover' source={require("./assets/welcome_screen_bg.png")} style={styles.welcomeBg}>
                <SafeAreaView style={{paddingVertical: 20}}>
                        <View style={styles.welcomeTextContainer}>
                            <Text style={styles.welcomeScreenText}>Explore quality water with excellence</Text>
                            <Text style={styles.welcomeScreenSecondaryText}>The water quality is in execellent condition</Text>
                        </View>
                        <View style={styles.btnsContainer}>
                            <TouchableHighlight style={{marginTop: 20}} underlayColor="#114E93" onPress={() => {
                                // navigation.navigate('SignUp', {
                                //     userType: "consumer"
                                // })
                                navigation.navigate("ConsumerRegisterationScreen", {
                                    userType: "consumer"
                                })
                            }} >
                                <View style={{
                                    backgroundColor: "#147DF5",
                                    height: 48,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                    <Text style={{color: "#FFF", fontFamily: "Manrope_700Bold"}}>Consumer</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight style={{marginTop: 20}} underlayColor="#00000010" onPress={() => {
                                // navigation.navigate('SignUp', {
                                //     userType: "supplier"
                                // })
                                navigation.navigate("SupplierRegisterationScreen", {
                                    userType: "supplier"
                                })
                            }} >
                                <View style={{
                                    borderWidth: 2,
                                    borderColor: "#fff",
                                    height: 48,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                    <Text style={{color: "#FFF", fontFamily: "Manrope_700Bold"}}>Supplier</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    welcomeBg: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        // alignItems: 'center'
    },
    btnsContainer: {
        width: '100%',
        paddingHorizontal: 20
        // padding: 20
    },
    logo: {
        width: 100,
        height: 100,
    },
    welcomeTextContainer: {
        // position: 'absolute',
        // alignItems: 'center',
        // top: 50
        paddingHorizontal: 20
    },
    welcomeScreenText: {
        fontFamily: "Manrope_800ExtraBold",
        fontSize: 24,
        color: "#FFF",
    },
    welcomeScreenSecondaryText: {
        fontFamily: "Manrope_400Regular",
        fontSize: 14,
        color: "#FFF",
    }
});

export default WelcomeScreen;