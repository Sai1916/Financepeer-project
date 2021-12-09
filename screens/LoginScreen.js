import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Input } from "react-native-elements";
import useAuth from "../context/useAuth";
import { AntDesign, Feather, MaterialIcons } from "react-native-vector-icons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Login } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray",
      }}
    >
      <ImageBackground
        source={require("../assets/bg-logo.png")}
        resizeMode="cover"
        style={styles.bg}
      >
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Email"
              style={styles.input}
              required={true}
              value={email}
              textContentType="emailAddress"
              onChangeText={(val) => setEmail(val)}
              leftIcon={<MaterialIcons name="email" size={24} color="black" />}
            />

            <Input
              placeholder="Password"
              style={styles.input}
              required={true}
              value={password}
              textContentType="password"
              onChangeText={(val) => setPassword(val)}
              secureTextEntry={true}
              leftIcon={<Feather name="lock" size={24} color="black" />}
            />
          </View>
          <View style={styles.rp}>
            <View style={styles.rem}>
              <AntDesign name="checkcircle" size={14} />
              <Text>Remember me</Text>
            </View>
            <Text>Forgot Password?</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Login(email, password)}
          >
            <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>
          <View style={styles.signtext}>
            <Text>Don't have an account?</Text>
            <Text
              style={styles.signup}
              onPress={() => navigation.push("SignUpScreen")}
            >
              SignUp
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  bg: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: "100%",
    height: 80,
    alignItems: "flex-end",
    justifyContent: "center",
    marginVertical: 10,
    marginLeft: -20,
  },
  logo: {
    height: 60,
    width: 60,
  },
  form: {
    width: "80%",
    paddingVertical: 40,
    marginVertical: 50,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    alignSelf: "center",
    borderRadius: 40,
  },
  input: {
    height: 35,
    opacity: 1,
  },
  inputContainer: {
    marginHorizontal: 30,
  },
  button: {
    padding: 8,
    width: "70%",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 40,
    marginVertical: 20,
    backgroundColor: "#DB4700",
  },
  rp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  rem: {
    flexDirection: "row",
    alignItems: "center",
  },
  btntext: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  signtext: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signup: {
    borderBottomWidth: 1,
  },
});
