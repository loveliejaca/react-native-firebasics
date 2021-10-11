import React, { useState } from 'react';
import LottieView from 'lottie-react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signUp } from '../store/actions/authActions'


import {
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  Button,
  View,
  Text,
  Animated,
  Easing,
  StyleSheet,
  Form,
  ImageBackground } from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

import {globalStyles} from '../styles/global'


const AuthSignUpScreen  = (props) => {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();

  function handleSubmit(e) {
    const data = {
      email: email,
      password: password
    }

    if(password !== confirmPassword) {

    }
    console.log("-------------- submit", props);

  }


  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <ImageBackground
        style={globalStyles.backgroundImage}
        source={require('../assets/images/space-bg.png')}
      />

      <View style={styles.lottieBox}>
        <LottieView
          autoPlay
          loop
          source={require('../assets/json/spaceship-1.json')}
          style={{
            height: 150,
            width: 150
          }}
        />
      </View>
      <View style={styles.innerContainer}>
      <FormInput
        labelValue={firstname}
        onChangeText={(userFirstname) => setFirstname(userFirstname)}
        placeholderText="Firstname"
        iconType=""
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={lastname}
        onChangeText={(userLastname) => setLastname(userLastname)}
        placeholderText="Lastname"
        iconType=""
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType=""
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType=""
        secureTextEntry={true}
      />
      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userConfirmPassword) => setPassword(userConfirmPassword)}
        placeholderText="Confirm Password"
        iconType=""
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => handleSubmit()}
      />
        <View style={styles.signInCon}>
          <Text style={styles.cmnTxt}> Already have and account? </Text>
          <TouchableOpacity style={styles.forgotButton} onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.signInText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#f9f7fe'

  },
  lottieBox: {
    position: 'absolute',
    top: 80,
  },
  cmnTxt: {
    color: '#fff',
    fontFamily: 'NunitoRegular',
    fontSize: 18
  },
  innerContainer: {
    padding: 20,
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  forgotButton: {
    marginBottom: 10
  },
  navButtonText: {
    fontFamily: 'NunitoRegular',
    marginTop: 20,
    color: '#03af9d',
    fontSize: 18,
    borderColor: 'transparent',
    borderBottomColor: '#03af9d',
    borderWidth: 1,
  },
  signInCon: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: 'center',
    marginTop: 20
  },
  signInText: {
    fontFamily: 'NunitoRegular',
    color: '#03af9d',
    fontSize: 18,
    borderColor: 'transparent',
    borderBottomColor: '#03af9d',
    borderWidth: 1,
    marginLeft: 10
  },

})

// export default AuthSignUpScreen

const mapStateToProps = (state) => {
  console.log("state---", state);
  return{
    authError: null,
    auth: null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: bindActionCreators(signUp, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthSignUpScreen)
