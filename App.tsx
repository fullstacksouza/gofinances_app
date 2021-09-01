import React from "react";
import { ThemeProvider } from "styled-components";
import { StyleSheet } from "react-native";
import Dashboard from "./src/screens/Dashboard/Dashboard";
import theme from "./src/global/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
