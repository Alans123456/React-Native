import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Todo = Doc<"todos">;

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const [editingId, setEditingId] = useState<Id<"todos"> | null>(null);
  const [editText, setEditText] = useState("");

  const styles = createHomeStyles(colors);
  const todos = useQuery(api.todos.getTodos);
  const isLoading = todos === undefined;
  const toggleTodo = useMutation(api.todos.toggleTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);
  const updateTodo = useMutation(api.todos.updateTodo);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  const handelToggleTodo = async (id: Id<"todos">) => {
    try {
      await toggleTodo({ id });
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  const handleDeleteTodo = async (id: Id<"todos">) => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => deleteTodo({ id }),
      },
    ]);
  };

  const handleEditTodo = (todo: Todo) => {
    setEditText(todo.text);
    setEditingId(todo._id);
  };

  const handleSaveEdit = async () => {
    if (editingId) {
      try {
        await updateTodo({ id: editingId, text: editText.trim() });
        setEditingId(null);
        setEditText("");
      } catch (error) {
        console.log("Error updating todo", error);
        Alert.alert("Error", "Failed to update todo");
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

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
            onPress={() => handelToggleTodo(item._id)}
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
            >
              {item.isCompleted && (
                <Ionicons name="checkmark" size={16} color="#fff" />
              )}
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.todoTextContainer}>
            {editingId === item._id ? (
              <View style={{ flex: 1 }}>
                <TextInput
                  value={editText}
                  onChangeText={setEditText}
                  style={[
                    styles.todoText,
                    {
                      borderWidth: 1,
                      borderColor: colors.border,
                      padding: 8,
                      borderRadius: 4,
                    },
                  ]}
                  autoFocus
                />
                <View style={styles.editButtons}>
                  <TouchableOpacity
                    onPress={handleSaveEdit}
                    activeOpacity={0.8}
                  >
                    <LinearGradient
                      colors={colors.gradients.success}
                      style={styles.editButton}
                    >
                      <Ionicons name="checkmark" size={16} color="#fff" />
                      <Text style={styles.editButtonText}>Save</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={handleCancelEdit}
                    activeOpacity={0.8}
                  >
                    <LinearGradient
                      colors={colors.gradients.muted}
                      style={styles.editButton}
                    >
                      <Ionicons name="close" size={16} color="#fff" />
                      <Text style={styles.editButtonText}>Cancel</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <>
                <Text
                  style={[
                    styles.todoText,
                    item.isCompleted && {
                      textDecorationLine: "line-through",
                      color: colors.textMuted,
                      opacity: 0.6,
                    },
                  ]}
                >
                  {item.text}
                </Text>
                <View style={styles.todoActions}>
                  <TouchableOpacity
                    onPress={() => handleEditTodo(item)}
                    activeOpacity={0.8}
                  >
                    <LinearGradient
                      colors={colors.gradients.warning}
                      style={styles.actionButton}
                    >
                      <Ionicons name="pencil" size={14} color="#fff" />
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleDeleteTodo(item._id)}
                    activeOpacity={0.8}
                  >
                    <LinearGradient
                      colors={colors.gradients.danger}
                      style={styles.actionButton}
                    >
                      <Ionicons name="trash" size={14} color="#fff" />
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
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
