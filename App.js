import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card />
        <MyButton title="Title" />
      </View>
    );
  }
}

const Card = () => (
  <View style={styles.cardContainer}>
    <Text style={styles.cardTitle}>Title</Text>
    <Text style={styles.cardValue}>$0</Text>
  </View>
);

const MyButton = ({ title }) => (
  <View style={styles.buttonContainer}>
    <Button title={title} color="#FFF" onPress={() => {}} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8777D",
    alignItems: "center",
    justifyContent: "space-around"
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center"
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    maxHeight: "8%",
    minWidth: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 8
  },
  cardTitle: {
    marginLeft: 10,
    fontWeight: "500",
    fontSize: 16,
    color: "#232C2D"
  },
  cardValue: {
    marginLeft: 10,
    color: "#65BCBF",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "left"
  },
  buttonContainer: {
    height: "5%",
    minWidth: "80%",
    backgroundColor: "#65BCBF",
    borderRadius: 4
  }
});
