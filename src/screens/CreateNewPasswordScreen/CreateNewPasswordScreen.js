import React, { useState } from "react";
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
import { Entypo, Feather } from "@expo/vector-icons";
import SnackBar from "../../components/SnackBar/SnackBar";
import { Formik } from "formik";
import * as Yup from "yup";

const validateSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters long`)
    .required("⚠️ Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string().equals(
    [Yup.ref("password"), null],
    "⚠️ Password does not match"
  ),
});
function CreateNewPasswordScreen({ navigation }) {
  const [snackBarStatus, updateSnackBar] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const handleSubmitForm = async (values, formikActions) => {
    console.log(values.email);
    let password = values.password;
    let confirmPassword = values.confirmPassword;
    console.log(password);
    console.log(confirmPassword);
    try {
      await axios.post(`${baseUrl}/api/v1/Account/Reset-Password`, {
        ...values,
      });
    } catch (e) {
      console.log(e);
    }
    formikActions.resetForm();
    formikActions.setSubmitting(false);
    console.log(password);
    console.log(confirmPassword);
  };

  function showSnackBar(duration = 3000) {
    updateSnackBar(true);
    setTimeout(() => {
      updateSnackBar(false);
    }, duration);
  }

  return (
    <Formik
      initialValues={{ password: "", confirmPassword: "" }}
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
        <SafeAreaView
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#FFF",
            marginTop: 15,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40,
            }}
          >
            <Image source={require("../../assets/bluelogo.png")} />
          </View>

          <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Manrope_700Bold",
              }}
            >
              Create New Password
            </Text>
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Manrope_400Regular",
                  marginVertical: 5,
                }}
              >
                New Password
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
                  secureTextEntry={showPassword}
                  placeholder="New Password"
                  underlineColorAndroid="transparent"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  style={{
                    flex: 1,
                    fontFamily: "Manrope_400Regular",
                  }}
                />
                <Entypo
                  name={showConfirmPassword ? "eye-with-line" : "eye"}
                  size={20}
                  color="black"
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              </View>
              {errors.password && touched.password && (
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
                  {errors.password}
                </Text>
              )}
            </View>

            <View
              style={{
                marginVertical: 3,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Feather name="info" size={14} color="#C4C4C4" />
              <Text
                style={{
                  fontSize: 12,
                  color: "#C4C4C4",
                  fontFamily: "Manrope_400Regular",
                }}
              >
                {" "}
                Must be at least 8 characters.
              </Text>
            </View>

            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Manrope_400Regular",
                  marginVertical: 5,
                }}
              >
                Confirm Password
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
                  secureTextEntry={showConfirmPassword}
                  placeholder="Confirm Password"
                  underlineColorAndroid="transparent"
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  style={{
                    flex: 1,
                    fontFamily: "Manrope_400Regular",
                  }}
                />
                <Entypo
                  name={showConfirmPassword ? "eye-with-line" : "eye"}
                  size={20}
                  color="black"
                  onPress={() => {
                    setShowConfirmPassword(!showConfirmPassword);
                  }}
                />
              </View>
              {errors.confirmPassword && touched.confirmPassword && (
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
                  {errors.confirmPassword}
                </Text>
              )}
            </View>
            <View
              style={{
                marginVertical: 3,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Feather name="info" size={14} color="#C4C4C4" />
              <Text
                style={{
                  fontSize: 12,
                  color: "#C4C4C4",
                  fontFamily: "Manrope_400Regular",
                }}
              >
                {" "}
                Both password must match.
              </Text>
            </View>

            <TouchableHighlight
              style={{ marginTop: 20 }}
              underlayColor="#114E93"
              disabled={!isValid}
              onPress={() => {
                showSnackBar();
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
                <Text style={{ color: "#FFF", fontFamily: "Manrope_700Bold" }}>
                  Reset Password
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

          {snackBarStatus && (
            <SnackBar
              text="Password reset successfully"
              icon="check-circle"
              iconColor="#38B000"
            />
          )}
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default CreateNewPasswordScreen;
