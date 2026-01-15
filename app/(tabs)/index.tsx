import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const styles = createHomeStyles(colors);
  const todos = useQuery(api.todos.getTodos);
  const isLoading = todos === undefined;
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <Header />
        <TodoInput />
        {todos.map((todo) => (
          <Text key={todo._id}>{todo.text}</Text>
        ))}
        <TouchableOpacity style={{ padding: 20 }} onPress={toggleDarkMode}>
          <Text>Toggle</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
