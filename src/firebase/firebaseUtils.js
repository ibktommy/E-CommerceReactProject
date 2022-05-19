import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDTLEO1aaMlimoQjqdOpIESlVf9aX4QJS0",
	authDomain: "crwn-clothing-atomdev.firebaseapp.com",
	projectId: "crwn-clothing-atomdev",
	storageBucket: "crwn-clothing-atomdev.appspot.com",
	messagingSenderId: "1081870509308",
	appId: "1:1081870509308:web:8733273d5c79a07cc6e379",
	measurementId: "G-3HQTXT9BYM",
};

// Function that takes the object from our authentication library and store it iniside our database

export const createUserProfileDocument = async (userAuth, additionalData) => {
	// Condition to check if our code is getting back a valid object and not null
	if (!userAuth) return;

	const docRef = doc(db, "users", `${userAuth.uid}`);
	console.log(docRef.id);

	const docSnapShot = await getDoc(docRef);
	console.log(docSnapShot);
};

const app = initializeApp(firebaseConfig);

// Needed For Google Authentication

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const loginWithGoogle = () => signInWithPopup(auth, provider);
