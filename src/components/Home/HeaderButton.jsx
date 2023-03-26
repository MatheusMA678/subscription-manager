import { TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export function HeaderButton({ iconName, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="rounded-full w-12 h-12 justify-center items-center bg-gray-700/60"
      onPress={onPress}
    >
      <Ionicons name={iconName} color="white" size={24} />
    </TouchableOpacity>
  );
}
