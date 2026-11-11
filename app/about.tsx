import { StyleSheet, Text, View } from 'react-native';

export default function AboutTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.description}>
        Built for Mobile Application Development Lab 6. Demonstrates local notifications and Expo Router tab navigation.
      </Text>
      <View style={styles.creditContainer}>
        <Text style={styles.credit}>Developed with React Native and Expo.</Text>
        <Text style={styles.credit}>Created by Punsala Lakshan.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 28,
    maxWidth: 300,
  },
  creditContainer: {
    alignItems: 'center',
  },
  credit: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 20,
  },
});
