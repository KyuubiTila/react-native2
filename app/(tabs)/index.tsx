import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoalItem from "@/components/GoalItem";
import GoalInput from "@/components/GoalInput";

export default function HomeScreen() {
  const [enteredGoal, setEnteredGoal] = useState<string>("");
  const [goals, setGoals] = useState<string[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const toggleModal = () => {
    setModalIsVisible((prevState) => !prevState);
  };

  const goalInputHandler = (inputText: string) => {
    setEnteredGoal(inputText);
  };

  const addGoalHandler = () => {
    if (enteredGoal.trim().length === 0) {
      return;
    }
    setGoals((currentGoals) => [...currentGoals, enteredGoal]);
    toggleModal();
    setEnteredGoal("");
  };

  const deleteGoalHandler = (goalIndex: number) => {
    setGoals((currentGoals) =>
      currentGoals.filter((_, index) => index !== goalIndex)
    );
  };

  return (
    <SafeAreaView className="bg-yellow-500 h-full">
      <View className="bg-blue-400 border rounded-xl mx-4 ">
        <Button title="Add new goal" color={"black"} onPress={toggleModal} />
      </View>
      <View className="w-full px-4 ">
        {modalIsVisible && (
          <GoalInput
            goalInputHandler={goalInputHandler}
            addGoalHandler={addGoalHandler}
            enteredGoal={enteredGoal}
            toggleModal={toggleModal}
          />
        )}
        <View className="bg-blue-200 border items-center rounded-xl   mt-8 p-2 ">
          <Text className="text-xl">LIST OF GOALS...</Text>
        </View>
        <View>
          <FlatList
            data={goals}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <GoalItem
                itemData={{ item }}
                deleteGoal={() => deleteGoalHandler(index)}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
