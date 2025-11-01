import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        {/* 🔙 Back Button */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-circle-outline" size={36} color="#1E3D59" />
          </TouchableOpacity>
        </View>

        {/* Header Section */}
        <View style={styles.header}>
          <MaterialCommunityIcons name="scale-balance" size={75} color="#1E3D59" />
          <Text style={styles.title}>LegalRights</Text>
          <Text style={styles.subtitle}>Empowering Citizens through Legal Awareness</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.card, { backgroundColor: '#FFCE45' }]}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Categories')}
          >
            <FontAwesome5 name="book" size={36} color="#1E3D59" />
            <Text style={styles.cardText}>View Legal Categories</Text>
            <Text style={styles.cardSubtext}>Explore key laws simplified for you</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, { backgroundColor: '#FFD85E' }]}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Chatbot')}
          >
            <Ionicons name="chatbubbles-outline" size={38} color="#1E3D59" />
            <Text style={styles.cardText}>Chat with Legal Bot</Text>
            <Text style={styles.cardSubtext}>Ask your questions instantly</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, { backgroundColor: '#FFECA3' }]}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('About')}
          >
            <MaterialCommunityIcons name="information-outline" size={38} color="#1E3D59" />
            <Text style={styles.cardText}>About Us</Text>
            <Text style={styles.cardSubtext}>Learn about LegalRights</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF9E5',
    padding: 20,
  },
  topBar: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1E3D59',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  card: {
    width: '90%',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 4,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E3D59',
    marginTop: 10,
  },
  cardSubtext: {
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
    marginTop: 4,
  },
});
