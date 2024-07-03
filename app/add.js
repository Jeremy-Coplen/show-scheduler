import React from "react"
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Link } from "expo-router"
import { StatusBar } from 'expo-status-bar';
import CalendarPicker from "react-native-calendar-picker";
import DatePicker from "react-native-date-picker";

export default function App() {
  const [name, onChangeName] = React.useState("")
  const [date, onChangeDate] = React.useState({})
  const [time, onChangeTime] = React.useState(0)
  const [dayNight, onChangeDayNight] = React.useState("am")

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.text}>Name:</Text>
          <TextInput
          style={styles.nameInput} 
          onChangeText={onChangeName} 
          value={name} />
        </View>
        <View>
          <Text style={styles.text}>Start Date:</Text>
        </View>
      </View>
      <Link href="/" style={styles.text}>Home</Link>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: "flex-start",
    width: "100%"
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%"
  },
  text: {
    color: "#fff",
    marginRight: 10,
    fontWeight: "700",
    fontSize: 15
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 25
  },
  nameInput: {
    padding: 10,
    backgroundColor: "#1A1A1A",
    width: "50%",
    borderWidth: 1,
    borderColor: "#fff",
    color: "#fff",
    height: 40
  }
});
