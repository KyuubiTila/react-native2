import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "@/screens/StartGameScreen";

export default function GuessHome() {
  return (
    <LinearGradient
      // colors={["rgba(0,0,0,0.8)", "transparent"]}
      colors={["#FFA500", "#FFCE44", "#FFDB58"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View className="bg-pink-400 border rounded-xl mx-4 ">
          <Button
            title="Return Home"
            color={"black"}
            onPress={() => router.push("/")}
          />
        </View>

        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-center min-h-[70vh] p-4">
            <Text className="text-3xl text-white font-bold text-center mb-8">
              Welcome to Guess App
            </Text>
            <StartGameScreen />
          </View>
        </ScrollView>

        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
    </LinearGradient>
  );
}
