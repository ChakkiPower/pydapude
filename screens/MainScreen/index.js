import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import uuid from 'uuid';

import styles from './styles';
import FormComponent from '../../component/FormComponent';
import MainItemComponent from '../../component/MainItemComponent';
import ItemSeparator from '../../component/ItemSeparator';
import EditItemModalScreen from '../EditItemModalScreen';

class MainScreen extends Component {
  state = {
    list: [
      {
        id: 1,
        name: 'Vova',
      },
      {
        id: 2,
        name: 'Vlad',
      },
      {
        id: 3,
        name: 'XYI',
      },
    ],
    text: '',
    isModalVisible: false,
    itemPressed: {},
  };

  onChangeText = value => {
    this.setState({
      text: value
    });
  };

  onTextEdit = value => {
    const { itemPressed } = this.state;
    this.setState({
      itemPressed: { id: itemPressed.id, name: value },
    });
  };

  submit = () => {
    const { text } = this.state;
    if (text) {
      this.setState(({ list }) => ({
        list: [...list, { id: uuid.v4(), name: text }],
        text: '',
      }));
    }
  };

  onSubmitEditing = () => {
    const { list, itemPressed } = this.state;
    let temp = list.map(item => {
      if (item.id === itemPressed.id) {
        item.name = itemPressed.name;
      }
      return item;
    });
    this.setState({
      list: temp,
    });
    this.closeModal();
  };

  deleteItem = id => {
    const { list } = this.state;
    this.setState({
      list: list.filter(element => element.id !== id),
    });
  };

  openModal = item => {
    this.setState({
      isModalVisible: true,
      itemPressed: item,
    });
  };
  closeModal = () => {
    this.setState({
      isModalVisible: false
    });
  };

  render() {
    const { list, text, isModalVisible, itemPressed } = this.state;
    return (
      <View style={styles.wrapper}>
        <FormComponent
          onChangeText={this.onChangeText}
          submit={this.submit}
          text={text}
        />
        <FlatList
          style={styles.list}
          data={list}
          renderItem={({ item }) => (
            <MainItemComponent
              item={item}
              deleteItem={this.deleteItem}
              openModal={this.openModal}
            />
          )}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={ItemSeparator}
        />
        <EditItemModalScreen
          isModalVisible={isModalVisible}
          closeModal={this.closeModal}
          text={itemPressed.name}
          onTextEdit={this.onTextEdit}
          onSubmitEditing={this.onSubmitEditing}
        />
      </View>
    );
  }
}

export default MainScreen;
