import './App.css';
import {
  BrowserRouter,
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import ColorTherapy from './components/ColorTherapy';
import SoundTherapy from './components/SoundTherapy';
import Home from './components/Home';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/color' element={<ColorTherapy />} />
        <Route path='/sound' element={<SoundTherapy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
