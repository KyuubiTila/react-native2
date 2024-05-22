import { Button, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { StatusBar } from "expo-status-bar";

export default function index() {
  return (
    <SafeAreaView className="bg-yellow-500 h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Hey, I am <Text className="text-blue-400">Tila</Text> and here is
              my building app for learning React Native{" "}
            </Text>
          </View>
          <Text className="text-lg fonst-pregular text-gray-100 mt-7 text-center">
            Everything I can lay my hands on while learning on this journey of
            React Native
          </Text>

          <View className="flex-col mt-4 ">
            <View className="bg-blue-300 border rounded-xl my-2 ">
              <Button
                title="Continue To-Do App"
                onPress={() => router.push("/todoHome")}
              />
            </View>
            <View className="bg-orange-500 border rounded-xl my-2">
              <Button
                title="Continue Guess App"
                onPress={() => router.push("/guessHome")}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
