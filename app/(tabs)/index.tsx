import {
  Image,
  Platform,
  View,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useState } from "react";

export default function HomeScreen() {
  const [enteredGoal, setEnteredGoal] = useState<string>("");
  const [goals, setGoals] = useState<string[]>([]);

  const goalInputHandler = (inputText: string) => {
    setEnteredGoal(inputText);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, enteredGoal]);
    setEnteredGoal(""); // Clear the input field after adding the goal
  };
  // justify-center min-h-[100vh]
  return (
    <SafeAreaView className="bg-green-300 h-full">
      <View className="w-full px-4 ">
        <View className="items-center flex-row justify-between  pb-8 border-b border-b-gray-800">
          <TextInput
            className="w-4/5 border text-sm rounded p-2 border-blue-900"
            placeholder="Your course goals"
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <Button color="#841584" title="Add Goal" onPress={addGoalHandler} />
        </View>
        <Text className="flex mt-8 bg-slate-200 text-xl">List of Goals...</Text>
        <View>
          <ScrollView>
            {goals.map((goal, index) => (
              <View
                key={index}
                className="mt-2 text-xl bg-blue-200 border rounded-lg p-2 mb-2 "
              >
                <Text className="text-red-800">{goal}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
