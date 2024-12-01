import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";

export default function ActivitiesScreen() {
  const [activities, setActivities] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  // Simula datos para actividades
  const mockActivities = [
    {
      id: "1",
      name: "Morning Run",
      date: "2024-11-28",
      distance: "5.2 km",
      time: "30 min",
      elevation: "50 m",
    },
    {
      id: "2",
      name: "Evening Walk",
      date: "2024-11-27",
      distance: "3.5 km",
      time: "20 min",
      elevation: "30 m",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setActivities(mockActivities);
      setLoading(false);
    }, 2000); // Simula un retraso de carga
  }, []);

  if (loading) {
    return (
      <ActivityIndicator style={styles.loader} size="large" color="#00f" />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.activityCard}>
            <Text style={styles.activityName}>{item.name}</Text>
            <Text style={styles.activityDetails}>
              {item.date} | {item.distance} | {item.time} | {item.elevation}
            </Text>
          </View>
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
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activityCard: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  activityName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  activityDetails: {
    marginTop: 4,
    color: "#555",
  },
});
