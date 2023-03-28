import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const baseUrl = "https://aquawaterapp.herokuapp.com";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("invalid email").required("Email is required"),
  password: Yup.string()
    .min(7, ({ min }) => `Password must be atleast ${min} characters`)
    .required("password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])(?=.{6,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

function Login({ navigation, route }) {
  // const userInfo = {
  //   email: "",
  //   password: "",
  // };
  // const [error, setError] = useState("");
  // const { email, password } = userInfo;
  // const handleOnChangeText = (value, fieldName) => {
  //   setUserInfo({ ...userInfo, [fieldName]: value });
  //   console.log(value);
  // };
  // const isValidForm = () => {
  // if (!isValidObjField(userInfo))
  //   return updateError("Required all fields!", setError);

  //   if (!isValidEmail(email)) return updateError("Invalid email!", setError);

  //   if (!password.trim() || password.length < 8)
  //     return updateError("Password is too short!", setError);

  //   return true;
  // };
  const [showPassword, setShowPassword] = useState(false);
  const axio = axios.create({ baseURL: "https://aquawaterapp.herokuapp.com" });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnMount={true}
      onSubmit={async (values) => {
        //Call login service here
        //  const data = {
        //     "email": "string",
        //     "password": "string"
        //   }
        try {
          const response = await axio.post("/api/v1/Account/login", {
            email: "",
            password: "",
          });
          if (response.status === 201) {
            alert(`You have created: ${JSON.stringify(response.data)}`);
          } else {
            throw new Error("Error has occurred");
          }
        } catch (e) {
          alert("An erro has occured");
        }
      }}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <SafeAreaView
          style={{ height: "100%", width: "100%", backgroundColor: "#FFF" }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 53,
            }}
          >
            <Image source={require("./src/assets/bluelogo.png")} />
          </View>

          <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Manrope_700Bold",
              }}
            >
              Login to your Account
            </Text>

            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Manrope_400Regular",
                  marginVertical: 5,
                }}
              >
                Email
              </Text>
              <TextInput
                keyboardType="email-address"
                onBlur={handleBlur("email")}
                value={values.email}
                onChangeText={handleChange("email")}
                autoCapitalize="none"
                placeholder="Email"
                color="#000"
                style={{
                  height: 48,
                  borderWidth: 0.5,
                  borderColor: "rgba(33, 51, 79, 0.2)",
                  padding: 10,
                  fontFamily: "Manrope_400Regular",
                }}
              />
              {errors.email && touched.email && (
                <Text
                  style={{
                    fontSize: 14,
                    color: "red",
                    fontWeight: "bold",
                    marginTop: 5,
                  }}
                >
                  {errors.email}
                </Text>
              )}
            </View>

            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Manrope_400Regular",
                  marginVertical: 5,
                }}
              >
                Password
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 48,
                  borderWidth: 0.5,
                  borderColor: "rgba(33, 51, 79, 0.2)",
                  padding: 10,
                }}
              >
                <TextInput
                  secureTextEntry={!showPassword}
                  placeholder="Password"
                  underlineColorAndroid="transparent"
                  onBlur={handleBlur("password")}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  style={{
                    flex: 1,
                    fontFamily: "Manrope_400Regular",
                  }}
                />
                <Entypo
                  name={showPassword ? "eye-with-line" : "eye"}
                  size={20}
                  color="black"
                  onPress={() => setShowPassword(!showPassword)}
                />
              </View>
            </View>
            {errors.password && touched.password && (
              <Text
                style={{
                  fontSize: 14,
                  color: "red",
                  fontWeight: "bold",
                  marginTop: 5,
                }}
              >
                {errors.password}
              </Text>
            )}

            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("ForgotPassword");
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#147DF5",
                  fontFamily: "Manrope_400Regular",
                  marginVertical: 3,
                }}
              >
                Forgot Password?
              </Text>
            </TouchableWithoutFeedback>

            <TouchableHighlight
              style={{ marginTop: 20 }}
              underlayColor="#114E93"
              rounded
              //disabled={!isValid}
              onPress={
                handleSubmit
                // navigation.navigate("Supplier");
              }
            >
              <View
                style={{
                  backgroundColor: "#147DF5",
                  height: 48,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#FFF", fontFamily: "Manrope_700Bold" }}>
                  Login
                </Text>
              </View>
            </TouchableHighlight>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: 30,
              }}
            >
              <Text style={{ fontFamily: "Manrope_400Regular" }}>
                Don't have an account?
              </Text>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <Text
                  style={{
                    color: "#147DF5",
                    fontFamily: "Manrope_700Bold",
                  }}
                >
                  {" "}
                  Sign Up
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default Login;
