import React, { useEffect, useState } from 'react';
import './App.css';

import DeviceList from "./Components/DeviceList";

const _DEVICE_LIST_API = "http://localhost:9090/devices/fetch";


function App() {

  const [devices, setDevices] = useState([]);

  useEffect(() => {

    // const reqOptions = {
    //   headers: {
    //     "mode": "no-cors",
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //     "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTU5Mjc2ODE5NywiZXhwIjoxNTkyODU0NTk3fQ.jzvoR5EO-pfcJaapJdqRNwvEDDsXYqF8E13XD8-Z_M4"
    //   }
    // }

    // fetch(_DEVICE_LIST_API, reqOptions).then(res => {
    //   console.log("headers", Object.keys(res));
    //   return res.json()
    // })
    //   .then(result => {
    //     setDevices(result);
    //   }, error => {
    //     console.log("error", error)
    //   })

    // return () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTU5Mjc2ODE5NywiZXhwIjoxNTkyODU0NTk3fQ.jzvoR5EO-pfcJaapJdqRNwvEDDsXYqF8E13XD8-Z_M4");
    myHeaders.append("Access-Control-Request-Headers", "");
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("/devices/fetch", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        setDevices(JSON.parse(result));
      }, error => console.log('error', error));
    // }


  }, []);

  return (
    <div className="App">

      <DeviceList devices={devices} />
    </div>
  );
}

export default App;
