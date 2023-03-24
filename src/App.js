import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes} from "react-router-dom";
import AbouttheProgram from "./routes/AbouttheProgram";
import Instructions from "./routes/Instructions";
import ImportantDates from "./routes/ImportantDates";
import Contact from "./routes/Contact";
export default function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/about" element={<AbouttheProgram/>}/>
        <Route path="/instructions" element={<Instructions/>}/>
        <Route path="/dates" element={<ImportantDates/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
        <Navbar/>
        <AbouttheProgram/>
    </div>
  )
}
