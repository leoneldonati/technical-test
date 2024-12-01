import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function MonthlyStatsScreen() {
  const monthlyStats = [
    {
      id: "1",
      month: "November",
      distance: "120 km",
      time: "12h",
      elevation: "1,200 m",
    },
    {
      id: "2",
      month: "October",
      distance: "100 km",
      time: "10h",
      elevation: "1,000 m",
    },
    {
      id: "3",
      month: "September",
      distance: "80 km",
      time: "8h",
      elevation: "800 m",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={monthlyStats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.statsCard}
            onPress={() => router.navigate("/activities")}
          >
            <Text style={styles.month}>{item.month}</Text>
            <Text style={styles.statsDetails}>
              {item.distance} | {item.time} | {item.elevation}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  statsCard: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  month: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statsDetails: {
    marginTop: 4,
    color: "#555",
  },
});
