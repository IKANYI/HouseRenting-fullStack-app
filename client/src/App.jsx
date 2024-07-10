import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css";
import Login from '../src/components/Login.jsx'
import Header from '../src/components/Header/Header.jsx'
import Home from '../src/components/Home.jsx'
import Houses from '../src/components/Houses.jsx'
/*import Payment from '../src/components/Payment';*/
import Navigation from '../src/components/Navigation.jsx'
import SignUp from "./components/SignUp.jsx";
import AddProduct from "./components/AddProduct.jsx";
import HouseList from "./components/HouseList.jsx";


function App() {

  return (
    <>
    
     <BrowserRouter>
        <Header/>
       <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/house"element={<HouseList/>}/>
        <Route path="//addproduct"element={<AddProduct/>}/>
        <Route path="/navigation"element={<Navigation/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/signup"element={<SignUp/>}/>
       </Routes>
     </BrowserRouter>

    </>
  );
}

export default App;
