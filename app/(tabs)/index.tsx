import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Todo = Doc<"todos">;

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const styles = createHomeStyles(colors);
  const todos = useQuery(api.todos.getTodos);
  const isLoading = todos === undefined;
  if (isLoading) {
    return <LoadingSpinner />;
  }
  const rendeerTodoItem = ({ item }: { item: Todo }) => {
    return (
      <View style={styles.todoItemWrapper}>
        <LinearGradient
          colors={colors.gradients.surface}
          style={styles.todoItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity
            style={styles.checkbox}
            activeOpacity={0.7}
            onPress={() => {}}
          >
            <LinearGradient
              colors={
                item.isCompleted
                  ? colors.gradients.success
                  : colors.gradients.muted
              }
              style={[
                styles.checkboxInner,
                {
                  borderColor: item.isCompleted ? "transparent" : colors.border,
                },
              ]}
            ></LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  };
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <Header />
        <TodoInput />
        <FlatList
          data={todos}
          keyExtractor={(item) => item._id}
          renderItem={rendeerTodoItem}
          style={styles.todoList}
          contentContainerStyle={styles.todoListContent}
        />

        <TouchableOpacity style={{ padding: 20 }} onPress={toggleDarkMode}>
          <Text>Toggle</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
