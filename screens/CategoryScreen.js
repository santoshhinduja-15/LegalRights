import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CategoriesScreen({ navigation }) {
  const laws = [
    {
      title: "Consumer Rights",
      description: "Know your rights as a consumer under the Consumer Protection Act.",
      iconName: "cart-outline",
    },
    {
      title: "Property Laws",
      description: "Understand property ownership, tenancy, and registration rules.",
      iconName: "home-outline",
    },
    {
      title: "Cyber Laws",
      description: "Learn how to stay safe online and report cybercrimes.",
      iconName: "shield-outline",
    },
    {
      title: "Women’s Safety Laws",
      description: "Know your protection laws against harassment and abuse.",
      iconName: "female-outline",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Legal Categories</Text>

      <FlatList
        data={laws}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("LawDetail", { law: item })}
          >
            <View style={styles.iconContainer}>
              <Ionicons name={item.iconName} size={40} color="#1E3D59" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9E5",
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1E3D59",
    textAlign: "center",
    marginVertical: 15,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 15,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  iconContainer: {
    backgroundColor: "#FFD85E",
    padding: 10,
    borderRadius: 15,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E3D59",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
});
