import { ThemeProvider } from "@/hooks/useTheme";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";

if (typeof window !== "undefined" && !window.addEventListener) {
  window.addEventListener = () => {};
}
if (typeof window !== "undefined" && !window.removeEventListener) {
  window.removeEventListener = () => {};
}

export default function RootLayout() {
  const client = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!);
  return (
    <ConvexProvider client={client}>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
  );
}
