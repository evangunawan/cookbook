import React, { useState } from 'react';
import { Layout, Button, Icon, Text, Input } from '@ui-kitten/components';
import { StyleSheet, StatusBar, KeyboardAvoidingView } from 'react-native';
import { global } from '../../../styles/global';
import { ScrollView } from 'react-native-gesture-handler';
import IngredientModal from '../../../components/RecipeForm/IngredientModal';

const BackIcon = () => <Icon name='arrow-back' />;

const PlusIcon = (style) => <Icon {...style} name='plus' />;
const CreateRecipeScreen = (props) => {
  const [ingredientModal, setIngridientModal] = useState(false);
  return (
    <Layout style={global.container}>
      <Layout style={classes.topBar}>
        <Button
          appearance='ghost'
          icon={BackIcon}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Text category='h4' style={{ marginLeft: 12 }}>
          New Recipe
        </Text>
      </Layout>
      <Layout style={classes.mainForm}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView behavior='padding'>
            <Layout style={formStyle.coverImageInput}>
              <Text style={formStyle.coverImageInputCaption}>Add Image</Text>
            </Layout>
            <Layout style={formStyle.formInputs}>
              <Text category='h4' style={formStyle.sectionTitle}>
                Informations
              </Text>
              <Input label='Title' />
              <Input label='Tags' placeholder='Separate by commas' />
              <Input
                label='Description'
                multiline={true}
                numberOfLines={4}
                maxLength={200}
                placeholder='Insert short description...'
              />

              <Layout style={global.horizontalLine} />
              <Text category='h4' style={formStyle.sectionTitle}>
                Ingredients
              </Text>
              <Button
                icon={PlusIcon}
                onPress={() => {
                  setIngridientModal(true);
                }}>
                ADD INGRIDIENT
              </Button>
            </Layout>
          </KeyboardAvoidingView>
        </ScrollView>
        <IngredientModal visible={ingredientModal} onClose={() => setIngridientModal(false)} />
      </Layout>
    </Layout>
  );
};

const classes = StyleSheet.create({
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight - 24,
    height: 52,
    position: 'absolute',
    top: 0,
    zIndex: 100,
  },
  mainForm: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: 52,
  },
});

const formStyle = StyleSheet.create({
  coverImageInput: {
    backgroundColor: '#ddd',
    width: '100%',
    height: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverImageInputCaption: {
    color: '#aaa',
    fontWeight: 'bold',
    fontSize: 24,
  },
  formInputs: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  sectionTitle: {
    marginBottom: 12,
  },
});

export default CreateRecipeScreen;
