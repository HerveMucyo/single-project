import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Settings = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(false);

  const toggleNotificationSwitch = () => {
    setNotificationEnabled((prevState) => !prevState);
  };

  const toggleDarkModeSwitch = () => {
    setDarkModeEnabled((prevState) => !prevState);
  };

  const toggleSoundSwitch = () => {
    setSoundEnabled((prevState) => !prevState);
  };

  const toggleLocationSwitch = () => {
    setLocationEnabled((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingItem} onPress={toggleNotificationSwitch}>
        <Text style={styles.settingLabel}>Enable Notifications</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={notificationEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotificationSwitch}
          value={notificationEnabled}
        />
        <Icon name="notifications" size={24} color={notificationEnabled ? 'green' : 'red'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={toggleDarkModeSwitch}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={darkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkModeSwitch}
          value={darkModeEnabled}
        />
        <Icon name="moon" size={24} color={darkModeEnabled ? 'black' : 'gray'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={toggleSoundSwitch}>
        <Text style={styles.settingLabel}>Enable Sound</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={soundEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSoundSwitch}
          value={soundEnabled}
        />
        <Icon name="volume-high" size={24} color={soundEnabled ? 'black' : 'gray'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={toggleLocationSwitch}>
        <Text style={styles.settingLabel}>Enable Location</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={locationEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleLocationSwitch}
          value={locationEnabled}
        />
        <Icon name="location" size={24} color={locationEnabled ? 'blue' : 'gray'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  settingLabel: {
    fontSize: 16,
    marginRight: 10,
  },
});

export default Settings;
