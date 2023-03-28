import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FavouriteCustomers from './src/screens/supplier-screens/FavouriteCustomers/FavouriteCustomers';
import Supplier from './src/screens/supplier-screens/Supplier';

export default function OrganizerApp() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <SafeAreaProvider style={{width: '100%', height: '100%'}}>
        {/* <Supplier /> */}
        {/* <FavouriteCustomers /> */}
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
