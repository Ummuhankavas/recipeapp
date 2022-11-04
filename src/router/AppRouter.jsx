import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { GlobalStyles } from '../components/globalStyles/Global.styles';
import Home from '../pages/home/Home';
import Navbar from '../components/nav/Navbar';
import About from '../pages/about/About';
import Login from '../pages/login/Login';
const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <GlobalStyles/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter