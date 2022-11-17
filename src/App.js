import './App.css';
import {Routes, Route} from 'react-router'
import Header from './components/header/header';
import MainPage from './pages/mainPage/mainPage';
import IconsBar from './components/iconsBar/iconsBar';
import Footer from './components/footer/footer';
import BookPage from './pages/book/bookPage';
import MenuPage from './pages/menuPage/menuPage';
import CareerPage from './pages/careerPage/careerPage';
function App() {
  return (
    
    <div className="App">
      <div className='main'>
      <Header/>
      <Routes>
      <Route path='/' element={<MainPage/> }/>
      <Route path='/booking' element={<BookPage/> }/>
      <Route path='/menu' element={<MenuPage />}/>
      <Route path='/career' element={<CareerPage/>}/>
      </Routes>
      </div>

     <Footer>
      <IconsBar/>
     </Footer>
     
      </div>
      
  );
}

export default App;
