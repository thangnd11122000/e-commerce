import { initializeApp } from "firebase/app"
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBw1YYX7Oe4AXlbyxT1YfJ1EhMELbPOYMo",
  authDomain: "techchain-435ce.firebaseapp.com",
  projectId: "techchain-435ce",
  storageBucket: "techchain-435ce.appspot.com",
  messagingSenderId: "553861426090",
  appId: "1:553861426090:web:729b8af40860ab6e7b59d3",
  measurementId: "G-SBBME2DHTE",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    return res
  } catch (err) {
    console.log("ERROR: ", err)
    throw err
  }
}

export const signInWithFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, facebookProvider)
    return res
  } catch (err) {
    console.log("ERROR: ", err)
    throw err
  }
}

export default firebaseConfig
