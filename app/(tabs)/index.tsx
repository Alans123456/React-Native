import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={Styles.container}>
      <Text>Finally success.</Text>
      <Text>Finally success.</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
