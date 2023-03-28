import React from 'react';
import { View, Text, TouchableWithoutFeedback, Modal, FlatList, TouchableHighlight } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function AppPicker({ items, placeholder = "Select", selectedItem, setSelectedItem, formik }) {
    const [ modalDisplay, setModalDisplay ] = React.useState(false)
    // const [ selectedItem, setSelectedItem ] = React.useState();
    // console.log(formik.validateForm);
    return (
        <>
            <TouchableWithoutFeedback onPress={()=> setModalDisplay(true)}>
                <View style={{flexDirection: "row", alignItems: "center", height: "100%", width: "100%"}}>
                    <Text style={{flex: 1, color: selectedItem ? "#21334F" : "#C4C4C4"}}>{ selectedItem.id ? selectedItem.companyName : placeholder}</Text>
                    <Feather name="chevron-down" size={24} color="black" />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalDisplay} animationType="slide">
                <SafeAreaProvider>
                    <SafeAreaView style={{width: "100%", height: "100%"}}>
                        <TouchableWithoutFeedback onPress={() => {
                            setModalDisplay(false);
                        }}>
                            <View style={{width: "100%", alignItems: "flex-end", paddingHorizontal: 20}}>
                                <Ionicons name="close-outline" size={24} color="black" />
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={{  }}>
                            <FlatList 
                                data={items}
                                keyExtractor={item => item.id}
                                renderItem={({item}) => {
                                    return (
                                        <TouchableHighlight onPress={() => {
                                            setSelectedItem(item);
                                            formik.values.company = item.id;
                                            setModalDisplay(false);
                                        }} underlayColor="#00000010">
                                            <Text style={{fontFamily: "Manrope_700Bold", fontSize: 18, padding: 10, margin: 5, textAlign: "center"}}>{item.companyName}</Text>
                                        </TouchableHighlight>
                                    );
                                }}/>
                        </View>
                    </SafeAreaView>
                </SafeAreaProvider>
            </Modal>
        </>
    );
}

export default AppPicker;