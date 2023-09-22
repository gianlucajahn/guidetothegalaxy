import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
  } from "firebase/auth";
  import { useState } from "react";
  
  export function LoginModal(props) {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("Password");
  
    async function createUser() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(userCredential);
      } catch {}
    }
  
    async function signInWithGoogle() {
      const result = await signInWithPopup(auth, provider);
      console.log("credentials", GoogleAuthProvider.credentialFromResult(result));
      console.log("user", result.user);
    }
    return (
      <div className="flex flex-col items-center">
        <button className="btn" onClick={() => window.my_modal_2.showModal()}>
          {props.btnText}
        </button>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box flex flex-col gap-4">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn" onClick={createUser}>
              Anmelden
            </button>
            <button className="btn" onClick={signInWithGoogle}>
              Anmelden mit google
            </button>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    );
  }
  