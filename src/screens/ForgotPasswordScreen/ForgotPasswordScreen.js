import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Input,
  TouchableHighlight,
  SafeAreaView,
  Dimensions,
} from "react-native";
import SupplierHeader from "../../components/SupplierHeader/SupplierHeader";
import { Formik } from "formik";
import { AntDesign } from "@expo/vector-icons";
import * as yup from "yup";
import axios from "axios";
//import axios from "../../../src/api-config/api_config";
//import api from "../../../src/api-config/api_config";

const baseUrl = "https://aquawaterapp.herokuapp.com";

const validateSchema = yup.object().shape({
  email: yup
    .string()
    .email("⚠️ Invalid Email")
    .required("⚠️ Email is required"),
});

const ForgotPasswordScreen = ({ navigation, route }) => {
  const handleSubmitForm = async (values, formikActions) => {
    console.log(values.email);
    let email = values.email;
    try {
      await axios.post(`${baseUrl}/api/v1/Account/Forgot-Password`, {
        email,
      });
    } catch (e) {
      console.log(e);
    }

    // try {
    //   const response = await axios.post(
    //     `${baseUrl}/api/v1/Account/Forgot-Password`,
    //     {
    //       email: values,
    //     }
    //   );
    //   if (response.status === 201) {
    //     alert(
    //       `A link has been sent to your email address to change your password`
    //     );
    //   } else {
    //     throw new Error("Error has occurred");
    //   }
    // } catch (error) {
    //   alert("An error has occurred");
    // }
    formikActions.resetForm();
    formikActions.setSubmitting(false);
  };
  return (
    <Formik
      initialValues={{ email: "" }}
      validateOnMount={true}
      validationSchema={validateSchema}
      onSubmit={handleSubmitForm}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <SafeAreaView>
          {/* <SupplierHeader /> */}
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
              backgroundColor: "#FFF",
            }}
          >
            <View>
              <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 20 }}>
                Reset Password
              </Text>
              <Text
                style={{
                  fontFamily: "Manrope_400Regular",
                  fontSize: 14,
                  paddingVertical: 10,
                }}
              >
                Enter the email associated with your account and we'll send an
                email with instruction to reset your password
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Manrope_400Regular",
                    marginVertical: 5,
                  }}
                >
                  Email
                </Text>
                <View>
                  <TextInput
                    placeholder="abayomitunde@gmail.com"
                    color="#000"
                    keyboardType="email-address"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    style={{
                      height: 48,
                      borderWidth: 0.5,
                      borderColor: "rgba(33, 51, 79, 0.2)",
                      padding: 10,
                      fontFamily: "Manrope_400Regular",
                      paddingVertical: 10,
                    }}
                  />
                  <AntDesign
                    style={{
                      position: "absolute",
                      top: "25%",
                      left: "90%",
                    }}
                    name={isValid ? "check" : "close"}
                    size={20}
                    color={!isValid ? "red" : "green"}
                  />
                </View>
                {errors.email && touched.email && (
                  <Text
                    style={{
                      color: "red",
                      fontSize: 14,
                      fontWeight: "bold",
                      padding: 5,
                      marginTop: 3,
                      opacity: 0.4,
                    }}
                  >
                    {errors.email}
                  </Text>
                )}
              </View>
              <TouchableHighlight
                style={{ marginTop: 20, paddingVertical: 10 }}
                underlayColor="#114E93"
                disabled={!isValid}
                onPress={(e) => {
                  handleSubmit(e);
                }}
              >
                <View
                  style={{
                    backgroundColor: isValid ? "#147DF5" : "lightgrey",
                    height: 48,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "#FFF", fontFamily: "Manrope_700Bold" }}
                  >
                    Reset Password
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
