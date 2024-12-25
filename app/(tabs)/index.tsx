import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/thumbnails/021/633/453/small/ai-generated-golden-retriever-dog-on-blue-background-photo.jpg",
          }}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Itachi!</ThemedText>
        <ThemedText type="subtitle">French Bulldog . 1y 4m</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedView
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 8,
          }}
        >
          <FontAwesome name="paw" size={24} color="black" />
          <ThemedText type="title">About Itachi</ThemedText>
        </ThemedView>

        <ThemedView style={{ marginTop: 16, width: "100%" }}>
          <ThemedView style={{ flexDirection: "row", gap: 16 }}>
            <ThemedView
              style={{
                padding: 16,
                backgroundColor: "#F0F0F0",
                borderRadius: 8,
              }}
            >
              <ThemedText type="subtitle">Breed</ThemedText>
              <ThemedText type="subtitle">French Bulldog</ThemedText>
            </ThemedView>

            <ThemedView
              style={{
                padding: 16,
                backgroundColor: "#F0F0F0",
                borderRadius: 8,
              }}
            >
              <ThemedText type="subtitle">Breed</ThemedText>
              <ThemedText type="subtitle">French Bulldog</ThemedText>
            </ThemedView>

            <ThemedView
              style={{
                padding: 16,
                backgroundColor: "#F0F0F0",
                borderRadius: 8,
              }}
            >
              <ThemedText type="subtitle">Breed</ThemedText>
              <ThemedText type="subtitle">French Bulldog</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedText type="subtitle" style={{ marginTop: 16 }}>
          Itachi is a very playful and energetic dog. He loves to play fetch and
          run around the park. He is very friendly and loves to meet new people
          and dogs.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "column",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
