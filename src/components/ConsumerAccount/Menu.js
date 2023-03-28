import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import MenuItems from "./MenuItems";
import MenuItem from "./MenuItem";
import React from "react";

const Menu = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={MenuItems}
        renderItem={({ item }) => <MenuItem menu={item} />}
        ItemSeparatorComponent={() => <View style={{width: "100%", marginBottom: 10}} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 20,
    // position: "absolute",
    // top: "40%",
  },
});
