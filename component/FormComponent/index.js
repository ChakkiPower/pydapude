import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from './styles';

const FormComponent = ({ onChangeText, submit, text, isEdit }) => (
  <View style={styles.formContainer}>
    <TextInput
      value={text}
      style={styles.input}
      onChangeText={onChangeText}
      placeholder="Enter title"
    />
    <TouchableOpacity onPress={submit} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{isEdit ? 'Edit' : 'Add'}</Text>
    </TouchableOpacity>
  </View>
);

export default FormComponent;
