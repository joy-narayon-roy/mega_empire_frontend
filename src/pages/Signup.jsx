import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase";

// Initialize Firebase Authentication and get a reference to the service
const create = () => {
  console.log(app);
  const auth = getAuth(app);

  signInWithPopup(auth, GoogleAuthProvider)
    .then((result) => {
      console.log(result);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(token);
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
};
export default function Signup() {
  return (
    <div>
      Signup <button onClick={create}>Signup</button>{" "}
    </div>
  );
}
