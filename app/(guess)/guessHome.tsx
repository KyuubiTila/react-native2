import { Button, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { StatusBar } from "expo-status-bar";

export default function GuessHome() {
  return (
    <SafeAreaView className="bg-yellow-500 h-full">
      <View className="bg-pink-400 border rounded-xl mx-4 ">
        <Button
          title="Return Home"
          color={"black"}
          onPress={() => router.push("/")}
        />
      </View>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Welcome to Guess App
            </Text>
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
