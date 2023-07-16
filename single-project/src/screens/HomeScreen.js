import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DrawerItem = ({ icon, label, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
    <Icon name={icon} size={24} color="gray" style={styles.drawerIcon} />
    <Text style={styles.drawerLabel}>{label}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
    <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
      <Text>Go to Profile Screen</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
      <Text>Go to Settings Screen</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const slideAnimation = useState(new Animated.Value(-200))[0];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    Animated.timing(slideAnimation, {
      toValue: isOpen ? -200 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleNavigation = (screen) => {
    console.log(`Navigating to ${screen}`);
    // Add your navigation logic here
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.hamburger}>
        <Icon name={isOpen ? 'close' : 'menu'} size={24} color="black" />
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [{ translateX: slideAnimation }],
          },
        ]}
      >
        <DrawerItem
          icon="home"
          label="Home"
          onPress={() => handleNavigation('HomeScreen')}
        />
        <DrawerItem
          icon="person"
          label="Profile"
          onPress={() => handleNavigation('ProfileScreen')}
        />
        <DrawerItem
          icon="settings"
          label="Settings"
          onPress={() => handleNavigation('SettingsScreen')}
        />
        <DrawerItem
          icon="help-circle"
          label="Help"
          onPress={() => handleNavigation('HelpScreen')}
        />
        <DrawerItem
          icon="information-circle"
          label="About"
          onPress={() => handleNavigation('AboutScreen')}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hamburger: {
    position: 'absolute',
    top: 25,
    left: 20,
    zIndex: 1,
    color: 'blue',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: 'darkgreen',
    padding: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  drawerIcon: {
    marginRight: 30,
  },
  drawerLabel: {
    fontSize: 16,
    color: 'white',
  },
});
