import { api } from "@/convex/_generated/api";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const todos = useQuery(api.todos.getTodos);
  console.log(todos);
  const addTodo = useMutation(api.todos.addTodo);
  const clearall = useMutation(api.todos.clearAll);
  const styles = createstyles(colors);
  return (
    <View style={styles.container}>
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
      <TouchableOpacity style={{ padding: 20 }} onPress={() => clearall()}>
        <Text>Clear All</Text>
      </TouchableOpacity>
    </View>
  );
}

const createstyles = (colors: ColorScheme) => {
  const Styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.bg,
    },
    text: {
      color: colors.text,
    },
  });
  return Styles;
};
