import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const styles = createHomeStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <Text>Finally success.</Text>
        <TouchableOpacity style={{ padding: 20 }} onPress={toggleDarkMode}>
          <Text>Toggle</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
