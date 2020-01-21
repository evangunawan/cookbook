import React, { useState } from 'react';
import { Input, Layout, Text, Popover } from '@ui-kitten/components';
import { StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const SuggestionItem = (props) => {
  const { name = 'none', onPress } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={classes.suggestionItem}>
      <Text style={{ textTransform: 'capitalize' }}>{name}</Text>
    </TouchableOpacity>
  );
};

export default class SuggestionInput extends React.Component {
  state = {
    nameValue: '',
    ingredients: [],
    ingredientsFiltered: [],
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //TODO: Load ingredients from firestore.
    const ingr = [
      'salt',
      'black pepper',
      'white pepper',
      'tomato',
      'carrot',
      'chicken tigh',
      'tenderloin',
      'pork',
      'beef',
    ];
    this.setState({ ingredients: ingr });
  }

  filterIngredients(str) {
    const { ingredients } = this.state;
    const exp = new RegExp(str, 'i');
    const filtered = ingredients.filter((item) => exp.test(item));

    this.setState({ ingredientsFiltered: filtered });
  }

  renderSuggestionBox() {
    const { ingredients, nameValue, ingredientsFiltered } = this.state;

    return (
      <Layout style={classes.suggestionBox}>
        <ScrollView>
          {ingredientsFiltered.map((item, k) => (
            <SuggestionItem
              name={item}
              key={k}
              onPress={() => {
                this.setState({ nameValue: item });
                this.props.onValueChange(item);
              }}
            />
          ))}
        </ScrollView>
      </Layout>
    );
  }

  render() {
    return (
      <Layout class={classes.componentRoot}>
        <Input
          label='Name'
          onChangeText={(text) => {
            this.setState({ nameValue: text });
            this.filterIngredients(text);
            this.props.onValueChange(text);
          }}
          value={this.state.nameValue}
          placeholder={this.props.placeholder}
        />
        {this.state.nameValue.length < 1 ? null : this.renderSuggestionBox()}
      </Layout>
    );
  }
}
const classes = StyleSheet.create({
  componentRoot: {},
  suggestionBox: {
    borderWidth: 0.5,
    borderColor: '#bbb',
    //TODO: make the suggestion box floating instead static.
    // position: 'absolute',
    // top: 64,
    // width: '100%',
    backgroundColor: 'white',
    padding: 8,
    zIndex: 50,
    minHeight: 100,
    maxHeight: 100,
  },
  suggestionItem: {
    paddingVertical: 6,
    zIndex: 51,
  },
});
