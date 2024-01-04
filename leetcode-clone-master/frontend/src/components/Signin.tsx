import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:5173",
  // This must be true.
  handleCodeInApp: true,
  dynamicLinkDomain: "example.page.link",
};

export const Signin = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");

  async function onSignin() {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        alert("sent email");
        // ...
      })
      .catch((error) => {
        alert("email not sent");
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  }
  return (
    <div>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          onSignin();
        }}
      >
        Signup
      </button>
    </div>
  );
};
