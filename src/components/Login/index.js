import './login.css'
import React from 'react';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/services';
import toast from 'react-hot-toast';

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login () {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
    if (user) {
      toast.success('Login successfully. Welcome ' + user._delegate.displayName);
    }
  };

  return (
    <div className="form">
      <div className="form__box">
        <div className="form__left">
          <div className="form__padding">
            <img className="form__image" src="https://i.pinimg.com/originals/8b/44/51/8b4451665d6b2139e29f29b51ffb1829.png" />
          </div>
        </div>
        <div className="form__right">
          <div className="form__padding-right">
            <h2>
              Welcome to funny chat app
            </h2>
            <button onClick={() => handleLogin(googleProvider)} className="btn">
              <i class="fa-brands fa-google"></i>
              <span className="btn-span">
                Login with Google
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
