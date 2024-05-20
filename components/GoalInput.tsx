import React from "react";
import { View, TextInput, Button, Modal, Image } from "react-native";

const GoalInput = ({
  goalInputHandler,
  addGoalHandler,
  enteredGoal,
  toggleModal,
}: {
  goalInputHandler: (inputText: string) => void;
  addGoalHandler: () => void;
  enteredGoal: string;
  toggleModal: any;
}) => {
  return (
    <Modal animationType="slide" presentationStyle="overFullScreen">
      <View className=" items-center bg-yellow-500 flex-col justify-center min-h-[100vh] ">
        <Image
          className="h-32 w-32"
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          className=" border text-xl rounded-xl p-2 w-full "
          placeholder="Your course goals"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View className="flex-row mt-4 ">
          <View className="bg-blue-300 border rounded-xl mr-4 ">
            <Button color="black" title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View className="bg-red-400 border rounded-xl ml-4">
            <Button color="black" title="Cancel" onPress={toggleModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
