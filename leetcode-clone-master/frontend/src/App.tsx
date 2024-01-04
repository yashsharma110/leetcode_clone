import "./App.css";
import { Signin } from "./components/Signin";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOtRmeNaRYi3DugEsS-J5ka_mSkMNaRjQ",
  authDomain: "leetcode-clone-42b54.firebaseapp.com",
  projectId: "leetcode-clone-42b54",
  storageBucket: "leetcode-clone-42b54.appspot.com",
  messagingSenderId: "911557173355",
  appId: "1:911557173355:web:b42dbe1f6b17b642dc112e",
  measurementId: "G-CK2NR393XE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <div>
        <Signin />
      </div>
    </>
  );
}

export default App;
