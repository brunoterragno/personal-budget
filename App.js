import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TabBar />
        <TotalWidget />
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

const TotalWidget = () => (
  <View style={styles.totalWidgetContainer}>
    <Text style={styles.totalWidgetText}>BALANCE</Text>
    <Text style={styles.totalWidgetMainText}>-$171 559.80</Text>
    <Text style={styles.totalWidgetText}>+4.28%</Text>
  </View>
);

const TabBar = () => (
  <View style={styles.tabBarContainer}>
    <Text style={styles.tabBarText}>DAILY</Text>
    <Text style={styles.tabBarText}>WEEKLY</Text>
    <Text style={styles.tabBarTextSelected}>MONTHLY</Text>
    <Text style={styles.tabBarText}>YEARLY</Text>
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
    maxHeight: "9%",
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
  },
  totalWidgetContainer: {
    flex: 1,
    maxHeight: "9%",
    minWidth: "80%",
    alignItems: "center",
    justifyContent: "space-around"
  },
  totalWidgetMainText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 40
  },
  totalWidgetText: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 16,
    opacity: 0.8
  },
  tabBarContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    maxHeight: "5%"
  },
  tabBarTextSelected: {
    color: "#FFFF",
    fontWeight: "bold",
    fontSize: 13
  },
  tabBarText: {
    color: "#FFFF",
    fontWeight: "bold",
    fontSize: 13,
    opacity: 0.7
  }
});
