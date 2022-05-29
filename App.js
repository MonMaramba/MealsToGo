import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';
import { Searchbar } from 'react-native-paper';

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar  />
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: { flex: 1, marginTop: StatusBar.currentHeight },
  search: { padding: 16, backgroundColor: 'green' },
  list: { flex: 1, padding: 16, backgroundColor: 'blue' }
});
