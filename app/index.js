import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from "expo-router"
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContent}>
        <View style={styles.week}>
          <View style={styles.day}>
            <Text style={styles.dayText}>Monday</Text>
            <View style={styles.showsContainer}></View>
          </View>
          <View style={styles.day}>
            <Text style={styles.dayText}>Tuesday</Text>
            <View style={styles.showsContainer}></View>
          </View>
          <View style={styles.day}>
            <Text style={styles.dayText}>Wednesday</Text>
            <View style={styles.showsContainer}></View>
          </View>
          <View style={styles.day}>
            <Text style={styles.dayText}>Thursday</Text>
            <View style={styles.showsContainer}></View>
          </View>
          <View style={styles.day}>
            <Text style={styles.dayText}>Friday</Text>
            <View style={styles.showsContainer}></View>
          </View>
          <View style={styles.day}>
            <Text style={styles.dayText}>Saturday</Text>
            <View style={styles.showsContainer}></View>
          </View>
          <View style={styles.day}>
            <Text style={styles.dayText}>Sunday</Text>
            <View style={styles.showsContainer}></View>
          </View>
        </View>
      </ScrollView>
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
    width: "100%"
  },
  text: {
    color: "#fff"
  },
  week: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  day: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#1A1A1A",
    width: "80%",
    marginBottom: 15,
    padding: 10,
    borderRadius: 5
  },
  showsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  dayText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20
  },
  scrollContent: {
    width: "100%"
  }
});
