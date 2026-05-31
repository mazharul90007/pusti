import CopyButton from "@/components/CopyButton";
import HomeHeader from "@/components/HomeHeader";
import PustiGrid from "@/components/PustiGrid";
import RecentMeals from "@/components/RecentMeals";
import ShareButton from "@/components/ShareButton";
import { getMeals, Meal } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>PUSTI</Text>
      <HomeHeader />
      <View style={styles.shareButtonContainer}>
        <CopyButton meals={meals} />
        <ShareButton meals={meals} />
      </View>
      <PustiGrid meals={meals} />
      <RecentMeals meals={meals} onDelete={loadMeals} />
    </View>
  );
}

const styles = StyleSheet.create({
  shareButtonContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 14,
    justifyContent: "flex-end",
    alignItems: "baseline",
  },
});
