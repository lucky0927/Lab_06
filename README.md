# Hydration Reminder App 🥤

### Department of Statistics & Computer Science | University of Kelaniya
**Academic Year:** 2024/2025 (Semester 2)  
**Course:** Mobile Application Development  
**Practical Tutorial 06:** Local Notifications & Tab Navigation in Expo  
**Developer:** Punsala Lakshan  

---

## 📌 Project Overview

**Hydration Reminder** is a cross-platform mobile application built using **React Native**, **Expo Router**, and **expo-notifications**. The application promotes healthy hydration habits by allowing users to schedule customizable, repeating local notifications at user-defined time intervals.

The app demonstrates hardware-level feature integration, permission handling, foreground notification presentation, and multi-tab navigation.

---

## 🚀 Key Features & Concepts Implemented

### 1. Local vs. Push (Remote) Notifications
* **Local Notifications:** Triggered and managed directly on the user's device via `expo-notifications`. Does not require an external backend or push token servers (Firebase Cloud Messaging, APNs).
* **Push (Remote) Notifications:** Dispatched from external servers over the internet to remote devices.

### 2. Permissions Management
* Operating systems require user consent to display notifications.
* Handled on component mount using `Notifications.requestPermissionsAsync()` in accordance with the **Rules of Hooks** (placed at top-level inside `useEffect`).

### 3. Foreground Notification Handling
* By default, mobile operating systems suppress alert banners when the app is active in the foreground.
* Configured globally in `app/_layout.tsx` using `Notifications.setNotificationHandler`:
  ```typescript
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldPlaySound: true,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });
  ```

### 4. Scheduling & Canceling Alerts
* **Scheduling:** Built using `Notifications.scheduleNotificationAsync` with `SchedulableTriggerInputTypes.TIME_INTERVAL` configured to repeat every specified number of minutes.
* **Cancellation:** Previous alerts are cleared before scheduling new ones via `Notifications.cancelAllScheduledNotificationsAsync()`, preventing duplicate stacking. Reminders can also be stopped at any time.

### 5. Multi-Tab Navigation (Expo Router)
* Declarative bottom tab navigation implemented with `expo-router`:
  * **Tab 1 - Reminder (`app/index.tsx`):** Custom message input, interval input (minutes), active/inactive status display, and Start/Stop controls.
  * **Tab 2 - Tips (`app/tips.tsx`):** Educational information on hydration benefits (skin health, body temperature regulation, waste flushing, blood pressure maintenance).
  * **Tab 3 - About (`app/about.tsx`):** Course, lab metadata, and developer attribution.

---

## 📁 Project Structure

```
HydrationReminder/
├── app/
│   ├── _layout.tsx         # Tab navigation configuration & foreground notification handler
│   ├── index.tsx           # Reminder tab (scheduling logic, custom message, intervals)
│   ├── tips.tsx            # Static educational hydration benefits tab
│   └── about.tsx           # About tab with developer details
├── Output_Screens/         # Saved screenshots demonstrating app functionality
├── assets/                 # App icons and splash assets
├── app.json                # Expo application configuration
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Lab documentation and instructions
```

---

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd HydrationReminder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Expo Notifications:**
   ```bash
   npx expo install expo-notifications
   ```

4. **Start the development server with cache clearing:**
   ```bash
   npx expo start -c
   ```

---

## 📱 Testing Instructions

1. Open **Expo Go** on a physical Android or iOS device. (Emulators may fail to trigger notification UI or sounds properly).
2. Scan the QR code displayed in the terminal.
3. When prompted upon launch, allow notification permissions.
4. Set the interval to `1` minute, optionally enter a custom message, and tap **START REMINDERS**.
5. Switch to another tab or minimize the app to verify repeating local notifications arrive on schedule.
6. Return to the app and tap **STOP REMINDERS** to cancel scheduled notifications.

---

## 📸 Output Screenshots

Screenshots of the running application (Reminder tab, Tips tab, About tab, and Notification alerts) are stored in the [`Output_Screens/`](./Output_Screens) directory.
