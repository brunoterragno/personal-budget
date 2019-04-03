import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8777D",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center"
  },
  cardContainer: {
    flex: 1,
    maxHeight: "10%",
    minWidth: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 8
  },
  cardTitle: {},
  cardValue: {}
});
