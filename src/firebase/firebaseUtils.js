import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, getDoc, addDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Function that takes the object from our authentication library and store it iniside our database

export const createUserProfileDocument = async (userAuth, additionalData) => {
	// Condition to check if our code is getting back a valid object and not null
	if (!userAuth) return;

	const docRef = doc(db, "users", `${userAuth.uid}`);
	// console.log(docRef.id);

	const docSnapShot = await getDoc(docRef);
	// console.log(docSnapShot);

	// Condition to check if there is data in the documentRefObj
	if (docSnapShot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await addDoc(collection(db, "users"), {
				displayName,
				email,
				createdAt,
			});
			// console.log("Document written with ID: ", docRef.id);
		} catch (error) {
			console.log("An Error!", error);
		}
	}

	return docRef;
};

const app = initializeApp(firebaseConfig);

// Needed For Google Authentication
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const loginWithGoogle = () => signInWithPopup(auth, provider);
