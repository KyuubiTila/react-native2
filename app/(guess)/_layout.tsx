import { Stack } from "expo-router";
import React from "react";

export default function GuessLayout() {
  return (
    <Stack>
      <Stack.Screen name="guessHome" options={{ headerShown: false }} />
    </Stack>
  );
}
