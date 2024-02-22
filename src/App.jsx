import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import Netflix from './pages/netflix';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
        <Route exact path='player' element={<Netflix />}></Route>
        <Route exact path='/' element={<Netflix />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
