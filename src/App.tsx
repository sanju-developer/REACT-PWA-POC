import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "src/Routes";
import { initIndexDb } from "src/indexDb";
import firebase from "./firebase";

import "./App.css";

function App() {
  useEffect(() => {
    // initiallization of index DB
    initIndexDb();
    // setup for firebase push notification
    console.log(
      firebase.messaging.isSupported(),
      "firebase.messaging.isSupported()"
    );
    if (firebase.messaging.isSupported()) {
      const msg = firebase.messaging();
      Notification.requestPermission(function (status) {
        console.log("Notification permission status:", status);
        if (status === "granted") {
          msg
            .getToken()
            .then((token: string) => console.log("$$$$$ ft $$$$$", token))
            .catch(err => console.log("error while asking fo FCM token", err));
        } else console.log("permission not granted", status);
      });
    }
  }, []);

  return (
    <div className="App">
      <Routing />
      <footer>
        <u>
          <b>Developed by Vivek Rajoriya, 2020</b>
        </u>
      </footer>
    </div>
  );
}

export default App;
