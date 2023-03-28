import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

function GoBack({ navigation, title = "" }) {
    return (
        
            <View style={[styles.toolbar, {marginTop: Constants.statusBarHeight}]}>
                <TouchableWithoutFeedback onPress={() => {
                    navigation.goBack()
                }}>
                    <View style={{flexDirection: "row", alignItems: "center", position: "absolute", zIndex: 9999, left: 10}}>
                        <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
                        <Text style={styles.toolbarTxt}>Back</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={[styles.toolbarTxt, {textAlign: "center", flex: 1, fontFamily: "Manrope_700Bold", fontSize: 14}]}>{title}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    toolbar: {
      width: "100%",
      height: 68,
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white"
    },
    toolbarTxt: {
      fontFamily: "Manrope_400Regular",
      fontSize: 14,
    },
});

export default GoBack;