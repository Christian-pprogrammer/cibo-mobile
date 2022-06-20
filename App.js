import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import Faster from './app/components/Faster/Faster';
import Navbar from './app/components/Navbar/Navbar';
import HomeScreen from './app/screens/Home/HomeScreen';

export default function App() {
  console.log(StatusBar.currentHeight)
  return (
    <ScrollView style={styles.container}>
      <HomeScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdecec',
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 10
  },
});
