import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router"
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Link style={styles.text} href="/add">Add</Link>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  text: {
    color: "#fff"
  }
});
