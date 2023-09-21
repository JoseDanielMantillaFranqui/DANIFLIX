import GlobalStyle from "./Global";
import Home from "./Screens/Home";
import NuevoVideo from "./Screens/NuevoVideo";
import NuevaCategoria from "./Screens/NuevaCategoria";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (<>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nuevoVideo' element={<NuevoVideo/>} />
        <Route path="/nuevaCategoria" element={< NuevaCategoria/>} />
      </Routes>
    </Router>
    </>)
}

export default App;
