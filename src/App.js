import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Header from './layout/header/header';
import MainBody from './layout/body/main';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="App-header">
            <MainBody />
        </div>
      </Router>
      
    </div>
  );
}

export default App;
