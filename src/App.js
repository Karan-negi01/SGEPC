import { Route, BrowserRouter, Routes } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import About from "./components/aboutus/About";
import Awards from "./components/awards/Awards";
import { useNavigate } from "react-router-dom";


function App() {

  const Navigate =(path)=>{
    Navigate(path)
  }

  return (
    <BrowserRouter>
    <Routes>


    <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Homepage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/awards" element={<Awards/>}/>
      
      
      


    </Routes>


    </BrowserRouter>
  );
}

export default App;
