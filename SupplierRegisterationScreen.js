import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";

import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from 'yup';
import RadioButtonRN from 'radio-buttons-react-native';
import Constants from 'expo-constants';



import api from "./src/api-config/api_config";
import AppPicker from "./src/components/AppPicker/AppPicker";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])(?=.{6,})/;
const SignupSchema = Yup.object().shape({
    company: Yup.string().required("Required"),
    firstname: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    lastname: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, "Too Short!").max(50, "Too Long!").matches(passwordRegExp, "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required("Required"),
    phone: Yup.string().min(11, "Too Short!").max(15, "Too Long!").matches(phoneRegExp, 'Invalid Phone number!').required("Required"),
    state: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    street: Yup.string().required("Required")
});

const gender = [
  {
    label: 'Male'
   },
   {
    label: 'Female'
   }
];

const SupplierRegisterationScreen = ({navigation, route}) => {
  const [submitBtnText, updateSubmitBtnText] = React.useState("Sign Up")
  const [disableSubmitBtn, updateDisableSubmitBtn] = React.useState(false);
  const [companies, updateCompanies] = React.useState([]);
  const [selectedCompany, updateSelectedCompany] = React.useState({
    "companyName": "",
    "id": ""
  });
  const [snackBar, updateSnackBar] = React.useState({
    text: "",
    icon: "",
    iconColor: "#000",
    bgColor: "#FFF",
    textColor: "#FFF"
  });
  const [snackBarStatus, updateSnackBarStatus] = React.useState(false);

  function showSnackBar(duration = 3000) {
    updateSnackBarStatus(true)
    setTimeout(() => {
      updateSnackBarStatus(false)
    }, duration)
  }

  async function getCompanies() {
    try {
      const response = await api.get("/api/Company/GetAllCompanies");
      if (response.data.message === "Successful") {
        updateCompanies(response.data.data);
      }
    } catch (error) {
      // console.log(error);
    }
  }

  async function postSupplierDetails(data, resetForm) {
    try {
      const response = await api.post("/CompanyManager", {...data});
      
      if (response.data.success) {
        updateSnackBar({
          icon: "close",
          text: response.data.message.trim(),
          iconColor: "#0f5132",
          bgColor: "#badbcc",
          textColor: "#0f5132"
        });
        showSnackBar();
        setTimeout(() => {
          navigation.navigate("CheckMail")
        }, 1000);
      }
      updateDisableSubmitBtn(false);
      updateSubmitBtnText("Sign Up");
      resetForm();
      updateSelectedCompany({
        companyName: "",
        id: ""
      });
    } catch (error) {
      if (error) {
        if (typeof error.response.data === "string" && error.response.data !== "") {
          updateSnackBar({
            text: error.response.data.trim(),
            icon: "close",
            iconColor: "#842029",
            bgColor: "#f5c2c7",
            textColor: "#842029"
          });
          showSnackBar();
        } else {
          updateSnackBar({
            text: "Error! please try again.",
            icon: "close",
            iconColor: "#842029",
            bgColor: "#f5c2c7",
            textColor: "#842029"
          });
          showSnackBar();
        }
        updateDisableSubmitBtn(false);
        updateSubmitBtnText("Sign Up");
      }
    }
  }

  React.useEffect(() => {
    getCompanies()
  }, [])

  function registerSupplier(values, resetForm) {
    updateDisableSubmitBtn(true);
    updateSubmitBtnText("Please wait...");

    let details = {
      companyId: values.company,
      user: {
        firstName: `${values.firstname[0].toString().toUpperCase()}${values.firstname.toString().substr(1)}`,
        lastname: `${values.lastname[0].toString().toUpperCase()}${values.lastname.toString().substr(1)}`,
        email: values.email,
        password: values.password,
        confirmPassword: values.password,
        phoneNumber: values.phone,
        gender: "undefined",
        age: values.age,
        location: {
          state: values.state,
          street: values.street,
          city: values.city,
          country: "",
          houseNumber: "",
          otherDetails: "",
          latitude: "",
          longitude: ""
        }
      },
      profilePictureUrl: values.profilePictureUrl
    }
    
    postSupplierDetails(details, resetForm);
  }

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "#FFF", marginTop: 0}}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
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
            Sign up your account
          </Text>
          
          <Formik
            initialValues={{
                company: selectedCompany.id,
                firstname: "",
                lastname: "",
                userType: route.params.userType.toString(),
                email: "",
                password: "",
                phone: "",
                age: 0,
                state: "",
                city: "",
                street: "",
                profilePictureUrl: ""
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, {resetForm}) => {
              registerSupplier(values, resetForm)
            }}>

              {
                ({ handleChange, handleBlur, handleSubmit, values, errors, touched, validateOnBlur, resetForm }) => (
                  <>
                  <View style={{ marginTop: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        marginVertical: 5,
                      }}
                    >
                      Company
                    </Text>
                    <View
                      style={{
                        height: 48,
                        padding: 10,
                        borderWidth: 0.5,
                        borderColor: (errors.company && touched.company) ? "tomato" : "#21334F33",
                      }}
                    >
                      <AppPicker formik={{handleBlur, handleChange, values, validateOnBlur, errors}} items={companies} placeholder="Select Company" selectedItem={selectedCompany} setSelectedItem={updateSelectedCompany} />
                    </View>
                    {(errors.company && touched.company) && <Text
                        style={{
                          fontSize: 14,
                          fontFamily: "Manrope_400Regular",
                          color: "tomato",
                          marginVertical: 2,
                        }}
                      >
                        { errors.company }
                      </Text>}
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        marginVertical: 5,
                      }}
                    >
                      First Name
                    </Text>
                    <TextInput
                      autoCorrect={false}
                      autoCapitalize="none"
                      placeholder="First name"
                      color="#000"
                      onChangeText={handleChange("firstname")}
                      onBlur={handleBlur("firstname")}
                      value={values.firstname}
                      style={{
                        height: 48,
                        borderWidth: 0.5,
                        borderColor: (errors.firstname && touched.firstname) ? "tomato" : "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        fontFamily: "Manrope_400Regular",
                      }}
                    />
                    {(errors.firstname && touched.firstname) && <Text
                        style={{
                          fontSize: 14,
                          fontFamily: "Manrope_400Regular",
                          color: "tomato",
                          marginVertical: 2,
                        }}
                      >
                        { errors.firstname }
                      </Text>}
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        marginVertical: 5,
                      }}
                    >
                      Last Name
                    </Text>
                    <TextInput
                      autoCorrect={false}
                      autoCapitalize="none"
                      placeholder="Last name"
                      color="#000"
                      onChangeText={handleChange("lastname")}
                      onBlur={handleBlur("lastname")}
                      value={values.lastname}
                      style={{
                        height: 48,
                        borderWidth: 0.5,
                        borderColor: (errors.lastname && touched.lastname) ? "tomato" : "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        fontFamily: "Manrope_400Regular",
                      }}
                    />
                    {(errors.lastname && touched.lastname) && <Text
                        style={{
                          fontSize: 14,
                          fontFamily: "Manrope_400Regular",
                          color: "tomato",
                          marginVertical: 2,
                        }}
                      >
                        { errors.lastname }
                      </Text>}
                  </View>
                  <View style={{ marginTop: 10 }}>
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
                      placeholder="Email"
                      color="#000"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      style={{
                        height: 48,
                        borderWidth: 0.5,
                        borderColor: (errors.email && touched.email) ? "tomato" : "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        fontFamily: "Manrope_400Regular",
                      }}
                    />
                    {(errors.email && touched.email) && <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        color: "tomato",
                        marginVertical: 2,
                      }}
                    >
                      { errors.email }
                    </Text>}
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
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      secureTextEntry
                      placeholder="Password"
                      textContentType="password"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      style={{
                        height: 48,
                        borderWidth: 0.5,
                        borderColor: (errors.password && touched.password) ? "tomato" : "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        fontFamily: "Manrope_400Regular",
                      }}
                    />
                    {(errors.password && touched.password) && <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        color: "tomato",
                        marginVertical: 2,
                      }}
                    >
                      { errors.password }
                    </Text>}
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        marginVertical: 5,
                      }}
                    >
                      Phone Number
                    </Text>
                    <TextInput
                      placeholder="Phone number"
                      keyboardType="numeric"
                      onChangeText={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                      value={values.phone}
                      style={{
                        height: 48,
                        borderWidth: 0.5,
                        borderColor: (errors.phone && touched.phone) ? "tomato" : "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        fontFamily: "Manrope_400Regular",
                      }}
                    />
                    {(errors.phone && touched.phone) && <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        color: "tomato",
                        marginVertical: 2,
                      }}
                    >
                      { errors.phone }
                    </Text>}
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        marginVertical: 5,
                      }}
                    >
                      Street
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 0.5,
                        borderColor: (errors.street && touched.street) ? "tomato" : "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        paddingHorizontal: 5,
                      }}
                    >
                      <MaterialCommunityIcons
                        name="map-marker-outline"
                        size={24}
                        color="#C4C4C4"
                      />
                      <TextInput
                        placeholder="Use current location"
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        onChangeText={handleChange("street")}
                        onBlur={handleBlur("street")}
                        value={values.street}
                        style={{
                          flex: 1,
                          fontFamily: "Manrope_400Regular",
                          paddingHorizontal: 5,
                        }}
                      />
                    </View>
                    {(errors.street && touched.street) && <Text
                        style={{
                          fontSize: 14,
                          fontFamily: "Manrope_400Regular",
                          color: "tomato",
                          marginVertical: 2,
                        }}
                      >
                        { errors.street }
                      </Text>}
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        marginVertical: 5,
                      }}
                    >
                      City
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 0.5,
                        borderColor: "rgba(33, 51, 79, 0.2)",
                        borderColor: (errors.city && touched.city) ? "tomato" : "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        paddingHorizontal: 5,
                      }}
                    >
                      <MaterialCommunityIcons
                        name="map-marker-outline"
                        size={24}
                        color="#C4C4C4"
                      />
                      <TextInput
                        placeholder="Use current location"
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        onChangeText={handleChange("city")}
                        onBlur={handleBlur("city")}
                        value={values.city}
                        style={{
                          flex: 1,
                          fontFamily: "Manrope_400Regular",
                          paddingHorizontal: 5,
                        }}
                      />
                    </View>
                    { (errors.city && touched.city) && <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        color: "tomato",
                        marginVertical: 2,
                      }}
                    >
                      { errors.city }
                    </Text> }
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        marginVertical: 5,
                      }}
                    >
                      State
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 0.5,
                        borderColor: "rgba(33, 51, 79, 0.2)",
                        borderColor: (errors.state && touched.state) ? "tomato" : "rgba(33, 51, 79, 0.2)",
                        padding: 10,
                        paddingHorizontal: 5,
                      }}
                    >
                      <MaterialCommunityIcons
                        name="map-marker-outline"
                        size={24}
                        color="#C4C4C4"
                      />
                      <TextInput
                        placeholder="Use current location"
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        onChangeText={handleChange("state")}
                        onBlur={handleBlur("state")}
                        value={values.state}
                        style={{
                          flex: 1,
                          fontFamily: "Manrope_400Regular",
                          paddingHorizontal: 5,
                        }}
                      />
                    </View>
                    { (errors.state && touched.state) && <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Manrope_400Regular",
                        color: "tomato",
                        marginVertical: 2,
                      }}
                    >
                      { errors.state }
                    </Text> }
                  </View>
                  <TouchableHighlight
                    disabled={disableSubmitBtn}
                    style={{ marginTop: 20 }}
                    underlayColor="#114E93"
                    onPress={(e) => {
                      // navigation.navigate("ConfirmEmail")
                      handleSubmit(e)
                    }}
                    // onPress={handleSubmit}
                  >
                    <View
                      style={{
                        backgroundColor: disableSubmitBtn ? "#114E93" : "#147DF5",
                        height: 48,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ color: "#FFF", fontFamily: "Manrope_700Bold" }}>
                        {submitBtnText}
                      </Text>
                    </View>
                  </TouchableHighlight>
                  </>
                )
              }

          </Formik>
          
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            <Text style={{ fontFamily: "Manrope_400Regular" }}>
              Already have an account?
            </Text>
            <TouchableWithoutFeedback onPress={() => {
              navigation.navigate("Login")
            }}>
              <Text
                style={{
                  color: "#147DF5",
                  fontFamily: "Manrope_700Bold",
                }}
              > Sign in </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
      { snackBarStatus && (
        <View style={{width: Dimensions.get('window').width, padding: 20, top: -Constants.statusBarHeight, position: "absolute"}}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            width: "100%",
            backgroundColor: snackBar.bgColor.toString(),
            shadowOffset: { width: 0, height: 2.5 },
            shadowColor: '#BEBEBE',
            shadowOpacity: 1,
            elevation: 10,
          }}>
            <FontAwesome name={snackBar.icon} size={18} color={snackBar.iconColor} style={{alignSelf: "center"}} />
            <Text style={[{paddingHorizontal: 10, flexShrink: 1, color: snackBar.textColor.toString()}]}>{snackBar.text}</Text>
          </View>
        </View>
      ) }
    </>
  );
};

export default SupplierRegisterationScreen;
