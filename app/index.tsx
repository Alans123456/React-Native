import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={Styles.container}>
      <Text>Finally success.</Text>
      <Text>Finally success.</Text>
      <Link href="/about">About</Link>
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
