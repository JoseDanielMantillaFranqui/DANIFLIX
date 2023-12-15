import GlobalStyle from './Global'
import Home from './Screens/Home'
import NuevoVideo from './Screens/NuevoVideo'
import NuevaCategoria from './Screens/NuevaCategoria'
import VerVideo from './Screens/VerVideo'
import Page404 from './Screens/Page404'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nuevoVideo' element={<NuevoVideo />} />
          <Route path='/nuevaCategoria' element={<NuevaCategoria />} />
          <Route path='/verVideo/:id' element={<VerVideo />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
