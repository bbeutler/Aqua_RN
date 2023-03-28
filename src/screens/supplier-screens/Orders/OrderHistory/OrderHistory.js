import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { useFonts, Manrope_400Regular, Manrope_700Bold, Manrope_300Light, Manrope_500Medium } from '@expo-google-fonts/manrope';

import OrderHistoryItem from '../../../../components/OrderHistoryItem/OrderHistoryItem';

function OrderHistory(props) {

    let [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_700Bold,
        Manrope_300Light,
        Manrope_500Medium
    });

    if (!fontsLoaded) {
        return (
            <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>loading...</Text>
            </View>
        );
    }

    const data = [
        {
            id: 1,
            title: "Arizona Inc.",
            image: require('../../../../../assets/orders/image1.png'),
            subtitle: "6 packs of big bottle water",
            status: {text: "Delivered", color: "#38B000", bgColor: "#38B0000D"},
            date: "23/3/2022"
        },
        {
            id: 2,
            title: "Arizona Inc.",
            image: require('../../../../../assets/orders/image1.png'),
            subtitle: "6 packs of big bottle water",
            status: {text: "Failed", color: "#EF233C", bgColor: "#EF233C0D"},
            date: "23/3/2022"
        },
        {
            id: 3,
            title: "Arizona Inc.",
            image: require('../../../../../assets/orders/image1.png'),
            subtitle: "6 packs of big bottle water",
            status: {text: "Delivered", color: "#38B000", bgColor: "#38B0000D"},
            date: "23/3/2022"
        },
        {
            id: 4,
            title: "Arizona Inc.",
            image: require('../../../../../assets/orders/image1.png'),
            subtitle: "6 packs of big bottle water",
            status: {text: "Failed", color: "#EF233C", bgColor: "#EF233C0D"},
            date: "23/3/2022"
        },
        {
            id: 5,
            title: "Arizona Inc.",
            image: require('../../../../../assets/orders/image1.png'),
            subtitle: "6 packs of big bottle water",
            status: {text: "Delivered", color: "#38B000", bgColor: "#38B0000D"},
            date: "23/3/2022"
        },
        {
            id: 6,
            title: "Arizona Inc.",
            image: require('../../../../../assets/orders/image1.png'),
            subtitle: "6 packs of big bottle water",
            status: {text: "Failed", color: "#EF233C", bgColor: "#EF233C0D"},
            date: "23/3/2022"
        }
    ];
    return (
            <FlatList 
                data={data}
                keyExtractor={i => i.id}
                renderItem={({ item }) => {
                    return (
                        <OrderHistoryItem key={item.id} 
                            image={item.image}
                            title={item.title} 
                            status={item.status} 
                            date={item.date} 
                            subtitle={item.subtitle}/>
                    );
                }}/>
            );
}

export default OrderHistory;