import React from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';

function OrderHistoryItem({ image, title, status, date, subtitle }) {

    return (
       <View style={{
           padding: 15,
           backgroundColor: '#fff',
           borderBottomWidth: 1,
           borderBottomColor: '#E5E5E5'
       }}>
           <View style={styles.container}>
                <Image style={styles.cardImage} source={image} />
                <View style={styles.section}>
                    <View style={styles.section1}>
                        <Text style={styles.section1DetailsTxt}>{title}</Text>
                        <Text style={[styles.historyItemStatus, { color: status.color, backgroundColor: status.bgColor }]}>{status.text}</Text>
                    </View>
                    <View style={styles.section2}>
                        <Text style={styles.section2DetailsTxt}>{subtitle}</Text>
                        <Text style={styles.historyItemDate}>{date}</Text>
                    </View>
                </View>
            </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
        height: 84,
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 15,
        ...Platform.select({
            ios: {
                shadowColor: '#ccc',
                shadowRadius: 5,
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
            },
            android: {
                elevation: 10
            }
        })
    },
    cardImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    section: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
        height: '100%'
    },
    section1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    section2: {
        flexDirection: 'row',
        marginTop: 2,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    section1DetailsTxt: {
        fontSize: 14,
        color: '#21334F',
        fontFamily: 'Manrope_400Regular'
    },
    section2DetailsTxt: {
        fontSize: 12,
        color: '#21334F',
        fontFamily: 'Manrope_300Light'
    },
    historyItemStatus: {
        color: '#38B000',
        backgroundColor: '#38B0000D',
        padding: 5,
        fontFamily: 'Manrope_500Medium'
    },
    historyItemDate: {
        fontSize: 12,
        color: '#21334F',
        fontFamily: 'Manrope_300Light'
    }
});

export default OrderHistoryItem;