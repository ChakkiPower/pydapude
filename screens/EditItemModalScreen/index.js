import React, { Component } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";

import styles from "./styles";
import FormComponent from "../../component/FormComponent";

class MainScreen extends Component {
  render() {
    const {
      isModalVisible,
      closeModal,
      text,
      onTextEdit,
      onSubmitEditing,
    } = this.props;
    return (
      <Modal visible={isModalVisible} transparent animationType="fade">
        <View style={styles.opacityBackground}>
          <View style={styles.modalContainer}>
            <FormComponent
              text={text}
              onChangeText={onTextEdit}
              submit={onSubmitEditing}
              isEdit
            />
            <TouchableOpacity
              onPress={closeModal}
              style={styles.buttonContainer}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

export default MainScreen;
