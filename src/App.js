import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { auth } from "./Firebase1";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { login, logout, selectUser } from "./features/userSlice";
import Widgets from "./Widgets";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="App">
      {/*header Part*/}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="App_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}

      {/*App Body*/}
      {/*Sidebar*/}
      {/*Feed*/}
      {/*Widgets*/}
    </div>
  );
}

export default App;
