import { Meal } from "@/storage/meals";
import { StyleSheet, View } from "react-native";
import PustiCard from "./PustiCard";

type PustGridProps = {
  meals: Meal[];
};

export default function PustiGrid({ meals }: PustGridProps) {
  const total = meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fat: acc.fat + meal.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  );
  return (
    <View style={styles.grid}>
      <PustiCard
        label="Calories"
        value={`${total.calories}`}
        goal="2,000"
        color="#ff6b6b"
      />
      <PustiCard
        label="Protein"
        value={`${total.protein}`}
        goal="150g"
        color="#4ecdc4"
      />
      <PustiCard
        label="Carbs"
        value={`${total.carbs}`}
        goal="250g"
        color="#ffd93d"
      />
      <PustiCard
        label="Fat"
        value={`${total.fat}`}
        goal="65g"
        color="#6bcb77"
      />
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
