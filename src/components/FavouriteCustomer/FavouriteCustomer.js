import React from 'react'
import { View, Image, Text, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function FavouriteCustomer({ name, image, location, onPress }) {

    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor='#ccc'>
            <View style={{
                flexDirection: 'row',
                width: '100%',
                height: 64,
                backgroundColor: '#fff',
                shadowOffset: { width: 0, height: 2.5 },
                shadowColor: '#BEBEBE',
                shadowOpacity: 1,
                elevation: 10,
                borderRadius: 5,
                alignItems: 'center',
                paddingHorizontal: 20
            }}>
                <Image source={image} style={{width: 42, height: 42, resizeMode: 'cover', borderRadius: 21}} />
                <View style={{
                    marginStart: 10,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View>
                        <Text style={{fontFamily: 'Manrope_700Bold', fontSize: 14}}>{name}</Text>
                        <Text style={{fontFamily: 'Manrope_400Regular', fontSize: 14}}>{location}</Text>
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
                </View>
            </View>
        </TouchableHighlight>
    );
}

export default FavouriteCustomer;