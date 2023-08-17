import './App.css';
import AddEmployee from './components/AddEmployee';
import FooterComp from './components/FooterComp';
import HeaderComp from './components/HeaderComp';
import ListEmployee from './components/ListEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComp></HeaderComp>
        <div className="container">
          <Routes>
            <Route path="/" Component={ListEmployee}></Route>
            <Route path="/employees" Component={ListEmployee}></Route>
            <Route
              path="/employees/add-employee"
              Component={AddEmployee}
            ></Route>
            <Route
              path="/employees/edit-employee/:id"
              Component={AddEmployee}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <FooterComp></FooterComp>
    </div>
  );
}

export default App;
