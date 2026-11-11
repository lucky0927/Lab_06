import { StyleSheet, Text, View } from 'react-native';

export default function TipsTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why Hydrate? 🌊</Text>
      <View style={styles.tipsList}>
        <Text style={styles.tipItem}>Boosts skin health and beauty</Text>
        <Text style={styles.tipItem}>Regulates body temperature</Text>
        <Text style={styles.tipItem}>Flushes body waste</Text>
        <Text style={styles.tipItem}>Maintains blood pressure</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0EA5E9',
    marginBottom: 20,
    textAlign: 'center',
  },
  tipsList: {
    alignItems: 'center',
  },
  tipItem: {
    fontSize: 16,
    color: '#64748B',
    marginVertical: 6,
    textAlign: 'center',
  },
});
