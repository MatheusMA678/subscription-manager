import { View, Text, StatusBar } from "react-native";
import React from "react";

export const Home = () => {
  return (
    <View className="flex-1 justify-center items-center bg-bgColor">
      <Text className="px-8 text-3xl text-white font-title2 text-center">
        Manage all your subscriptions
      </Text>
    </View>
  );
};
