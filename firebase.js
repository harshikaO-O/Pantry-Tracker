import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGESENDERID,
    appId: process.env.NEXT_PUBLIC_APPID
};
console.log(process.env.NEXT_PUBLIC_APIKEY); // Should log your API key

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
