import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./styles";

const MainItemComponent = ({ item, deleteItem, openModal }) => (
  <View style={styles.elementContainer}>
    <Text style={styles.name}>{item.name}</Text>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        onPress={() => openModal({ id: item.id, name: item.name })}
        style={[styles.buttonContainer, styles.editButton]}
      >
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => deleteItem(item.id)}
        style={[styles.buttonContainer, styles.deleteButton]}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default MainItemComponent;
