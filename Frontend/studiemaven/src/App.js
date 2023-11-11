
import './App.css';
import { history } from './Core/Store';
import Routes from './Core/Routes';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
function App() {
  return (
    <div className="App">
      <PrimeReactProvider>
        <Routes history={history} />
      </PrimeReactProvider>
    </div>
  );
}

export default App;
