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
    <Modal animationType="slide" presentationStyle="overFullScreen">
      <View className="items-center bg-yellow-500 flex-col justify-center min-h-[100vh] p-4">
        <Image
          className="h-32 w-32"
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          className="border text-xl rounded-xl p-2 w-full"
          placeholder="Your course goals"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View className="flex-row mt-4">
          <View className="bg-blue-300 border rounded-xl mr-4">
            <Button
              color="black"
              title={isEditing ? "Update Goal" : "Add Goal"}
              onPress={addGoalHandler}
            />
          </View>
          <View className="bg-red-400 border rounded-xl ml-4">
            <Button color="black" title="Cancel" onPress={toggleModalCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
