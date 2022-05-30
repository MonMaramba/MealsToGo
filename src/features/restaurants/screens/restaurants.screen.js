import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurant-info.component';


export const RestaurantsScreen = () => (
    <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <RestaurantInfo />
        </View>
      </SafeAreaView>
)

const styles = StyleSheet.create({
    safeAreaView: { flex: 1, marginTop: StatusBar.currentHeight },
    search: { padding: 16},
    list: { flex: 1, padding: 16, backgroundColor: 'blue' }
  });