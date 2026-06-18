import MealItem from "@/components/MealItem";
import { clearAllMeals, getMeals, Meal } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MealsScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
  };

  const handleClearAllMeals = async () => {
    await clearAllMeals();
    loadMeals();
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>All Meal Items</Text>
      <TouchableOpacity onPress={handleClearAllMeals}>
        <View style={styles.clearButtonContainer}>
          <Text style={styles.clearButton}>Clear All</Text>
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 30 }}>
        {meals.length === 0 ? (
          <Text style={globalStyles.empty}>No meals logged yet.</Text>
        ) : (
          meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.carbs}
              fat={meal.fat}
              onDelete={loadMeals}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  clearButtonContainer: {
    marginTop: 16,
    marginBottom: 8,
    padding: 6,
    borderWidth: 2,
    borderColor: "#800020",
    borderRadius: 12,
    alignItems: "center",
  },
  clearButton: {
    color: "red",
    fontSize: 16,
  },
});
