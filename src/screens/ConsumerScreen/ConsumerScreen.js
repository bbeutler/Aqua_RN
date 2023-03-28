import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InputComponents from "../../components/InputComponents";
import ButtonComponents from "../../components/ButtonComponents";
import SignUpHeader from "../../components/SignUpHeader/SignUpHeader";
import { SimpleLineIcons } from "@expo/vector-icons";

const ConsumerScreen = () => {
  const onChange = () => {};
  return (
    <View>
      <InputComponents
        label="First Name"
        placeholder="First Name"
        onChangeText={onChange}
      />

      <InputComponents
        label="Last Name"
        placeholder="Last Name"
        onChangeText={onChange}
      />

      <InputComponents
        label="Email"
        placeholder="Email"
        onChangeText={onChange}
      />

      <InputComponents
        label="Password"
        placeholder="Password"
        onChangeText={onChange}
        secureEntryText
      />

      <InputComponents
        label="Phone Number"
        placeholder="Phone Number"
        onChangeText={onChange}
        keyboardType={"number-pad"}
      />

      <Text style={styles.label}>Location</Text>
      <View style={styles.locationContainer}>
        <SimpleLineIcons name="location-pin" size={24} color="#C4C4C4C4" />
        <TextInput
          style={styles.locationInput}
          autoCorrect={false}
          secureTextEntry
          placeholder="Use current location"
          placeholderTextColor="#C4C4C4"
          onChangeText={onChange}
        />
      </View>

      <InputComponents
        label="Number of Water Bottles"
        placeholder="1"
        onChangeText={onChange}
        keyboardType={"number-pad"}
      />

      <ButtonComponents title="Sign Up" primary />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center", marginRight: -10 }}>
          Already have an account?
        </Text>
        <ButtonComponents title="Sign In" />
      </View>
    </View>
  );
};
export default ConsumerScreen;

const styles = StyleSheet.create({});
