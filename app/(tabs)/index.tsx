import { Button, StyleSheet, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.titleContainer}>
      <Button
        title="Inicia sesion"
        onPress={() => {
          console.log("LOGIN");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    minHeight: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
