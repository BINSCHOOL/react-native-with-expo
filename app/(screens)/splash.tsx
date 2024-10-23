import { View, Text, Image, useWindowDimensions, useColorScheme } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const theme = useColorScheme(); 

  useEffect(() => {
    setTimeout(() => {
      router.push("/(tabs)");
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme === "dark" ? "black" : "white", 
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    
      <Image
        source={
          theme === "dark"
            ? require("../../assets/images/logo-light.png") 
            : require("../../assets/images/logo.png") 
        }
        style={{ width: 80, height: 80 }}
      />
      <Text
        style={{
          marginTop: 160,
          color: theme === "dark" ? "white" : "black", 
          fontWeight: "bold",
        }}
      >
        Version 1.0.0
      </Text>
    </View>
  );
}
