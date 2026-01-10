import { ThemeProvider } from "@/hooks/useTheme";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";

export default function RootLayout() {
  const client = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
    unsavedChangesWarning: false,
  });
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
