import HomeHeader from "@/components/HomeHeader";
import PustiGrid from "@/components/PustiGrid";
import RecentMeals from "@/components/RecentMeals";
import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>PUSTI</Text>
      <HomeHeader />
      <PustiGrid />
      <RecentMeals />
    </View>
  );
}
