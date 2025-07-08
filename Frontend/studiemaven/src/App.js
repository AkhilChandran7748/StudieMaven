import './App.css';
import { history } from './Core/Store';
import Routes from './Core/Routes';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import React, { useState } from 'react';
import { setBaseUrl } from "../src/Services/HttpService";

// Add your loader CSS here or in your main CSS file
const loaderStyle = `
.loader {
  width: fit-content;
  font-size: 30px;
  line-height: 1.5;
  font-family: system-ui,sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #ed2a24;
  background:
    radial-gradient(1.13em at 50% 1.6em,#ed2a24 99%,#0000 101%) calc(50% - 1.6em) 0/3.2em 100% text,
    radial-gradient(1.13em at 50% -0.8em,#ed2a24 99%,#0000 101%) 50% .8em/3.2em 100% repeat-x  text;
  animation: l9 2s linear infinite;
}
.loader:before {
  content: "Loading";
}
@keyframes l9 {
  to {background-position: calc(50% + 1.6em) 0,calc(50% + 3.2em) .8em}
}
`;

function App() {
  const [loaded, setLoaded] = useState(false)
  React.useEffect(() => {
    // Add loader styles to the head (if not already present)
    if (!document.getElementById('app-loader-style')) {
      const style = document.createElement('style');
      style.id = 'app-loader-style';
      style.innerHTML = loaderStyle;
      document.head.appendChild(style);
    }
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
        <div style={{
          width: "100vw",
          height: "100vh",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
          zIndex: 9999,
          position: "fixed",
          top: 0,
          left: 0
        }}>
          <div className="loader"></div>
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