import './App.css';
import { history } from './Core/Store';
import Routes from './Core/Routes';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import React, { useState } from 'react';
import { setBaseUrl } from "../src/Services/HttpService";
import loaderGif from './assets/loader.gif';

function App() {
  const [loaded, setLoaded] = useState(false)
  React.useEffect(() => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let init = {
      method: "GET",
      headers: headers,
    };
    fetch("/appConfig.json", init)
      .then((response) => response.json())
      .then((obj) => {
        setBaseUrl(obj.baseUrl);
        setLoaded(true)
      });
  }, []);
  return (
    <div className="App">
      {!loaded && (
        <div className="loader-wrapper">
          <img src={loaderGif} alt="Loading..." className="loader-gif" />
        </div>
      )}
      {loaded && (
        <PrimeReactProvider>
          <Routes history={history} />
        </PrimeReactProvider>
      )}
    </div>
  );
}

export default App;