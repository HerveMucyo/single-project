import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';

const ProfileScreen = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleProfilePictureUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
    const imagePickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!imagePickerResult.cancelled) {
      setProfilePicture(imagePickerResult.uri);
    }
  };

  const handleSaveChanges = () => {
        console.log('Name:', name);
    console.log('Bio:', bio);
    console.log('Gender:', selectedGender);
    console.log('Date:', selectedDate);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profilePictureContainer} onPress={handleProfilePictureUpload}>
        {profilePicture ? (
          <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        ) : (
          <View style={styles.profilePicturePlaceholder}>
            <Text style={styles.profilePictureText}>Add Profile Picture</Text>
          </View>
        )}
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Bio"
        multiline
        value={bio}
        onChangeText={setBio}
      />
      <View style={styles.dropdownContainer}>
        <RNPickerSelect
          placeholder={{ label: 'Select Gender', value: null }}
          onValueChange={(value) => setSelectedGender(value)}
          value={selectedGender}
          items={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ]}
          style={pickerSelectStyles}
        />
      </View>
      <TextInput
        style={styles.dateInput}
        placeholder="Date (YYYY-MM-DD)"
        value={selectedDate}
        onChangeText={setSelectedDate}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
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
  profilePictureContainer: {
    marginBottom: 20,
    textAlign:'center',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    
  },
  profilePicturePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePictureText: {
    fontSize: 16,
    color: '#FFF',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  dropdownContainer: {
    width: '100%',
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  dateInput: {
    width: '100%',
    height: 40,
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  saveButton: {
    width: '100%',
    height: 40,
    backgroundColor: 'darkseagreen',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    color: 'black',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    color: 'black',
  },
});

export default ProfileScreen;
