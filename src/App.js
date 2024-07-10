import Portfolio from './component1/Portfolio';
import Side from './component2/Side';
import Todo from './component3/Todo';

import Game from './component5/Game';
import Calculator from './component6/Calculator';
import StopWatch from './component7/StopWatch';
import GlobalProvider from './component8/GlobalProvider';
import Music from './component9/Music';

import './App.css';
import Weather from './component4/Weather';
import {Route,  Routes, Navigate, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return(
   <>
   <Router>
  <Side/>
  
    <Routes>
    <Route path='/' element={ <Portfolio/>}></Route>  
  
   <Route path='/TodoApp' element={<Todo/>}></Route>
   <Route path='/TodoApp' element={<Todo/>}></Route>
   <Route path='/WeatherApp' element={<Weather/>}></Route>
  
   <Route path='/GameApp' element={<Game/>}></Route>
   <Route path='/Calculator' element={<Calculator/>}></Route>
   <Route path='/StopWatch' element={<StopWatch/>}></Route>
   <Route path='/Quiz' element={<GlobalProvider/>}></Route>
   <Route path='/Music' element={<Music/>}></Route>
   <Route path='*' element={<Navigate to ='/'/>} ></Route>
   </Routes>

   </Router>

   </>
  )
  
}

export default App;
