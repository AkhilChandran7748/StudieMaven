import './App.css';
import { history } from './Core/Store';
import Routes from './Core/Routes';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import React, { useState } from 'react';
import { setBaseUrl } from "../src/Services/HttpService";




const loaderStyle = `
.loader {
  color: #ed2a24;
  width: 3px;
  aspect-ratio: 1;
  border-radius: 100%;
  box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
  transform: translateX(-38px);
  animation: l21 .5s infinite alternate linear;
}

@keyframes l21 {
  50%  {box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px}
  100% {box-shadow: 19px 0 0 0  , 38px 0 0 3px, 57px 0 0 7px}
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