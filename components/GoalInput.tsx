import React from "react";
import { View, TextInput, Button, Modal, Image } from "react-native";

const GoalInput = ({
  goalInputHandler,
  addGoalHandler,
  enteredGoal,
  isEditing,
  toggleModalCancel,
}: {
  goalInputHandler: (inputText: string) => void;
  addGoalHandler: () => void;
  enteredGoal: string;
  isEditing: boolean;
  toggleModalCancel: any;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      presentationStyle="overFullScreen"
    >
      <View className="flex-1 justify-end">
        <View className="bg-yellow-200 rounded-t-xl p-6">
          <Image
            className="h-32 w-32 self-center"
            source={require("../assets/images/goal.png")}
          />
          <TextInput
            className="border text-xl rounded-xl p-2 w-full my-4"
            placeholder="Your course goals"
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <View className="flex-row mt-4">
            <View className="bg-blue-300 border rounded-xl flex-1 mr-2">
              <Button
                color="black"
                title={isEditing ? "Update Goal" : "Add Goal"}
                onPress={addGoalHandler}
              />
            </View>
            <View className="bg-red-400 border rounded-xl flex-1 ml-2">
              <Button
                color="black"
                title="Cancel"
                onPress={toggleModalCancel}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
