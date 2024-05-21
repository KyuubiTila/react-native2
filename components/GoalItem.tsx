import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";

const GoalItem = ({
  itemData,
  deleteGoal,
  editGoal,
}: {
  itemData: any;
  deleteGoal: () => void;
  editGoal: () => void;
}) => {
  return (
    <View className="flex-row items-center justify-between bg-blue-200 border rounded-xl h-12 mb-2 mt-2 p-2">
      <Text className="text-red-800 text-xl">{itemData.item}</Text>

      <View className="flex-row items-center">
        <Pressable onPress={editGoal} className="mx-2">
          <EditButton />
        </Pressable>
        <Pressable onPress={deleteGoal} className="mx-2">
          <DeleteButton />
        </Pressable>
      </View>
    </View>
  );
};

export default GoalItem;
