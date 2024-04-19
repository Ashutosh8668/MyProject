import './App.css';
import Dashboard from './page';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Changed alias to 'Router'
import Profile from './page/Profile';
import Summary from './page/Summary';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
