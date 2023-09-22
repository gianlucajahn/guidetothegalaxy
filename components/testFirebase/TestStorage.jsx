import { useState } from "react";
import { db } from "/firebase.js";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { LoginModal } from "./LoginModal.jsx";

function TestStorage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [docSnap, setDocSnap] = useState("");
  const [message, setMessage] = useState("hello");

  const navigate = useNavigate();

  function onChangedName(e) {
    setName(e.target.value);
  }

  function onChangedSurname(e) {
    setSurname(e.target.value);
  }

  async function sendUserData() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: name,
        last: surname,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function sendUserDataDifferently() {
    try {
      const docRefTwo = doc(db, "users", "Thomas");
      console.log("doc ref two", docRefTwo);
      const answer = await setDoc(
        docRefTwo,
        {
          last: "fuß",
          gurke: "drei",
        },
        { mergeFields: true }
      );
      console.log("nswer", answer);
    } catch (e) {
      console.log(e);
    }
  }

  async function setDocument() {
    try {
      await setDoc(doc(db, "users", name), { name: name, surname: surname });
      setMessage("User named " + name + " was created");
    } catch (e) {
      setMessage(e);
    }
  }

  async function getDocument() {
    if (name) {
      const docSnap_ = await getDoc(doc(db, "users", name));
      if (docSnap_.exists()) {
        console.log("docsnap", docSnap_.data());
        setDocSnap(docSnap_.data());
        setMessage(
          "document with name " +
            docSnap_.data().name +
            " " +
            docSnap_.data().surname +
            " was fetched"
        );
      } else {
        console.error("document not existant");
        setMessage("document with that name doesnt exist");
      }
    } else {
      setMessage("name was not specified");
    }
  }

  async function getAllLegendUsers() {
    const q = query(collection(db, "users"), where("legende", "==", true));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      let legendsMessage = "We found these legends:";
      querySnapshot.forEach((doc) => {
        legendsMessage +=
          " " + doc.data().name + " " + doc.data().surname + ",";
      });
      setMessage(legendsMessage);
    } else {
      setMessage("No legends found");
    }
  }

  return (
    <div className="flex flex-col items-center justify-start gap-11">
      <h1>{message}</h1>

        <button className="">Anmelden</button>
        <input value={name} onChange={onChangedName}></input>
        <input value={surname} onChange={(e) => onChangedSurname(e)}></input>
        <button onClick={sendUserData}>send user data to server</button>
        <button onClick={setDocument}>set user doc in collection</button>
        <button onClick={getDocument}>Get User Document</button>
        <button onClick={getAllLegendUsers}>Get all legendary users</button>
        <button onClick={()=>navigate('/auth')}>go to authentification</button>
      <LoginModal btnText="Mit email anmelden"/>
    </div>
  );
}

export default TestStorage;
