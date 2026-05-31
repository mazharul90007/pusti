import { Meal } from "@/storage/meals";
import { colors } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import { Share, StyleSheet, TouchableOpacity } from "react-native";

type ShareButtonProps = {
  meals: Meal[];
};

const ShareButton = ({ meals }: ShareButtonProps) => {
  const handleShare = async () => {
    const total = meals.reduce(
      (acc, meal) => ({
        calories: acc.calories + meal.calories,
        protein: acc.protein + meal.protein,
        carbs: acc.carbs + meal.carbs,
        fat: acc.fat + meal.fat,
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0 },
    );

    await Share.share({
      message: `Pusti daily summary\n\nCalories: ${total.calories}\nProtein: ${total.protein}g\nCarbs: ${total.carbs}g\nFat: ${total.fat}g\n\nMeals: ${meals.length} logged today`,
    });
  };
  return (
    <TouchableOpacity onPress={handleShare}>
      <Ionicons name="share-outline" size={24} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default ShareButton;

const styles = StyleSheet.create({});
