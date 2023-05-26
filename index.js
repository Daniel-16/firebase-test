import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuOg6mf16X67-wavwvgtY1snKTXyK83Ng",
  authDomain: "fir-project-b5756.firebaseapp.com",
  projectId: "fir-project-b5756",
  storageBucket: "fir-project-b5756.appspot.com",
  messagingSenderId: "99733096089",
  appId: "1:99733096089:web:f6f9a796bf31474f2e9a08",
  measurementId: "G-8Z3ZZXKP0B",
};

const db = getFirestore();

//Collection reference
const colRef = collection(db, "users");
getDocs(colref).then((snapshot) => {
  console.log(snapshot.docs);
});

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
