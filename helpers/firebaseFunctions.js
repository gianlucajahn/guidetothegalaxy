import { db } from "/firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";

async function getReadArticles(uid) {
  // get users data including the read articles
  const docSnap = await getDocSnap(uid);
  // create a deep copy from the read-articles object in the users data
  const readArticles = JSON.parse(JSON.stringify(docSnap.data()["read-articles"]));
  return readArticles;
}

async function getDocSnap(uid) {
  // get users data including the read articles
  const docSnap = await getDoc(doc(db, "users", uid));
  return docSnap;
}

async function setReadArticles(readArticles, uid) {
  // update the read-articles object in the users document with readArticles
  // note - if object read-articles doesnt exist yet, it will be created
  await setDoc(doc(db, "users", uid), { "read-articles": readArticles }, { merge: true });
}

async function markAsRead(user, article, setState = ()=>{}) {
  const readArticles = await getReadArticles(user.uid);
  // set article property to true - will create the property first if it doest exist yet
  readArticles[article] = true;
  await setReadArticles(readArticles, user.uid);
  setState(readArticles[article]);
}

async function markAsNotRead(user, article, setState = ()=>{}) {
  const readArticles = await getReadArticles(user.uid);
  // set article property to true - will create the property first if it doest exist yet
  readArticles[article] = false;
  await setReadArticles(readArticles, user.uid);
  setState(readArticles[article]);
}

export { getReadArticles, setReadArticles, getDocSnap, markAsNotRead, markAsRead };
