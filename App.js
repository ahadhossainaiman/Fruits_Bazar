import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import uuid from 'react-native-uuid';
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import ListItem from "./components/ListItem";


export default function App() {
  const [items,setItems] = useState([
    {id: uuid.v4(),text: "Mango"},
     {id: uuid.v4(),text: "Orange"},
      {id: uuid.v4(),text: "Strawberries"},
       {id: uuid.v4(),text: "Apples"},
  ]);

  const deleteItem = (id) =>{
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

const addItem =(text) => {
  if(!text){
    Alert.alert('Error!','Please enter an New Item',[{text:'OK'}]);
  }else{
setItems(prevItems => {
    return [{id: uuid.v4(), text}, ...prevItems];
  });
  }
  
}

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
  },
});
