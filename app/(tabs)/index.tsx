import { Image, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function HomeScreen() {
  let behaviors = [
    "Leash Trained",
    "Friendly with cats",
    "Active",
    "Tries to eat things",
  ];
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
        <ThemedText>French Bulldog . 1y 4m</ThemedText>
      </ThemedView>
      <ThemedView style={{ overflowY: "scroll" }}>
        <ThemedView
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 8,
          }}
        >
          <FontAwesome name="paw" size={24} color="black" />
          <ThemedText type="subtitle">About Itachi</ThemedText>
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
              <ThemedText type="defaultSemiBold">Breed</ThemedText>
              <ThemedText>French Bulldog</ThemedText>
            </ThemedView>

            <ThemedView
              style={{
                padding: 16,
                backgroundColor: "#F0F0F0",
                borderRadius: 8,
              }}
            >
              <ThemedText type="defaultSemiBold">Breed</ThemedText>
              <ThemedText>French Bulldog</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedText style={{ marginTop: 16 }}>
          Itachi is a very playful and energetic dog. He loves to play fetch and
          run around the park. He is very friendly and loves to meet new people
          and dogs.
        </ThemedText>
      </ThemedView>

      <ThemedView>
        <ThemedView
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 8,
          }}
        >
          <FontAwesome6 name="dog" size={24} />
          <ThemedText type="subtitle">Itachi behavior</ThemedText>
        </ThemedView>
        <ThemedView
          style={{
            marginTop: 16,
            gap: 16,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {behaviors.map((behavior: string, index: number) => (
            <ThemedText
              key={index}
              style={{
                padding: 14,
                backgroundColor: "pink",
                borderColor: "yellow",
                borderRadius: 18,
              }}
            >
              {behavior}
            </ThemedText>
          ))}
        </ThemedView>
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
