import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import DeleteButton from "./DeleteButton";

const GoalItem = ({
  itemData,
  deleteGoal,
}: {
  itemData: any;
  deleteGoal: () => void;
}) => {
  return (
    <Pressable
      className="bg-blue-200 border rounded-xl h-12 mb-2 mt-2 justify-center p-2"
      style={({ pressed }) =>
        pressed ? { backgroundColor: "lightgray" } : undefined
      }
    >
      <View className="flex-row items-center justify-between">
        <Text className="text-red-800 text-xl">{itemData.item}</Text>
        <Pressable onPress={deleteGoal}>
          <DeleteButton />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default GoalItem;
