import React from "react"
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Link } from "expo-router"
import { StatusBar } from 'expo-status-bar';
import DatePicker from "react-native-date-picker";

export default function App() {
  const [name, onChangeName] = React.useState("")
  const [date, onChangeDate] = React.useState({})
  const [time, onChangeTime] = React.useState(0)
  const [dayNight, onChangeDayNight] = React.useState("am")
  const [TBA, onChangeTBA] = React.useState(false)

  const regularSelector = {
    backgroundColor: TBA ? "#fff" : "#138af9"
  }

  const TBASelector = {
    backgroundColor: TBA ? "#138af9" : "#fff"
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.typeForm}>
            <Text style={styles.text}>Type:</Text>
            <TouchableWithoutFeedback style={styles.typeContainer} onPress={() => onChangeTBA(false)}>
              <View style={styles.typeInputContainer}>
                <View style={styles.typeSelector}>
                  <View style={[styles.typeDot, regularSelector]}></View>
                </View>
                <Text style={styles.text}>Regular</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback style={styles.typeContainer} onPress={() => onChangeTBA(true)}>
              <View style={styles.typeInputContainer}>
                <View style={styles.typeSelector}>
                <View style={[styles.typeDot, TBASelector]}></View>
                </View>
                <Text style={styles.text}>TBA</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.text}>Name:</Text>
            <TextInput
            style={styles.nameInput} 
            onChangeText={onChangeName} 
            value={name} />
          </View>
          {
            TBA
            ?
              null
            :
              <View>
                <Text style={styles.text}>Start Date:</Text>
              </View>
          }
        </View>
        <Link href="/" style={styles.text}>Home</Link>
        <StatusBar style="light" />
      </View>
    </TouchableWithoutFeedback>
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
  },
  typeForm: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 25
  },
  typeSelector: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 10,
    height: 10,
    marginRight: 5,
    borderRadius: 50
  },
  typeDot: {
    width: 8,
    height: 8,
    borderRadius: 50
  },
  typeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  typeInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
