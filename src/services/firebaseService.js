import firebase from 'firebase/compat/app';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import 'firebase/compat/auth';

export class FirebaseService {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCiAoIgxvdZnD0_w2CFKSL9KtQ2Uz3hUSg",
      authDomain: "test-social-network-769f1.firebaseapp.com",
      databaseURL: "https://test-social-network-769f1-default-rtdb.firebaseio.com",
      projectId: "test-social-network-769f1",
      storageBucket: "test-social-network-769f1.appspot.com",
      messagingSenderId: "602607912276",
      appId: "1:602607912276:web:6b44b262252104d386b4c1",
      measurementId: "G-Q1609MZRZ0"
    };
    firebase.initializeApp(firebaseConfig);

    this.auth = firebase.auth();
    this.database = getFirestore();
  }

  async signIn(email, password) {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

  async signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await this.auth.signInWithPopup(provider);
      return result.user;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

  async signUpWithEmail(email, password) {
    try {
      const userCreated = await this.auth.createUserWithEmailAndPassword(email, password);
      return userCreated.user;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

  async getAllPosts() {
    const postsRef = collection(this.database, "posts");
    const q = query(postsRef);
    return getDocs(q).then((querySnapshot) => {
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }).catch((error) => {
      console.log("Error getting documents: ", error);
    });
  }

  async signOut() {
    try {
      await this.auth.signOut();
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }


}