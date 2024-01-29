//import logo from './logo.svg';
import './App.css';
// import PropsComponent from './components/Functionalcomponents/PropsComponent';
// import StateComponent from './components/Functionalcomponents/StateComponents';
import NavBar from './components/Functionalcomponents/NavBar';
import Home from './components/Functionalcomponents/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/Functionalcomponents/About';
import Login from './components/Functionalcomponents/Login';
import Project from './components/Functionalcomponents/Project';
import Footer from './components/Functionalcomponents/Footer';
import Reference from './components/Functionalcomponents/Reference';
import Map from './components/Functionalcomponents/Map';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/About" element={<About/>} ></Route>
        <Route path="/Project" element={<Project/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Reference" element={<Reference/>}></Route>
        <Route path="/Map" element={<Map/>}></Route>
      </Routes>
      </BrowserRouter>  
      <footer/>                              
      {/* <PropsComp name= "Soundharya" course="MERN"/> */}
        <header className="App-header">
      
       {/* <img src={logo} className="App-logo" alt="logo" />
        
       <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a> */}
         {/* <StateComponent></StateComponent> */}
        </header> 
      <Footer></Footer>
   </div>
    
  );
}
export default App