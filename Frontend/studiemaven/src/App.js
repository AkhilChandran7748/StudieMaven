import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import { history } from './Core/Store';
import Routes from './Core/Routes';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { setBaseUrl } from "../src/Services/HttpService";
import loaderGif from './assets/loader.gif';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const scrollRef = useRef(null);
  const locoScrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let init = { method: "GET", headers: headers };
    fetch("/appConfig.json", init)
      .then((response) => response.json())
      .then((obj) => {
        setBaseUrl(obj.baseUrl);
        setLoaded(true);
      });
  }, []);

  // Destroy and recreate LocomotiveScroll on every route change
  useEffect(() => {
    if (!loaded || !scrollRef.current) return;

    // Destroy existing instance if it exists
    if (locoScrollRef.current) {
      locoScrollRef.current.destroy();
      locoScrollRef.current = null;
    }

    // Give the DOM a moment to update
    const timer = setTimeout(() => {
      locoScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.09,
        multiplier: 1,
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
        locoScrollRef.current = null;
      }
    };
    // eslint-disable-next-line
  }, [loaded, location.pathname]);

  // Listen for custom scroll update event from dynamic pages (MutationObserver, tab, accordion, image load)
  useEffect(() => {
    const handleScrollUpdate = () => {
      // Only update if LocomotiveScroll is initialized
      locoScrollRef.current && locoScrollRef.current.update();
    };
    window.addEventListener('pingme-scroll-update', handleScrollUpdate);
    return () => {
      window.removeEventListener('pingme-scroll-update', handleScrollUpdate);
    };
  }, [loaded]);

  return (
    <div className="App">
      {!loaded && (
        <div className="loader-wrapper">
          <img
            src={loaderGif}
            alt="Loading..."
            className="loader-gif fade-zoom-in"
          />
        </div>
      )}
      {loaded && (
        <div data-scroll-container ref={scrollRef}>
          <PrimeReactProvider>
            <Routes history={history} />
          </PrimeReactProvider>
        </div>
      )}
    </div>
  );
}

export default App;