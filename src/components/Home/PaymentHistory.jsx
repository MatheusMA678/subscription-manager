import { View, Text } from "react-native";
import React from "react";

export function PaymentHistory({ data }) {
  return (
    <View className="w-full rounded-3xl p-4 my-1 bg-gray-400/50">
      <Text className="text-white font-RHDSemi text-xl">{data.item.title}</Text>
    </View>
  );
}
