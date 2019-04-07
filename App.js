import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <TabBar />
          <TotalWidget />
          <CardList />
        </View>
      </View>
    );
  }
}

const itemList = [
  { title: "Credit card", value: -532 },
  { title: "Bank deposit", value: 200 },
  { title: "Car loan", value: 6730 },
  { title: "Cash", value: -47 }
];
const CardList = () => (
  <View style={styles.cardListContainer}>
    {itemList.map(item => (
      <Card key={item.title} title={item.title} value={item.value} />
    ))}
  </View>
);

const Card = ({ title, value }) => (
  <View style={styles.cardContainer}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardValue}>${value}</Text>
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
    <TabItem text="DAILY" />
    <TabItem text="WEEKLY" />
    <TabItem text="MONTHLY" selected={true} />
    <TabItem text="YEARLY" />
  </View>
);

const TabItem = ({ text, selected }) => (
  <View style={selected ? styles.tabItemSelected : styles.tabItem}>
    <Text style={styles.tabBarText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#F8777D"
  },
  contentContainer: {
    flex: 1,
    marginTop: 90,
    alignItems: "center"
  },
  cardListContainer: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    maxHeight: "50%"
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    minHeight: "15%",
    maxHeight: "20%",
    minWidth: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginTop: 10
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
    fontSize: 28,
    fontWeight: "600",
    textAlign: "left"
  },
  buttonContainer: {
    height: "5%",
    width: "80%",
    backgroundColor: "#65BCBF",
    borderRadius: 4
  },
  totalWidgetContainer: {
    flex: 1,
    maxHeight: "20%",
    minWidth: "80%",
    alignItems: "center",
    justifyContent: "center"
  },
  totalWidgetMainText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 40,
    margin: 5
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
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    maxHeight: "6%",
    minHeight: "6%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.1)"
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    opacity: 0.7
  },
  tabItemSelected: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#FFFF"
  },
  tabBarText: {
    color: "#FFFF",
    fontWeight: "bold",
    fontSize: 13
  }
});
