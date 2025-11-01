import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function AboutScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* 🔙 Back + 💬 Chatbot Buttons */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={36} color="#1E3D59" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chatbot')}>
          <Ionicons name="chatbubbles" size={34} color="#1E3D59" />
        </TouchableOpacity>
      </View>

      {/* Icon + Title */}
      <View style={styles.header}>
        <MaterialCommunityIcons name="scale-balance" size={70} color="#1E3D59" />
        <Text style={styles.title}>About LegalRights</Text>
      </View>

      {/* About Cards */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Who We Are</Text>
        <Text style={styles.text}>
          LegalRights is an AI-based multilingual legal awareness platform designed to make understanding of legal rights simple, interactive, and accessible to everyone especially those who find traditional legal language difficult.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.text}>
          Our mission is to promote legal literacy among citizens by providing easy explanations of important Indian laws like Consumer Rights, Cyber Safety, Property Laws, and Women's Protection. We simplify complex legal terms into plain, everyday language.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Our Vision</Text>
        <Text style={styles.text}>
          We believe that legal awareness is a basic right. Our vision is to build a society where every citizen understands their rights and responsibilities, can recognize injustice and take informed legal action when necessary.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>What We Offer</Text>
        <Text style={styles.text}>
          LegalRights provides categorized legal content in multiple languages along with an interactive chatbot for instant answers. It's designed to help users learn their legal rights anytime, anywhere without needing a lawyer.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 LegalRights | All Rights Reserved</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E5',
    paddingHorizontal: 15,
  },
  topBar: {
    paddingTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1E3D59',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E3D59',
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    textAlign: 'justify',
  },
  footer: {
    alignItems: 'center',
    marginVertical: 25,
  },
  footerText: {
    fontSize: 13,
    color: '#555',
  },
});
