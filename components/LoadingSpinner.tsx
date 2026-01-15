import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { ActivityIndicator, Animated, Easing } from "react-native";

import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";

const LoadingSpinner = () => {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);

  const scale = useRef(new Animated.Value(1)).current;
  const glow = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Breathing animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.08,
          duration: 900,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 900,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Glow pulse
    Animated.loop(
      Animated.sequence([
        Animated.timing(glow, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(glow, {
          toValue: 0,
          duration: 1200,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Text fade-in
    Animated.timing(textOpacity, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={styles.container}
    >
      <Animated.View
        style={[styles.loadingContainer, { transform: [{ scale }] }]}
      >
        {/* Glow Ring */}
        <Animated.View
          style={{
            position: "absolute",
            width: 90,
            height: 90,
            borderRadius: 45,
            backgroundColor: colors.primary,
            opacity: glow.interpolate({
              inputRange: [0, 1],
              outputRange: [0.12, 0.28],
            }),
          }}
        />

        <ActivityIndicator size="large" color={colors.primary} />

        <Animated.Text style={[styles.loadingText, { opacity: textOpacity }]}>
          Syncing your todos ✨
        </Animated.Text>
      </Animated.View>
    </LinearGradient>
  );
};

export default LoadingSpinner;
