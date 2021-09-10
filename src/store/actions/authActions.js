
export const authLogin = (credentials, callBack) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {


    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((data) => {
      dispatch({ type: 'LOGIN_SUCCESS', data: data.user});
      callBack(true)
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });

  }
}

export const signUp = (newUser, callBack) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    let user = null;

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then(resp => {
      user = {
        email: newUser.email,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        number: '',
        avatar: newUser.avatar
      }

      resp.user.updateProfile({
        displayName: newUser.firstname,
        photoURL: newUser.avatar
      })

      return firestore.collection('users').doc(resp.user.uid).set(user);

    }).then(() => {
      callBack(true)
      dispatch({ type: 'SIGNUP_SUCCESS', data: user});
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err});
    });
  }
}

export const signOut = (callBack) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
      callBack(true)
    });
  }
}

export const resetPassword = (email, callBack) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().sendPasswordResetEmail(email).then(() => {
      dispatch({ type: 'PASSWORD_RESET_SUCCESS' })
      callBack(true)
    });
  }
}
