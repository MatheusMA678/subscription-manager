import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { PaymentHistory } from "../components/Home/PaymentHistory";

const data = [
  { id: 1, title: "Figma", desc: "Yesterday, at 5:12 PM", cost: "- $ 8" },
  { id: 2, title: "HBO Max", desc: "20.12.2022, at 1:38 PM", cost: "- $ 9.99" },
  {
    id: 3,
    title: "PS Plus",
    desc: "15.12.2022, at 8:17 AM",
    cost: "- $ 67.57",
  },
  { id: 4, title: "Youtube", desc: "10.12.2022, at 2:34 AM", cost: "- $ 8.97" },
];

export const Home = () => {
  return (
    <View className="flex-1 bg-bgColor pt-8">
      <Text className="px-4 text-xl text-white font-RHDSemi">
        Spent for January
      </Text>
      <View className="flex-row items-start">
        <Text className="font-URegular text-7xl py-8 px-4 text-white">
          $ 31<Text className="text-gray-400/50">.45</Text>
        </Text>
        <View className="mt-4 px-2 py-1 rounded-xl bg-primaryGreen">
          <Text className="text-white font-URegular">+ 5%</Text>
        </View>
      </View>
      <View className="mx-4 rounded-3xl rounded-br-md bg-primaryGreen p-6 justify-between">
        <View className="bg-white rounded-full w-14 h-14 justify-center items-center mb-12">
          <FontAwesome name="spotify" size={48} color="#05BB62" />
        </View>
        <View className="">
          <Text className="font-RHDSemi text-3xl text-white">Spotify</Text>
          <Text className="font-RHDRegular text-xl text-white">
            Upcoming payment: <Text className="font-URegular">25.01</Text>
          </Text>
        </View>
        <Text className="font-URegular absolute top-6 right-6 text-white text-3xl">
          $ 8
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          className="h-8 w-8 rounded-full bg-white absolute bottom-6 right-6 justify-center items-center"
        >
          <Ionicons name="arrow-forward" size={20} />
        </TouchableOpacity>
      </View>
      <View className="mt-8 mx-4">
        <Text className="text-white font-RHDSemi text-3xl mb-6">
          Payment history
        </Text>
        <FlatList
          className="bg-white/20 rounded-3xl p-4"
          data={data}
          renderItem={(data) => <PaymentHistory data={data} />}
        />
      </View>
    </View>
  );
};
