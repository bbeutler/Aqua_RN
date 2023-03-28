import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';


function SnackBar({ text, textColor="#000", icon, iconColor="#000", backgroundColor="#FFFFFF" }) {
    return (
        <View style={{width: Dimensions.get('window').width, padding: 20, top: 0, position: "absolute", marginTop: Constants.statusBarHeight}}>
          <View style={{
            flexDirection: "row", 
            alignItems: "center", 
            paddingHorizontal: 20,
            width: "100%",
            height: 48,
            backgroundColor: backgroundColor,
            shadowOffset: { width: 0, height: 2.5 },
            shadowColor: '#BEBEBE',
            shadowOpacity: 1,
            elevation: 10,
          }}>
            <FontAwesome name={icon} size={24} color={iconColor} />
            <Text style={[{marginLeft: 10}, {color: textColor}]}>{text}</Text>
          </View>
        </View>
      );
}

export default SnackBar;