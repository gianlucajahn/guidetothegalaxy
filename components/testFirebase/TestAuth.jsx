import classNames from "classnames";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  getDocs,
  collectionGroup,
  query,
} from "firebase/firestore";
import { useState } from "react";
import { FoodModal } from "./FoodModal";
import { auth, db } from "/firebase.js";

export default function TestAuth() {
  const provider = new GoogleAuthProvider();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [allUserItems, setAllUserItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
      if (!loggedIn) setLoggedIn(true);
      addNewUserDoc(user);
    } else if (loggedIn) {
      setCurrentUser({});
      setLoggedIn(false);
    }
  });
  async function addNewUserDoc(user) {
    const docSnap = await getDoc(doc(db, "users", user.uid));
    if (!docSnap.exists()) {
      await setDoc(doc(db, "users", user.uid), { email: user.email });
      const collectionRef = collection(db, "users", user.uid, "foodItem");
      await setDoc(doc(collectionRef, "Nutella"), { kcal: 450 });
    }
  }

  async function addFoodItem(name, kcal, grams) {
    const collectionRef = collection(db, "users", currentUser.uid, "foodItem");
    const docSnap = await getDoc(doc(collectionRef, name));
    if (!docSnap.exists()) {
      const data = {
        name: name,
        kcalPer100g: kcal,
        gramsUsed: grams,
        totalKcal: (kcal / 100) * grams,
      };
      try {
        const response = await setDoc(doc(collectionRef, name), data);
      } catch {
        console.log("doesnt work");
      }
    }
  }

  async function login() {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    signOut(auth);
  }

  async function getAllUserItems() {
    const collectionRef = collection(db, "users", currentUser.uid, "foodItem");
    const querySnapshot = await getDocs(collectionRef);
    const newArray = [];
    querySnapshot.forEach((document) => {
      newArray.push(document.data());
    });
    setAllUserItems(newArray);
  }

  async function getAllItems() {
    const groupCollection = collectionGroup(db, "foodItem");
    const foodItems = query(groupCollection);
    const querySnapshot = await getDocs(foodItems);
    const newArray = [];
    querySnapshot.forEach((document) => {
      newArray.push(document.data());
    });
    setAllItems(newArray);
  }

  const UserItems = allUserItems.map((item) => {
    return (
      <div className="flex flex-col justify-center align-middle gap-4">
        {item.name ? <div>{item.name}</div> : ""}
        <div>{item.kcalPer100g}</div>
        <div>{item.gramsUsed}</div>
        <div>{item.totalKcal}</div>
      </div>
    );
  });

  const allOpenItems = allItems.map((item) => {
    return (
      <div className="flex flex-col justify-center align-middle gap-4">
        {item.name ? <div>{item.name}</div> : ""}
        <div>{item.kcalPer100g}</div>
        <div>{item.gramsUsed}</div>
        <div>{item.totalKcal}</div>
      </div>
    );
  });

  return (
    <div
      className={classNames({ flex: true, "flex-col": true, "gap-4": true })}
    >
      <button className="" onClick={login}>
        Login with google
      </button>
      <button onClick={logout}>sign Out</button>
      <h1
        className={classNames({
          inline: true,
          absolute: true,
          "right-4": true,
          "top-4": true,
          "text-green-600": loggedIn,
          "text-red-800": !loggedIn,
        })}
      >
        {loggedIn ? "You are logged in" : "You are not logged in"}
      </h1>
      {loggedIn ? (
        <FoodModal btnText="Add Food Item" passedFunction={addFoodItem} />
      ) : null}
      <button onClick={getAllUserItems}>List your Food Items</button>
      <button onClick={getAllItems}>browse all food items</button>
      {UserItems}
      {allOpenItems}
    </div>
  );
}
