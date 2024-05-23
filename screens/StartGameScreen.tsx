import GuessButton from "@/components/GuessButton";
import { View, Text, TextInput, Pressable } from "react-native";

const StartGameScreen = () => {
  return (
    <View className="w-full items-center bg-blue-200 p-8 border rounded-xl">
      <TextInput
        className="border items-center text-xl rounded-xl p-4 w-30 "
        placeholder="Input a number"
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
      />
      <View className="flex-row mt-4 bg-slate-500 h-24 border rounded-xl items-center shadow-xl shadow-slate-950 ">
        <Pressable
          className="bg-blue-300  justify-center border h-12 rounded-full flex-1  mx-4"
          onPress={() => console.log("Reset")}
        >
          <View>
            <GuessButton>Reset</GuessButton>
          </View>
        </Pressable>

        <Pressable
          className="bg-blue-300  justify-center border h-12  rounded-full flex-1  mx-4"
          onPress={() => console.log("Confirm")}
        >
          <View>
            <GuessButton>Confirm</GuessButton>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default StartGameScreen;
