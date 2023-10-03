import './App.css';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import Home from './components/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<AddItem/>} />
        <Route path='/edit' element={<EditItem/>} />
           
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
