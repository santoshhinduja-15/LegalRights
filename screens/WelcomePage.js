import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function WelcomePage({ navigation }) {
  return (
    <LinearGradient
      colors={['#FFF9E5', '#FFF2CC', '#FFE8A3']}
      style={styles.container}
    >
      {/* App Logo */}
      <Animatable.Image
        animation="zoomIn"
        duration={1500}
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Tagline */}
      <Animatable.Text animation="fadeInUp" delay={200} style={styles.tagline}>
        Know Your Rights, Know Your Power
      </Animatable.Text>

      {/* Title */}
      <Animatable.Text animation="fadeInUp" delay={400} style={styles.title}>
        Welcome to <Text style={styles.brand}>LegalRights</Text>
      </Animatable.Text>

      {/* Subtitle */}
      <Animatable.Text animation="fadeInUp" delay={700} style={styles.subtitle}>
        Learn your fundamental legal rights in simple language anytime, anywhere.
      </Animatable.Text>

      {/* CTA Button */}
      <Animatable.View animation="pulse" delay={1000} iterationCount="infinite">
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Home')}
        >
          <LinearGradient colors={['#FFD85E', '#FFC93C']} style={styles.buttonInner}>
            <Text style={styles.buttonText}>Get Started</Text>
            <Ionicons name="arrow-forward-circle" size={26} color="#2C2F4A" style={{ marginLeft: 8 }} />
          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: width * 0.45,
    height: height * 0.22,
    marginBottom: 25,
  },
  tagline: {
    color: '#333',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    color: '#2C2F4A',
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  brand: {
    color: '#E09F3E',
  },
  subtitle: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    paddingHorizontal: 10,
    lineHeight: 22,
    marginBottom: 40,
  },
  button: {
    borderRadius: 30,
    overflow: 'hidden',
  },
  buttonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2F4A',
  },
  footer: {
    position: 'absolute',
    bottom: 35,
    color: '#555',
    fontSize: 13,
  },
});
