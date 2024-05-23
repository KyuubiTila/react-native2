import { View, Text } from "react-native";
import React, { ReactNode } from "react";

interface GuessButtonProps {
  children: ReactNode;
}

const GuessButton: React.FC<GuessButtonProps> = ({ children }) => {
  return (
    <View>
      <Text className="text-center text-xl font-bold">{children}</Text>
    </View>
  );
};

export default GuessButton;
