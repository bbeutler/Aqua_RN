import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function NotificationSettings(props) {
    const [isPushNotificationEnabled, setisPushNotificationEnabled] = useState(true);
    const togglePushNotificationSwitch = () => setisPushNotificationEnabled(previousState => !previousState);
    
    const [isEmailNotificationEnabled, setisEmailNotificationEnabled] = useState(false);
    const toggleEmailNotificationSwitch = () => setisEmailNotificationEnabled(previousState => !previousState);
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#FFF"
        }}>
            <View style={{
                paddingHorizontal: 20
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: 10
                }}>
                    <View style={{flex: 1}}>
                        <Text style={{fontFamily: "Manrope_700Bold", color: "#21334F"}}>Push notification</Text>
                        <Text style={{fontFamily: "Manrope_300Light", color: "#21334F", flexShrink: 1}}>Allows you receive notification on phone screen.</Text>
                    </View>
                    <Switch
                        trackColor={{ false: '#21334F0A', true: '#14A800' }}
                        thumbColor={isPushNotificationEnabled ? '#FFF' : '#FFF'}
                        ios_backgroundColor="#21334F0A"
                        onValueChange={togglePushNotificationSwitch}
                        value={isPushNotificationEnabled}
                        style={{
                            transform: [{ scaleX: .6 }, { scaleY: .6 }]
                        }}
                    />
                </View>
                <View style={{height: 1, backgroundColor: "#DADADA"}}/>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: 10
                }}>
                    <View style={{flex: 1}}>
                        <Text style={{fontFamily: "Manrope_700Bold", color: "#21334F"}}>Email notification</Text>
                        <Text style={{fontFamily: "Manrope_300Light", color: "#21334F", flexShrink: 1}}>Allows you receive Eemail notification from the app.</Text>
                    </View>
                    <Switch
                        trackColor={{ false: '#21334F0A', true: '#14A800' }}
                        thumbColor={isEmailNotificationEnabled ? '#FFF' : '#FFF'}
                        ios_backgroundColor="#21334F0A"
                        onValueChange={toggleEmailNotificationSwitch}
                        value={isEmailNotificationEnabled}
                        style={{
                            transform: [{ scaleX: .6 }, { scaleY: .6 }]
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

export default NotificationSettings;