import React, { useState } from 'react';
import LottieView from 'lottie-react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { authLogin } from '../store/actions/authActions'

import {globalStyles} from '../styles/global'

import {
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  Button,
  View,
  Text,
  Animated,
  Form,
  Easing,
  StyleSheet,
  ImageBackground } from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';


const AuthLoginScreen  = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [state, setState] = useState({});

  function handleChange(e) {
    console.log("change", e);
  }

  function handleSubmit(e) {
    const data = {
      email: email,
      password: password
    }

    props.authLogin(data, (res) => {
      if(res) {
        console.log("res------------*********-------", res);
        props.navigation.push('Profile')
      }
    })
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
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={handleSubmit}
      />


      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.signInCon}>
        <Text style={styles.cmnTxt}> Don't have an acount? </Text>
        <TouchableOpacity style={styles.forgotButton} onPress={() => props.navigation.navigate('Create Account')}>
          <Text style={styles.signInText}>Sign Up</Text>
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

// export default AuthLoginScreen

// const mapStateToProps = (state) => {
//   console.log("state---", state);
//   return{
//     authError: null,
//     auth: null
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    authLogin: bindActionCreators(authLogin, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AuthLoginScreen)
