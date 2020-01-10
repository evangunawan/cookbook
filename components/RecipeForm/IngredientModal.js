import React from 'react';
import { Button, Layout, Text, Input } from '@ui-kitten/components';
import { StyleSheet, Modal } from 'react-native';
import SuggestionInput from '../Gui/SuggestionInput';

const IngredientModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent={true} animationType='fade'>
      <Layout style={classes.modalBackground}>
        <Layout style={classes.modalContainer}>
          <Text category='h4' style={{ marginBottom: 12 }}>
            Add An Ingredient
          </Text>
          <SuggestionInput />
          <Input label='Scale' />

          <Layout style={{ marginTop: 16 }}>
            <Button>Add</Button>
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
  },
  modalContainer: {
    display: 'flex',
    borderRadius: 4,
    backgroundColor: 'white',
    width: '80%',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});
export default IngredientModal;
