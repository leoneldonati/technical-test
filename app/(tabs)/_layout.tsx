import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Inicio" }} />

      <Tabs.Screen
        name="activities"
        options={{
          title: "Actividades",
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Estadísticas",
        }}
      />
    </Tabs>
  );
}
