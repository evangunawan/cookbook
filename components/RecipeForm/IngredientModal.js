import React, { useState } from 'react';
import { Button, Layout, Text, Input } from '@ui-kitten/components';
import { StyleSheet, Modal } from 'react-native';
import SuggestionInput from '../Gui/SuggestionInput';

const IngredientModal = ({ visible, onClose, onAddIngredient }) => {
  const [ingredient, setIngredient] = useState('');
  const [quantity, setQuantity] = useState('');
  return (
    <Modal visible={visible} transparent={true} animationType='fade'>
      <Layout style={classes.modalBackground}>
        <Layout style={classes.modalContainer}>
          <Text category='h4' style={{ marginBottom: 12 }}>
            Add An Ingredient
          </Text>

          <Layout style={classes.suggestionInput}>
            <SuggestionInput
              onValueChange={(text) => {
                setIngredient(text);
              }}
              placeholder='e.g. carrot'
            />
          </Layout>
          <Layout>
            <Input
              label='Quantity'
              placeholder='e.g. "3pcs" or "100gr"'
              onChangeText={(text) => {
                setQuantity(text);
              }}
            />
          </Layout>

          <Layout style={classes.modalButtons}>
            <Button
              onPress={() => {
                //return ingredient
                const result = {
                  name: ingredient,
                  quantity: quantity,
                };
                onAddIngredient(result);
                onClose();
              }}>
              Add
            </Button>
            <Button
              appearance='ghost'
              onPress={() => {
                onClose();
              }}>
              Cancel
            </Button>
          </Layout>
        </Layout>
      </Layout>
    </Modal>
  );
};

const classes = StyleSheet.create({
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  modalContainer: {
    display: 'flex',
    borderRadius: 4,
    backgroundColor: 'white',
    width: '80%',
    paddingVertical: 16,
    paddingHorizontal: 16,
    zIndex: 0,
  },
  modalButtons: {
    marginTop: 16,
    zIndex: 1,
  },
  suggestionInput: {
    display: 'flex',
    zIndex: 5,
    marginBottom: 8,
  },
});
export default IngredientModal;
