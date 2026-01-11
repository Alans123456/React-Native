import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  const todos = useQuery(api.todos.getTodos);
  console.log(todos);
  const addTodo = useMutation(api.todos.addTodo);
  return (
    <View style={Styles.container}>
      <Text>Finally success.</Text>
      <TouchableOpacity style={{ padding: 20 }} onPress={toggleDarkMode}>
        <Text>Toggle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 20 }}
        onPress={() => addTodo({ text: "Need to practice more" })}
      >
        <Text>Add Todo</Text>
      </TouchableOpacity>
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
