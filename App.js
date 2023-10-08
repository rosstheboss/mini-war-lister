import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar />
    </View>
  );
}

const backgroundColor = "#fff";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
});
