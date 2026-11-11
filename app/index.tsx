import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ReminderTab() {
  const [isReminding, setIsReminding] = useState(false);
  const [message, setMessage] = useState('Time to drink a glass of water!');
  const [intervalMinutes, setIntervalMinutes] = useState(1);

  // Request notification permissions on mount
  useEffect(() => {
    async function requestPermissions() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission required',
          'We need notifications to remind you to drink water!'
        );
      }
    }
    requestPermissions();
  }, []);

  // Schedule a notification
  async function scheduleReminder() {
    await Notifications.requestPermissionsAsync(); // Safe check just in case

    // Clear old ones first so they don't stack up
    await Notifications.cancelAllScheduledNotificationsAsync();

    // Schedule the new notification
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '💧 Hydration Alert', // Notification title
        body: message, // Notification body
        sound: true, // Play sound when notification arrives
      },
      // Trigger the notification after the specified interval
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: intervalMinutes * 60, // Convert minutes to seconds
        repeats: true,
      },
    });

    // Update state and alert the user
    setIsReminding(true);
    Alert.alert('Set!', `Reminding you every ${intervalMinutes} minutes.`); // Alert the user
  }

  // Stop reminders
  async function stopReminder() {
    await Notifications.cancelAllScheduledNotificationsAsync();
    setIsReminding(false);
    Alert.alert('Stopped', 'Reminders cancelled.');
  }

  // Render the UI
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🥤</Text>

      <Text style={styles.label}>Add a Custom Message</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter reminder message"
        placeholderTextColor="#94A3B8"
      />

      <Text style={styles.label}>Set Interval (minutes)</Text>
      <TextInput
        style={styles.input}
        value={intervalMinutes.toString()}
        onChangeText={(text) => setIntervalMinutes(parseInt(text) || 1)}
        keyboardType="numeric"
      />

      <View style={styles.statusContainer}>
        <Text style={styles.status}>
          Status: {isReminding ? 'Active 🟢' : 'Inactive 🔴'}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.startButton}
        onPress={scheduleReminder}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>START REMINDERS</Text>
      </TouchableOpacity>

      <View style={{ height: 10 }} />

      <TouchableOpacity
        style={styles.stopButton}
        onPress={stopReminder}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>STOP REMINDERS</Text>
      </TouchableOpacity>
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
  emoji: {
    fontSize: 72,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0EA5E9',
    marginBottom: 8,
    marginTop: 12,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 15,
    textAlign: 'center',
    color: '#1E293B',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  statusContainer: {
    backgroundColor: '#F1F5F9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },
  startButton: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#0EA5E9',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  stopButton: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#EF4444',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 0.5,
  },
});

