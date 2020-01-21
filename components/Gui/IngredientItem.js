import React, { useState } from 'react';
import { ListItem, Icon, Button } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const RemoveIcon = () => <Icon name='trash-2-outline' />;

const IngredientItem = ({ name, quantity, onItemRemove }) => {
  const RemoveButton = () => {
    return (
      <Button
        appearance='ghost'
        icon={RemoveIcon}
        status='danger'
        onPress={() => {
          onItemRemove();
        }}
      />
    );
  };

  return (
    <ListItem
      title={name}
      description={quantity}
      accessory={RemoveButton}
      style={classes.itemBox}
    />
  );
};

const classes = StyleSheet.create({
  itemBox: {},
});

export default IngredientItem;
