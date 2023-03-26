import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";

export const Apresentation = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Home");
  };

  return (
    <View className="flex-1 justify-between items-center bg-bgColor p-4">
      <View className="mt-20">
        <Text className="px-4 text-5xl text-white font-title2 text-center mb-6">
          Manage all your subscriptions
        </Text>
        <Text className="text-2xl font-primary text-gray-400 text-center px-4">
          Keep regular expenses on hand and receive timely notifications of
          upcoming fees
        </Text>
      </View>
      <TouchableOpacity
        className="justify-center items-center w-full bg-blue-500 rounded-2xl h-12"
        activeOpacity={0.7}
        onPress={handlePress}
      >
        <Text className="text-white font-title2 text-xl">Get started</Text>
      </TouchableOpacity>

      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor={"transparent"}
      />
    </View>
  );
};
