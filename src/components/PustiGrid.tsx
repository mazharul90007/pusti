import { StyleSheet, View } from "react-native";
import PustiCard from "./PustiCard";

export default function PustiGrid() {
  return (
    <View style={styles.grid}>
      <PustiCard label="Calories" value="0" goal="2,000" color="#ff6b6b" />
      <PustiCard label="Protein" value="0g" goal="150g" color="#4ecdc4" />
      <PustiCard label="Carbs" value="0g" goal="250g" color="#ffd93d" />
      <PustiCard label="Fat" value="0g" goal="65g" color="#6bcb77" />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
