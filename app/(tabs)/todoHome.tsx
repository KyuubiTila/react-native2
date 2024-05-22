import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoalItem from "@/components/GoalItem";
import GoalInput from "@/components/GoalInput";
import { router } from "expo-router";

export default function HomeScreen() {
  const [enteredGoal, setEnteredGoal] = useState<string>("");
  const [goals, setGoals] = useState<string[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const toggleModal = () => {
    setModalIsVisible((prevState) => !prevState);
  };

  const toggleModalCancel = () => {
    setModalIsVisible((prevState) => !prevState);
    setEnteredGoal("");
  };

  const goalInputHandler = (inputText: string) => {
    setEnteredGoal(inputText);
  };

  const addGoalHandler = () => {
    if (enteredGoal.trim().length === 0) {
      return;
    }
    if (isEditing && editingIndex !== null) {
      setGoals((currentGoals) =>
        currentGoals.map((goal, index) =>
          index === editingIndex ? enteredGoal : goal
        )
      );
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      setGoals((currentGoals) => [...currentGoals, enteredGoal]);
    }
    toggleModal();
    setEnteredGoal("");
  };

  const deleteGoalHandler = (goalIndex: number) => {
    setGoals((currentGoals) =>
      currentGoals.filter((_, index) => index !== goalIndex)
    );
  };

  const startEditGoalHandler = (goalIndex: number) => {
    setIsEditing(true);
    setEditingIndex(goalIndex);
    setEnteredGoal(goals[goalIndex]);
    toggleModal();
  };
  return (
    <SafeAreaView className="bg-yellow-500 h-full">
      {/* <Pressable onPress={() => router.push("/")}>
        <View className="  mx-4  mb-2">
          <Text className="text-xl">Return Home</Text>
        </View>
      </Pressable> */}
      <View className="bg-pink-400 border rounded-xl mx-4  mb-2">
        <Button
          title="Return Home"
          color={"black"}
          onPress={() => router.push("/")}
        />
      </View>
      <View className="bg-blue-400 border rounded-xl mx-4 ">
        <Button title="Add new goal" color={"black"} onPress={toggleModal} />
      </View>
      <View className="w-full px-4 ">
        {modalIsVisible && (
          <GoalInput
            goalInputHandler={goalInputHandler}
            addGoalHandler={addGoalHandler}
            enteredGoal={enteredGoal}
            isEditing={isEditing}
            toggleModalCancel={toggleModalCancel}
          />
        )}

        <View className="bg-blue-200 border items-center rounded-xl mt-8 p-2 ">
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
                editGoal={() => startEditGoalHandler(index)}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
